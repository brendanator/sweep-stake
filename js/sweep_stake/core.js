// Compiled by ClojureScript 0.0-2268
goog.provide('sweep_stake.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
sweep_stake.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Brendan",new cljs.core.Keyword(null,"predications","predications",1323956396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(1),new cljs.core.Keyword(null,"predication","predication",-1894212241),"2-1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(2),new cljs.core.Keyword(null,"predication","predication",-1894212241),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(3),new cljs.core.Keyword(null,"predication","predication",-1894212241),"Tom"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Paul",new cljs.core.Keyword(null,"predications","predications",1323956396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(1),new cljs.core.Keyword(null,"predication","predication",-1894212241),"1-1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(3),new cljs.core.Keyword(null,"predication","predication",-1894212241),"Dick"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Lis",new cljs.core.Keyword(null,"predications","predications",1323956396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(1),new cljs.core.Keyword(null,"predication","predication",-1894212241),"1-2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(2),new cljs.core.Keyword(null,"predication","predication",-1894212241),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(3),new cljs.core.Keyword(null,"predication","predication",-1894212241),"Harry"], null)], null)], null)], null),new cljs.core.Keyword(null,"bets","bets",-1584076982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(1),new cljs.core.Keyword(null,"description","description",-1428560544),"Full time score",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"result","result",1415092211),"1-2"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(2),new cljs.core.Keyword(null,"description","description",-1428560544),"Number of yellows",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"result","result",1415092211),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),(3),new cljs.core.Keyword(null,"description","description",-1428560544),"First goal scorer",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"result","result",1415092211),"Tom"], null)], null)], null));
sweep_stake.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
sweep_stake.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
sweep_stake.core.editable = (function editable(data,owner,p__9084){var map__9091 = p__9084;var map__9091__$1 = ((cljs.core.seq_QMARK_.call(null,map__9091))?cljs.core.apply.call(null,cljs.core.hash_map,map__9091):map__9091);var opts = map__9091__$1;var edit_key = cljs.core.get.call(null,map__9091__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var props = cljs.core.get.call(null,map__9091__$1,new cljs.core.Keyword(null,"props","props",453281727));var tag = cljs.core.get.call(null,map__9091__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));if(typeof sweep_stake.core.t9092 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9092 = (function (tag,props,edit_key,opts,map__9091,p__9084,owner,data,editable,meta9093){
this.tag = tag;
this.props = props;
this.edit_key = edit_key;
this.opts = opts;
this.map__9091 = map__9091;
this.p__9084 = p__9084;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta9093 = meta9093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9092.cljs$lang$type = true;
sweep_stake.core.t9092.cljs$lang$ctorStr = "sweep-stake.core/t9092";
sweep_stake.core.t9092.cljs$lang$ctorPrWriter = ((function (map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9092");
});})(map__9091,map__9091__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t9092.prototype.om$core$IRenderState$ = true;
sweep_stake.core.t9092.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (_,p__9095){var self__ = this;
var map__9096 = p__9095;var map__9096__$1 = ((cljs.core.seq_QMARK_.call(null,map__9096))?cljs.core.apply.call(null,cljs.core.hash_map,map__9096):map__9096);var editing = cljs.core.get.call(null,map__9096__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return self__.tag.call(null,self__.props,React.DOM.span({"onClick": ((function (text,___$1,map__9096,map__9096__$1,editing,map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(text,___$1,map__9096,map__9096__$1,editing,map__9091,map__9091__$1,opts,edit_key,props,tag))
, "style": sweep_stake.core.display.call(null,cljs.core.not.call(null,editing))},text),om.dom.input.call(null,{"onBlur": ((function (text,___$1,map__9096,map__9096__$1,editing,map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601))))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else
{return null;
}
});})(text,___$1,map__9096,map__9096__$1,editing,map__9091,map__9091__$1,opts,edit_key,props,tag))
, "onKeyPress": ((function (text,___$1,map__9096,map__9096__$1,editing,map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (p1__9083_SHARP_){if((p1__9083_SHARP_.keyCode === (13)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else
{return null;
}
});})(text,___$1,map__9096,map__9096__$1,editing,map__9091,map__9091__$1,opts,edit_key,props,tag))
, "onChange": ((function (text,___$1,map__9096,map__9096__$1,editing,map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (p1__9082_SHARP_){return sweep_stake.core.handle_change.call(null,p1__9082_SHARP_,self__.data,self__.edit_key,self__.owner);
});})(text,___$1,map__9096,map__9096__$1,editing,map__9091,map__9091__$1,opts,edit_key,props,tag))
, "value": text, "style": sweep_stake.core.display.call(null,editing)}));
});})(map__9091,map__9091__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t9092.prototype.om$core$IInitState$ = true;
sweep_stake.core.t9092.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});})(map__9091,map__9091__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t9092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (_9094){var self__ = this;
var _9094__$1 = this;return self__.meta9093;
});})(map__9091,map__9091__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t9092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function (_9094,meta9093__$1){var self__ = this;
var _9094__$1 = this;return (new sweep_stake.core.t9092(self__.tag,self__.props,self__.edit_key,self__.opts,self__.map__9091,self__.p__9084,self__.owner,self__.data,self__.editable,meta9093__$1));
});})(map__9091,map__9091__$1,opts,edit_key,props,tag))
;
sweep_stake.core.__GT_t9092 = ((function (map__9091,map__9091__$1,opts,edit_key,props,tag){
return (function __GT_t9092(tag__$1,props__$1,edit_key__$1,opts__$1,map__9091__$2,p__9084__$1,owner__$1,data__$1,editable__$1,meta9093){return (new sweep_stake.core.t9092(tag__$1,props__$1,edit_key__$1,opts__$1,map__9091__$2,p__9084__$1,owner__$1,data__$1,editable__$1,meta9093));
});})(map__9091,map__9091__$1,opts,edit_key,props,tag))
;
}
return (new sweep_stake.core.t9092(tag,props,edit_key,opts,map__9091__$1,p__9084,owner,data,editable,null));
});
sweep_stake.core.player_header = (function player_header(player,owner){if(typeof sweep_stake.core.t9100 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9100 = (function (owner,player,player_header,meta9101){
this.owner = owner;
this.player = player;
this.player_header = player_header;
this.meta9101 = meta9101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9100.cljs$lang$type = true;
sweep_stake.core.t9100.cljs$lang$ctorStr = "sweep-stake.core/t9100";
sweep_stake.core.t9100.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9100");
});
sweep_stake.core.t9100.prototype.om$core$IRender$ = true;
sweep_stake.core.t9100.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return om.core.build.call(null,sweep_stake.core.editable,self__.player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.th,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null));
});
sweep_stake.core.t9100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9102){var self__ = this;
var _9102__$1 = this;return self__.meta9101;
});
sweep_stake.core.t9100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9102,meta9101__$1){var self__ = this;
var _9102__$1 = this;return (new sweep_stake.core.t9100(self__.owner,self__.player,self__.player_header,meta9101__$1));
});
sweep_stake.core.__GT_t9100 = (function __GT_t9100(owner__$1,player__$1,player_header__$1,meta9101){return (new sweep_stake.core.t9100(owner__$1,player__$1,player_header__$1,meta9101));
});
}
return (new sweep_stake.core.t9100(owner,player,player_header,null));
});
sweep_stake.core.heading_row = (function heading_row(players,owner){if(typeof sweep_stake.core.t9106 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9106 = (function (owner,players,heading_row,meta9107){
this.owner = owner;
this.players = players;
this.heading_row = heading_row;
this.meta9107 = meta9107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9106.cljs$lang$type = true;
sweep_stake.core.t9106.cljs$lang$ctorStr = "sweep-stake.core/t9106";
sweep_stake.core.t9106.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9106");
});
sweep_stake.core.t9106.prototype.om$core$IRender$ = true;
sweep_stake.core.t9106.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.th(null,"Bet"),om.core.build_all.call(null,sweep_stake.core.player_header,self__.players),React.DOM.th(null,"Result")], null)));
});
sweep_stake.core.t9106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9108){var self__ = this;
var _9108__$1 = this;return self__.meta9107;
});
sweep_stake.core.t9106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9108,meta9107__$1){var self__ = this;
var _9108__$1 = this;return (new sweep_stake.core.t9106(self__.owner,self__.players,self__.heading_row,meta9107__$1));
});
sweep_stake.core.__GT_t9106 = (function __GT_t9106(owner__$1,players__$1,heading_row__$1,meta9107){return (new sweep_stake.core.t9106(owner__$1,players__$1,heading_row__$1,meta9107));
});
}
return (new sweep_stake.core.t9106(owner,players,heading_row,null));
});
sweep_stake.core.predication = (function predication(player,bet_id){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9109_SHARP_){return cljs.core._EQ_.call(null,bet_id,new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(p1__9109_SHARP_));
}),new cljs.core.Keyword(null,"predications","predications",1323956396).cljs$core$IFn$_invoke$arity$1(player)));
});
sweep_stake.core.predication_cell = (function predication_cell(p__9110,owner){var vec__9115 = p__9110;var player = cljs.core.nth.call(null,vec__9115,(0),null);var bet = cljs.core.nth.call(null,vec__9115,(1),null);var winners = cljs.core.nth.call(null,vec__9115,(2),null);if(typeof sweep_stake.core.t9116 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9116 = (function (winners,bet,player,vec__9115,owner,p__9110,predication_cell,meta9117){
this.winners = winners;
this.bet = bet;
this.player = player;
this.vec__9115 = vec__9115;
this.owner = owner;
this.p__9110 = p__9110;
this.predication_cell = predication_cell;
this.meta9117 = meta9117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9116.cljs$lang$type = true;
sweep_stake.core.t9116.cljs$lang$ctorStr = "sweep-stake.core/t9116";
sweep_stake.core.t9116.cljs$lang$ctorPrWriter = ((function (vec__9115,player,bet,winners){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9116");
});})(vec__9115,player,bet,winners))
;
sweep_stake.core.t9116.prototype.om$core$IRender$ = true;
sweep_stake.core.t9116.prototype.om$core$IRender$render$arity$1 = ((function (vec__9115,player,bet,winners){
return (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var css = (cljs.core.truth_(self__.winners.call(null,self__.player))?{"className": "winner"}:null);return om.core.build.call(null,sweep_stake.core.editable,sweep_stake.core.predication.call(null,self__.player,new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(self__.bet)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"predication","predication",-1894212241),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),css], null)], null));
});})(vec__9115,player,bet,winners))
;
sweep_stake.core.t9116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__9115,player,bet,winners){
return (function (_9118){var self__ = this;
var _9118__$1 = this;return self__.meta9117;
});})(vec__9115,player,bet,winners))
;
sweep_stake.core.t9116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__9115,player,bet,winners){
return (function (_9118,meta9117__$1){var self__ = this;
var _9118__$1 = this;return (new sweep_stake.core.t9116(self__.winners,self__.bet,self__.player,self__.vec__9115,self__.owner,self__.p__9110,self__.predication_cell,meta9117__$1));
});})(vec__9115,player,bet,winners))
;
sweep_stake.core.__GT_t9116 = ((function (vec__9115,player,bet,winners){
return (function __GT_t9116(winners__$1,bet__$1,player__$1,vec__9115__$1,owner__$1,p__9110__$1,predication_cell__$1,meta9117){return (new sweep_stake.core.t9116(winners__$1,bet__$1,player__$1,vec__9115__$1,owner__$1,p__9110__$1,predication_cell__$1,meta9117));
});})(vec__9115,player,bet,winners))
;
}
return (new sweep_stake.core.t9116(winners,bet,player,vec__9115,owner,p__9110,predication_cell,null));
});
sweep_stake.core.bet_winners = (function bet_winners(players,bet){return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__9119_SHARP_){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(bet),new cljs.core.Keyword(null,"predication","predication",-1894212241),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(bet)], null)], true),new cljs.core.Keyword(null,"predications","predications",1323956396).cljs$core$IFn$_invoke$arity$1(p1__9119_SHARP_));
}),players));
});
sweep_stake.core.bet_row = (function bet_row(p__9122,owner){var vec__9127 = p__9122;var app = cljs.core.nth.call(null,vec__9127,(0),null);var bet = cljs.core.nth.call(null,vec__9127,(1),null);if(typeof sweep_stake.core.t9128 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9128 = (function (bet,app,vec__9127,owner,p__9122,bet_row,meta9129){
this.bet = bet;
this.app = app;
this.vec__9127 = vec__9127;
this.owner = owner;
this.p__9122 = p__9122;
this.bet_row = bet_row;
this.meta9129 = meta9129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9128.cljs$lang$type = true;
sweep_stake.core.t9128.cljs$lang$ctorStr = "sweep-stake.core/t9128";
sweep_stake.core.t9128.cljs$lang$ctorPrWriter = ((function (vec__9127,app,bet){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9128");
});})(vec__9127,app,bet))
;
sweep_stake.core.t9128.prototype.om$core$IRender$ = true;
sweep_stake.core.t9128.prototype.om$core$IRender$render$arity$1 = ((function (vec__9127,app,bet){
return (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var players = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app);var bet_winners = sweep_stake.core.bet_winners.call(null,players,self__.bet);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.editable,self__.bet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null)),om.core.build_all.call(null,((function (players,bet_winners,this__5121__auto____$1,vec__9127,app,bet){
return (function (p1__9120_SHARP_,p2__9121_SHARP_){return sweep_stake.core.predication_cell.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9120_SHARP_,self__.bet,bet_winners], null),p2__9121_SHARP_);
});})(players,bet_winners,this__5121__auto____$1,vec__9127,app,bet))
,players),om.core.build.call(null,sweep_stake.core.editable,self__.bet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null))], null)));
});})(vec__9127,app,bet))
;
sweep_stake.core.t9128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__9127,app,bet){
return (function (_9130){var self__ = this;
var _9130__$1 = this;return self__.meta9129;
});})(vec__9127,app,bet))
;
sweep_stake.core.t9128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__9127,app,bet){
return (function (_9130,meta9129__$1){var self__ = this;
var _9130__$1 = this;return (new sweep_stake.core.t9128(self__.bet,self__.app,self__.vec__9127,self__.owner,self__.p__9122,self__.bet_row,meta9129__$1));
});})(vec__9127,app,bet))
;
sweep_stake.core.__GT_t9128 = ((function (vec__9127,app,bet){
return (function __GT_t9128(bet__$1,app__$1,vec__9127__$1,owner__$1,p__9122__$1,bet_row__$1,meta9129){return (new sweep_stake.core.t9128(bet__$1,app__$1,vec__9127__$1,owner__$1,p__9122__$1,bet_row__$1,meta9129));
});})(vec__9127,app,bet))
;
}
return (new sweep_stake.core.t9128(bet,app,vec__9127,owner,p__9122,bet_row,null));
});
sweep_stake.core.player_wins = (function player_wins(player,bets){return cljs.core.count.call(null,cljs.core.mapcat.call(null,(function (p1__9131_SHARP_){return sweep_stake.core.bet_winners.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [player], null),p1__9131_SHARP_);
}),bets));
});
sweep_stake.core.totals_row = (function totals_row(app,owner){if(typeof sweep_stake.core.t9136 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9136 = (function (owner,app,totals_row,meta9137){
this.owner = owner;
this.app = app;
this.totals_row = totals_row;
this.meta9137 = meta9137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9136.cljs$lang$type = true;
sweep_stake.core.t9136.cljs$lang$ctorStr = "sweep-stake.core/t9136";
sweep_stake.core.t9136.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9136");
});
sweep_stake.core.t9136.prototype.om$core$IRender$ = true;
sweep_stake.core.t9136.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var bets = new cljs.core.Keyword(null,"bets","bets",-1584076982).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.td(null,""),cljs.core.mapv.call(null,((function (bets,this__5121__auto____$1){
return (function (p1__9132_SHARP_){return React.DOM.td(null,sweep_stake.core.player_wins.call(null,p1__9132_SHARP_,bets));
});})(bets,this__5121__auto____$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.td(null,"")], null)));
});
sweep_stake.core.t9136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9138){var self__ = this;
var _9138__$1 = this;return self__.meta9137;
});
sweep_stake.core.t9136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9138,meta9137__$1){var self__ = this;
var _9138__$1 = this;return (new sweep_stake.core.t9136(self__.owner,self__.app,self__.totals_row,meta9137__$1));
});
sweep_stake.core.__GT_t9136 = (function __GT_t9136(owner__$1,app__$1,totals_row__$1,meta9137){return (new sweep_stake.core.t9136(owner__$1,app__$1,totals_row__$1,meta9137));
});
}
return (new sweep_stake.core.t9136(owner,app,totals_row,null));
});
sweep_stake.core.sweep_stake = (function sweep_stake__$1(app,owner){if(typeof sweep_stake.core.t9144 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9144 = (function (owner,app,sweep_stake,meta9145){
this.owner = owner;
this.app = app;
this.sweep_stake = sweep_stake;
this.meta9145 = meta9145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9144.cljs$lang$type = true;
sweep_stake.core.t9144.cljs$lang$ctorStr = "sweep-stake.core/t9144";
sweep_stake.core.t9144.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9144");
});
sweep_stake.core.t9144.prototype.om$core$IRender$ = true;
sweep_stake.core.t9144.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return React.DOM.table(null,cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.heading_row,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build_all.call(null,((function (this__5121__auto____$1){
return (function (p1__9139_SHARP_,p2__9140_SHARP_){return sweep_stake.core.bet_row.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.app,p1__9139_SHARP_], null),p2__9140_SHARP_);
});})(this__5121__auto____$1))
,new cljs.core.Keyword(null,"bets","bets",-1584076982).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build.call(null,sweep_stake.core.totals_row,self__.app)], null))));
});
sweep_stake.core.t9144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9146){var self__ = this;
var _9146__$1 = this;return self__.meta9145;
});
sweep_stake.core.t9144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9146,meta9145__$1){var self__ = this;
var _9146__$1 = this;return (new sweep_stake.core.t9144(self__.owner,self__.app,self__.sweep_stake,meta9145__$1));
});
sweep_stake.core.__GT_t9144 = (function __GT_t9144(owner__$1,app__$1,sweep_stake__$2,meta9145){return (new sweep_stake.core.t9144(owner__$1,app__$1,sweep_stake__$2,meta9145));
});
}
return (new sweep_stake.core.t9144(owner,app,sweep_stake__$1,null));
});
sweep_stake.core.sub_view = (function sub_view(item,owner){if(typeof sweep_stake.core.t9150 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9150 = (function (owner,item,sub_view,meta9151){
this.owner = owner;
this.item = item;
this.sub_view = sub_view;
this.meta9151 = meta9151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9150.cljs$lang$type = true;
sweep_stake.core.t9150.cljs$lang$ctorStr = "sweep-stake.core/t9150";
sweep_stake.core.t9150.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9150");
});
sweep_stake.core.t9150.prototype.om$core$IRender$ = true;
sweep_stake.core.t9150.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return React.DOM.div(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.item));
});
sweep_stake.core.t9150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9152){var self__ = this;
var _9152__$1 = this;return self__.meta9151;
});
sweep_stake.core.t9150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9152,meta9151__$1){var self__ = this;
var _9152__$1 = this;return (new sweep_stake.core.t9150(self__.owner,self__.item,self__.sub_view,meta9151__$1));
});
sweep_stake.core.__GT_t9150 = (function __GT_t9150(owner__$1,item__$1,sub_view__$1,meta9151){return (new sweep_stake.core.t9150(owner__$1,item__$1,sub_view__$1,meta9151));
});
}
return (new sweep_stake.core.t9150(owner,item,sub_view,null));
});
sweep_stake.core.something_else = (function something_else(original,owner,opts){if(typeof sweep_stake.core.t9156 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t9156 = (function (opts,owner,original,something_else,meta9157){
this.opts = opts;
this.owner = owner;
this.original = original;
this.something_else = something_else;
this.meta9157 = meta9157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t9156.cljs$lang$type = true;
sweep_stake.core.t9156.cljs$lang$ctorStr = "sweep-stake.core/t9156";
sweep_stake.core.t9156.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t9156");
});
sweep_stake.core.t9156.prototype.om$core$IRender$ = true;
sweep_stake.core.t9156.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return React.DOM.div({"style": {"padding": "5px", "border": "1px solid #ccc"}},React.DOM.div(null,React.DOM.span(null,"Path:"),React.DOM.pre({"style": {"display": "inline-block"}},cljs.core.pr_str.call(null,om.core.path.call(null,cljs.core.second.call(null,self__.original))))),cljs.core.apply.call(null,om.core.build_STAR_,self__.original));
});
sweep_stake.core.t9156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9158){var self__ = this;
var _9158__$1 = this;return self__.meta9157;
});
sweep_stake.core.t9156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9158,meta9157__$1){var self__ = this;
var _9158__$1 = this;return (new sweep_stake.core.t9156(self__.opts,self__.owner,self__.original,self__.something_else,meta9157__$1));
});
sweep_stake.core.__GT_t9156 = (function __GT_t9156(opts__$1,owner__$1,original__$1,something_else__$1,meta9157){return (new sweep_stake.core.t9156(opts__$1,owner__$1,original__$1,something_else__$1,meta9157));
});
}
return (new sweep_stake.core.t9156(opts,owner,original,something_else,null));
});
om.core.root.call(null,sweep_stake.core.sweep_stake,sweep_stake.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (f,cursor,m){if(cljs.core._EQ_.call(null,f,sweep_stake.core.sub_view))
{return om.core.build_STAR_.call(null,sweep_stake.core.something_else,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cursor,m], null));
} else
{return new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268);
}
})], null));
