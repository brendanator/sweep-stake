(defproject sweep-stake "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo}

  :min-lein-version "2.4.1"

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.6.5"]
                 [com.facebook/react "0.9.0"]]
  
  :plugins [[lein-cljsbuild "1.0.3"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds {:sweep-stake
            {:source-paths ["src/cljs"]
             :compiler
             {:output-to "dev-resources/public/js/sweep_stake.js"
              :output-dir "dev-resources/public/js"
              :optimizations :advanced
              :pretty-print false
              :source-map "dev-resources/public/js/sweep_stake.js.map"}}}})
