// Compiled by ClojureScript 0.0-2268
goog.provide('sweep_stake.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
sweep_stake.core.app_state = cljs.core.atom.call(null,(function (){var temp__4124__auto__ = localStorage.getItem(new cljs.core.Keyword(null,"storage","storage",1867247511));if(cljs.core.truth_(temp__4124__auto__))
{var existing = temp__4124__auto__;return cljs.reader.read_string.call(null,existing);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Brendan",new cljs.core.Keyword(null,"predications","predications",1323956396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(1),new cljs.core.Keyword(null,"predication","predication",-1894212241),"2-1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(2),new cljs.core.Keyword(null,"predication","predication",-1894212241),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(3),new cljs.core.Keyword(null,"predication","predication",-1894212241),"Tom"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Paul",new cljs.core.Keyword(null,"predications","predications",1323956396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(1),new cljs.core.Keyword(null,"predication","predication",-1894212241),"1-1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(3),new cljs.core.Keyword(null,"predication","predication",-1894212241),"Dick"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Lis",new cljs.core.Keyword(null,"predications","predications",1323956396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(1),new cljs.core.Keyword(null,"predication","predication",-1894212241),"1-2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(2),new cljs.core.Keyword(null,"predication","predication",-1894212241),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(3),new cljs.core.Keyword(null,"predication","predication",-1894212241),"Harry"], null)], null)], null)], null),new cljs.core.Keyword(null,"bets","bets",-1584076982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(1),new cljs.core.Keyword(null,"description","description",-1428560544),"Full time score",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"result","result",1415092211),"1-2"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(2),new cljs.core.Keyword(null,"description","description",-1428560544),"Number of yellows",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"result","result",1415092211),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(3),new cljs.core.Keyword(null,"description","description",-1428560544),"First goal scorer",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"result","result",1415092211),"Tom"], null)], null)], null);
}
})());
cljs.core.add_watch.call(null,sweep_stake.core.app_state,new cljs.core.Keyword(null,"storage","storage",1867247511),(function (key,_,___$1,new_state){return localStorage.setItem(key,new_state);
}));
sweep_stake.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
sweep_stake.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
sweep_stake.core.editable = (function editable(data,owner,p__13669){var map__13676 = p__13669;var map__13676__$1 = ((cljs.core.seq_QMARK_.call(null,map__13676))?cljs.core.apply.call(null,cljs.core.hash_map,map__13676):map__13676);var opts = map__13676__$1;var edit_key = cljs.core.get.call(null,map__13676__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var props = cljs.core.get.call(null,map__13676__$1,new cljs.core.Keyword(null,"props","props",453281727));var tag = cljs.core.get.call(null,map__13676__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));if(typeof sweep_stake.core.t13677 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t13677 = (function (tag,props,edit_key,opts,map__13676,p__13669,owner,data,editable,meta13678){
this.tag = tag;
this.props = props;
this.edit_key = edit_key;
this.opts = opts;
this.map__13676 = map__13676;
this.p__13669 = p__13669;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta13678 = meta13678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t13677.cljs$lang$type = true;
sweep_stake.core.t13677.cljs$lang$ctorStr = "sweep-stake.core/t13677";
sweep_stake.core.t13677.cljs$lang$ctorPrWriter = ((function (map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t13677");
});})(map__13676,map__13676__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t13677.prototype.om$core$IRenderState$ = true;
sweep_stake.core.t13677.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (_,p__13680){var self__ = this;
var map__13681 = p__13680;var map__13681__$1 = ((cljs.core.seq_QMARK_.call(null,map__13681))?cljs.core.apply.call(null,cljs.core.hash_map,map__13681):map__13681);var editing = cljs.core.get.call(null,map__13681__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return self__.tag.call(null,self__.props,React.DOM.span({"onClick": ((function (text,___$1,map__13681,map__13681__$1,editing,map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(text,___$1,map__13681,map__13681__$1,editing,map__13676,map__13676__$1,opts,edit_key,props,tag))
, "style": sweep_stake.core.display.call(null,cljs.core.not.call(null,editing))},text),om.dom.input.call(null,{"onBlur": ((function (text,___$1,map__13681,map__13681__$1,editing,map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601))))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else
{return null;
}
});})(text,___$1,map__13681,map__13681__$1,editing,map__13676,map__13676__$1,opts,edit_key,props,tag))
, "onKeyPress": ((function (text,___$1,map__13681,map__13681__$1,editing,map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (p1__13668_SHARP_){if((p1__13668_SHARP_.keyCode === (13)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else
{return null;
}
});})(text,___$1,map__13681,map__13681__$1,editing,map__13676,map__13676__$1,opts,edit_key,props,tag))
, "onChange": ((function (text,___$1,map__13681,map__13681__$1,editing,map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (p1__13667_SHARP_){return sweep_stake.core.handle_change.call(null,p1__13667_SHARP_,self__.data,self__.edit_key,self__.owner);
});})(text,___$1,map__13681,map__13681__$1,editing,map__13676,map__13676__$1,opts,edit_key,props,tag))
, "value": text, "style": sweep_stake.core.display.call(null,editing)}));
});})(map__13676,map__13676__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t13677.prototype.om$core$IInitState$ = true;
sweep_stake.core.t13677.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});})(map__13676,map__13676__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t13677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (_13679){var self__ = this;
var _13679__$1 = this;return self__.meta13678;
});})(map__13676,map__13676__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t13677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function (_13679,meta13678__$1){var self__ = this;
var _13679__$1 = this;return (new sweep_stake.core.t13677(self__.tag,self__.props,self__.edit_key,self__.opts,self__.map__13676,self__.p__13669,self__.owner,self__.data,self__.editable,meta13678__$1));
});})(map__13676,map__13676__$1,opts,edit_key,props,tag))
;
sweep_stake.core.__GT_t13677 = ((function (map__13676,map__13676__$1,opts,edit_key,props,tag){
return (function __GT_t13677(tag__$1,props__$1,edit_key__$1,opts__$1,map__13676__$2,p__13669__$1,owner__$1,data__$1,editable__$1,meta13678){return (new sweep_stake.core.t13677(tag__$1,props__$1,edit_key__$1,opts__$1,map__13676__$2,p__13669__$1,owner__$1,data__$1,editable__$1,meta13678));
});})(map__13676,map__13676__$1,opts,edit_key,props,tag))
;
}
return (new sweep_stake.core.t13677(tag,props,edit_key,opts,map__13676__$1,p__13669,owner,data,editable,null));
});
sweep_stake.core.player_header = (function player_header(player,owner){if(typeof sweep_stake.core.t13685 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t13685 = (function (owner,player,player_header,meta13686){
this.owner = owner;
this.player = player;
this.player_header = player_header;
this.meta13686 = meta13686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t13685.cljs$lang$type = true;
sweep_stake.core.t13685.cljs$lang$ctorStr = "sweep-stake.core/t13685";
sweep_stake.core.t13685.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t13685");
});
sweep_stake.core.t13685.prototype.om$core$IRender$ = true;
sweep_stake.core.t13685.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return om.core.build.call(null,sweep_stake.core.editable,self__.player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.th,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null));
});
sweep_stake.core.t13685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13687){var self__ = this;
var _13687__$1 = this;return self__.meta13686;
});
sweep_stake.core.t13685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13687,meta13686__$1){var self__ = this;
var _13687__$1 = this;return (new sweep_stake.core.t13685(self__.owner,self__.player,self__.player_header,meta13686__$1));
});
sweep_stake.core.__GT_t13685 = (function __GT_t13685(owner__$1,player__$1,player_header__$1,meta13686){return (new sweep_stake.core.t13685(owner__$1,player__$1,player_header__$1,meta13686));
});
}
return (new sweep_stake.core.t13685(owner,player,player_header,null));
});
sweep_stake.core.heading_row = (function heading_row(players,owner){if(typeof sweep_stake.core.t13691 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t13691 = (function (owner,players,heading_row,meta13692){
this.owner = owner;
this.players = players;
this.heading_row = heading_row;
this.meta13692 = meta13692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t13691.cljs$lang$type = true;
sweep_stake.core.t13691.cljs$lang$ctorStr = "sweep-stake.core/t13691";
sweep_stake.core.t13691.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t13691");
});
sweep_stake.core.t13691.prototype.om$core$IRender$ = true;
sweep_stake.core.t13691.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.th(null,"Bet"),om.core.build_all.call(null,sweep_stake.core.player_header,self__.players),React.DOM.th(null,"Result")], null)));
});
sweep_stake.core.t13691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13693){var self__ = this;
var _13693__$1 = this;return self__.meta13692;
});
sweep_stake.core.t13691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13693,meta13692__$1){var self__ = this;
var _13693__$1 = this;return (new sweep_stake.core.t13691(self__.owner,self__.players,self__.heading_row,meta13692__$1));
});
sweep_stake.core.__GT_t13691 = (function __GT_t13691(owner__$1,players__$1,heading_row__$1,meta13692){return (new sweep_stake.core.t13691(owner__$1,players__$1,heading_row__$1,meta13692));
});
}
return (new sweep_stake.core.t13691(owner,players,heading_row,null));
});
sweep_stake.core.predication = (function predication(player,bet_id){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__13694_SHARP_){return cljs.core._EQ_.call(null,bet_id,new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(p1__13694_SHARP_));
}),new cljs.core.Keyword(null,"predications","predications",1323956396).cljs$core$IFn$_invoke$arity$1(player)));
});
sweep_stake.core.predication_cell = (function predication_cell(p__13695,owner){var vec__13700 = p__13695;var player = cljs.core.nth.call(null,vec__13700,(0),null);var bet = cljs.core.nth.call(null,vec__13700,(1),null);var winners = cljs.core.nth.call(null,vec__13700,(2),null);if(typeof sweep_stake.core.t13701 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t13701 = (function (winners,bet,player,vec__13700,owner,p__13695,predication_cell,meta13702){
this.winners = winners;
this.bet = bet;
this.player = player;
this.vec__13700 = vec__13700;
this.owner = owner;
this.p__13695 = p__13695;
this.predication_cell = predication_cell;
this.meta13702 = meta13702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t13701.cljs$lang$type = true;
sweep_stake.core.t13701.cljs$lang$ctorStr = "sweep-stake.core/t13701";
sweep_stake.core.t13701.cljs$lang$ctorPrWriter = ((function (vec__13700,player,bet,winners){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t13701");
});})(vec__13700,player,bet,winners))
;
sweep_stake.core.t13701.prototype.om$core$IRender$ = true;
sweep_stake.core.t13701.prototype.om$core$IRender$render$arity$1 = ((function (vec__13700,player,bet,winners){
return (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var css = (cljs.core.truth_(self__.winners.call(null,self__.player))?{"className": "winner"}:null);return om.core.build.call(null,sweep_stake.core.editable,sweep_stake.core.predication.call(null,self__.player,new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(self__.bet)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"predication","predication",-1894212241),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),css], null)], null));
});})(vec__13700,player,bet,winners))
;
sweep_stake.core.t13701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__13700,player,bet,winners){
return (function (_13703){var self__ = this;
var _13703__$1 = this;return self__.meta13702;
});})(vec__13700,player,bet,winners))
;
sweep_stake.core.t13701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__13700,player,bet,winners){
return (function (_13703,meta13702__$1){var self__ = this;
var _13703__$1 = this;return (new sweep_stake.core.t13701(self__.winners,self__.bet,self__.player,self__.vec__13700,self__.owner,self__.p__13695,self__.predication_cell,meta13702__$1));
});})(vec__13700,player,bet,winners))
;
sweep_stake.core.__GT_t13701 = ((function (vec__13700,player,bet,winners){
return (function __GT_t13701(winners__$1,bet__$1,player__$1,vec__13700__$1,owner__$1,p__13695__$1,predication_cell__$1,meta13702){return (new sweep_stake.core.t13701(winners__$1,bet__$1,player__$1,vec__13700__$1,owner__$1,p__13695__$1,predication_cell__$1,meta13702));
});})(vec__13700,player,bet,winners))
;
}
return (new sweep_stake.core.t13701(winners,bet,player,vec__13700,owner,p__13695,predication_cell,null));
});
sweep_stake.core.bet_winners = (function bet_winners(players,bet){return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__13704_SHARP_){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(bet),new cljs.core.Keyword(null,"predication","predication",-1894212241),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(bet)], null)], true),new cljs.core.Keyword(null,"predications","predications",1323956396).cljs$core$IFn$_invoke$arity$1(p1__13704_SHARP_));
}),players));
});
sweep_stake.core.bet_row = (function bet_row(p__13705,owner){var vec__13710 = p__13705;var app = cljs.core.nth.call(null,vec__13710,(0),null);var bet = cljs.core.nth.call(null,vec__13710,(1),null);if(typeof sweep_stake.core.t13711 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t13711 = (function (bet,app,vec__13710,owner,p__13705,bet_row,meta13712){
this.bet = bet;
this.app = app;
this.vec__13710 = vec__13710;
this.owner = owner;
this.p__13705 = p__13705;
this.bet_row = bet_row;
this.meta13712 = meta13712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t13711.cljs$lang$type = true;
sweep_stake.core.t13711.cljs$lang$ctorStr = "sweep-stake.core/t13711";
sweep_stake.core.t13711.cljs$lang$ctorPrWriter = ((function (vec__13710,app,bet){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t13711");
});})(vec__13710,app,bet))
;
sweep_stake.core.t13711.prototype.om$core$IRender$ = true;
sweep_stake.core.t13711.prototype.om$core$IRender$render$arity$1 = ((function (vec__13710,app,bet){
return (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var players = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app);var bet_winners = sweep_stake.core.bet_winners.call(null,players,self__.bet);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.editable,self__.bet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null)),om.core.build_all.call(null,sweep_stake.core.predication_cell,cljs.core.map.call(null,cljs.core.vector,players,cljs.core.repeat.call(null,self__.bet),cljs.core.repeat.call(null,bet_winners))),om.core.build.call(null,sweep_stake.core.editable,self__.bet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null))], null)));
});})(vec__13710,app,bet))
;
sweep_stake.core.t13711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__13710,app,bet){
return (function (_13713){var self__ = this;
var _13713__$1 = this;return self__.meta13712;
});})(vec__13710,app,bet))
;
sweep_stake.core.t13711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__13710,app,bet){
return (function (_13713,meta13712__$1){var self__ = this;
var _13713__$1 = this;return (new sweep_stake.core.t13711(self__.bet,self__.app,self__.vec__13710,self__.owner,self__.p__13705,self__.bet_row,meta13712__$1));
});})(vec__13710,app,bet))
;
sweep_stake.core.__GT_t13711 = ((function (vec__13710,app,bet){
return (function __GT_t13711(bet__$1,app__$1,vec__13710__$1,owner__$1,p__13705__$1,bet_row__$1,meta13712){return (new sweep_stake.core.t13711(bet__$1,app__$1,vec__13710__$1,owner__$1,p__13705__$1,bet_row__$1,meta13712));
});})(vec__13710,app,bet))
;
}
return (new sweep_stake.core.t13711(bet,app,vec__13710,owner,p__13705,bet_row,null));
});
sweep_stake.core.player_wins = (function player_wins(player,bets){return cljs.core.count.call(null,cljs.core.mapcat.call(null,(function (p1__13714_SHARP_){return sweep_stake.core.bet_winners.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [player], null),p1__13714_SHARP_);
}),bets));
});
sweep_stake.core.totals_row = (function totals_row(app,owner){if(typeof sweep_stake.core.t13719 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t13719 = (function (owner,app,totals_row,meta13720){
this.owner = owner;
this.app = app;
this.totals_row = totals_row;
this.meta13720 = meta13720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t13719.cljs$lang$type = true;
sweep_stake.core.t13719.cljs$lang$ctorStr = "sweep-stake.core/t13719";
sweep_stake.core.t13719.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t13719");
});
sweep_stake.core.t13719.prototype.om$core$IRender$ = true;
sweep_stake.core.t13719.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var bets = new cljs.core.Keyword(null,"bets","bets",-1584076982).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.td(null,""),cljs.core.mapv.call(null,((function (bets,this__5121__auto____$1){
return (function (p1__13715_SHARP_){return React.DOM.td(null,sweep_stake.core.player_wins.call(null,p1__13715_SHARP_,bets));
});})(bets,this__5121__auto____$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.td(null,"")], null)));
});
sweep_stake.core.t13719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13721){var self__ = this;
var _13721__$1 = this;return self__.meta13720;
});
sweep_stake.core.t13719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13721,meta13720__$1){var self__ = this;
var _13721__$1 = this;return (new sweep_stake.core.t13719(self__.owner,self__.app,self__.totals_row,meta13720__$1));
});
sweep_stake.core.__GT_t13719 = (function __GT_t13719(owner__$1,app__$1,totals_row__$1,meta13720){return (new sweep_stake.core.t13719(owner__$1,app__$1,totals_row__$1,meta13720));
});
}
return (new sweep_stake.core.t13719(owner,app,totals_row,null));
});
sweep_stake.core.sweep_stake = (function sweep_stake__$1(app,owner){if(typeof sweep_stake.core.t13725 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t13725 = (function (owner,app,sweep_stake,meta13726){
this.owner = owner;
this.app = app;
this.sweep_stake = sweep_stake;
this.meta13726 = meta13726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t13725.cljs$lang$type = true;
sweep_stake.core.t13725.cljs$lang$ctorStr = "sweep-stake.core/t13725";
sweep_stake.core.t13725.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t13725");
});
sweep_stake.core.t13725.prototype.om$core$IRender$ = true;
sweep_stake.core.t13725.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return React.DOM.table(null,cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.heading_row,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build_all.call(null,sweep_stake.core.bet_row,cljs.core.map.call(null,cljs.core.vector,cljs.core.repeat.call(null,self__.app),new cljs.core.Keyword(null,"bets","bets",-1584076982).cljs$core$IFn$_invoke$arity$1(self__.app))),om.core.build.call(null,sweep_stake.core.totals_row,self__.app)], null))));
});
sweep_stake.core.t13725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13727){var self__ = this;
var _13727__$1 = this;return self__.meta13726;
});
sweep_stake.core.t13725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13727,meta13726__$1){var self__ = this;
var _13727__$1 = this;return (new sweep_stake.core.t13725(self__.owner,self__.app,self__.sweep_stake,meta13726__$1));
});
sweep_stake.core.__GT_t13725 = (function __GT_t13725(owner__$1,app__$1,sweep_stake__$2,meta13726){return (new sweep_stake.core.t13725(owner__$1,app__$1,sweep_stake__$2,meta13726));
});
}
return (new sweep_stake.core.t13725(owner,app,sweep_stake__$1,null));
});
om.core.root.call(null,sweep_stake.core.sweep_stake,sweep_stake.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
