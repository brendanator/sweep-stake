(ns sweep-stake.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state 
  (atom 
    {:players 
       [{:player-id 1 :name "Brendan"} 
        {:player-id 2 :name "Paul"} 
        {:player-id 3 :name "Lis"}]
     :bets 
       [{:bet-id 1 :description "Full time score" :type :score}
        {:bet-id 2 :description "Number of yellows" :type :number}
        {:bet-id 3 :description "First goal scorer" :type :name}]
     :predications
       [{:bet-id 1 :player-id 1 :predication "2-1"}
        {:bet-id 1 :player-id 2 :predication "1-1"}
        {:bet-id 1 :player-id 3 :predication "0-1"}
        {:bet-id 2 :player-id 1 :predication 1}
        {:bet-id 2 :player-id 2 :predication 2}
        {:bet-id 2 :player-id 3 :predication 0}
        {:bet-id 3 :player-id 1 :predication "Tom"}
        {:bet-id 3 :player-id 2 :predication "Dick"}
        {:bet-id 3 :player-id 3 :predication "Harry"}]}))

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

(defn bet-row [bet-data owner]
  (reify
    om/IRender
    (render [_]
      (dom/tr nil 
        (dom/td nil (:description (:bet bet-data)))))))

(defn sweep-stake [app owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/table nil
        (om/build heading-row (:players app))
        (om/build-all bet-row (:bets app))))))

(om/root
  sweep-stake
  app-state
  {:target (. js/document (getElementById "app"))})
