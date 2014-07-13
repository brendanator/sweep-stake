(ns sweep-stake.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state 
  (atom 
    {:players 
       [{:name "Brendan" 
         :predications
           [{:bet-id 1 :predication "2-1"}
            {:bet-id 2 :predication 1}
            {:bet-id 3 :predication "Tom"}]}
        {:name "Paul"
         :predications
           [{:bet-id 1 :predication "1-1"}
            {:bet-id 3 :predication "Dick"}]}         
        {:name "Lis"
         :predications
           [{:bet-id 1 :predication "1-2"}
            {:bet-id 2 :predication 0}
            {:bet-id 3 :predication "Harry"}]}]
     :bets 
       [{:bet-id 1 :description "Full time score" :type :score :result "1-2"}
        {:bet-id 2 :description "Number of yellows" :type :number :result 0}
        {:bet-id 3 :description "First goal scorer" :type :name :result "Tom"}]}))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn handle-change [e data edit-key owner]
  (om/transact! data edit-key (fn [_] (.. e -target -value))))

(defn editable [data owner {:keys [tag props edit-key] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (let [text (get data edit-key)]
        (tag props
          (dom/span
            #js {:style (display (not editing))
                 :onClick #(om/set-state! owner :editing true)} text)
          (dom/input
            #js {:style (display editing)
                 :value text
                 :onChange #(handle-change % data edit-key owner)
                 :onKeyPress #(when (== (.-keyCode %) 13)
                                (om/set-state! owner :editing false))
                 :onBlur (fn [e]
                           (when (om/get-state owner :editing)
                             (om/set-state! owner :editing false)))}))))))

(defn player-header [player owner]
  (om/component
    (om/build editable player 
            {:opts {:edit-key :name
                    :tag dom/th
                    :props nil}})))

(defn heading-row [players owner]
  (om/component
    (apply dom/tr nil
    (flatten 
      [(dom/th nil "Bet")
       (om/build-all player-header players)
       (dom/th nil "Result")]))))

(defn predication [player bet-id]
  (first 
    (filter #(= bet-id (:bet-id %)) (:predications player))))

(defn predication-cell [[player bet winners] owner]
  (om/component
    (let [css (if (winners player) #js {:className "winner"})]
    (om/build editable (predication player (:bet-id bet))
      {:opts {:edit-key :predication
                        :tag dom/td
                        :props css}}))))

(defn bet-winners [players bet]
  (->> players
    (filter #(some #{{:bet-id (:bet-id bet) :predication (:result bet)}} (:predications %))) 
    set))

(defn bet-row [[app bet] owner]
  (om/component
    (let [players (:players app)
        bet-winners (bet-winners players bet)]
      (apply dom/tr nil 
        (flatten
          [(om/build editable bet
              {:opts {:edit-key :description
                      :tag dom/td
                      :props nil}})
           (om/build-all #(predication-cell [% bet bet-winners] %2) players)
           (om/build editable bet 
              {:opts {:edit-key :result
                      :tag dom/td
                      :props nil}})])))))

(defn player-wins [player bets]
  (->> bets
    (mapcat #(bet-winners [player] %))
    count))

(defn totals-row [app owner]
  (om/component
    (let [bets (:bets app)]
      (apply dom/tr nil
        (flatten
          [(dom/td nil "")
           (mapv #(dom/td nil (player-wins % bets)) (:players app))           
           (dom/td nil "")])))))

(defn sweep-stake [app owner]
  (om/component
    (dom/table nil
      (apply dom/tbody nil
        (flatten 
          [(om/build heading-row (:players app))
           (om/build-all #(bet-row [app %] %2) (:bets app))
           (om/build totals-row app)])))))

(defn sub-view [item owner]
  (om/component (dom/div nil (:text item))))

(defn something-else [original owner opts]
  (om/component
    (dom/div #js {:style #js {:border "1px solid #ccc"
                            :padding "5px"}}
    (dom/div nil
      (dom/span nil "Path:")
      (dom/pre #js {:style #js {:display "inline-block"}}
        (pr-str (om/path (second original)))))
    (apply om/build* original))))

(om/root
  sweep-stake
  app-state
  {:target (. js/document (getElementById "app"))
   :instrument
   (fn [f cursor m]
     (if (= f sub-view)
       (om/build* something-else [f cursor m])
       ::om/pass))})