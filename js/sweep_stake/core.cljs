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
            {:bet-id 2 :predication 2}
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

(defn player-header [player owner]
  (reify
    om/IRender
    (render [_]
      (dom/th nil (:name player)))))

(defn heading-row [players owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/tr nil
        (flatten 
          [(dom/th nil "Bet")
           (om/build-all player-header players)
           (dom/th nil "Result")])))))

(defn predication [player bet-id]
  (->> player
    :predications
    (filter #(= bet-id (:bet-id %)))
    first
    :predication))

(defn predication-cell [player bet winners]
  (reify
    om/IRender
    (render [_]
      (let [css (if (winners player) #js {:className "winner"})]
        (dom/td css (predication player (:bet-id bet)))))))

(defn bet-winners [players bet]
  (->> players
    (filter #(some #{{:bet-id (:bet-id bet) :predication (:result bet)}} (:predications %))) 
    set))

(defn bet-row [app bet owner]
  (reify
    om/IRender
    (render [_]
      (let [players (:players app)
            bet-winners (bet-winners players bet)]
        (apply dom/tr nil 
          (flatten
            [(dom/td nil (:description bet))
             (om/build-all #(predication-cell % bet bet-winners) players)
             (dom/td nil (:result bet))]))))))

(defn player-wins [player bets]
  (->> bets
    (mapcat #(bet-winners [player] %))
    count))

(defn totals-row [app owner]
  (reify
    om/IRender
    (render [_]
      (let [bets (:bets app)]
        (apply dom/tr nil
          (flatten
            [(dom/td nil "")
             (mapv #(dom/td nil (player-wins % bets)) (:players app))           
             (dom/td nil "")]))))))

(defn sweep-stake [app owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/table nil
        (flatten [
          (om/build heading-row (:players app))
          (om/build-all #(bet-row app % owner) (:bets app))
          (om/build totals-row app)])))))

(om/root
  sweep-stake
  app-state
  {:target (. js/document (getElementById "app"))})
