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
cljs.core.add_watch.call(null,sweep_stake.core.app_state,new cljs.core.Keyword(null,"storage","storage",1867247511),(function (key,app,old_state,new_state){return localStorage.setItem(key,new_state);
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
sweep_stake.core.editable = (function editable(data,owner,p__10001){var map__10008 = p__10001;var map__10008__$1 = ((cljs.core.seq_QMARK_.call(null,map__10008))?cljs.core.apply.call(null,cljs.core.hash_map,map__10008):map__10008);var opts = map__10008__$1;var edit_key = cljs.core.get.call(null,map__10008__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var props = cljs.core.get.call(null,map__10008__$1,new cljs.core.Keyword(null,"props","props",453281727));var tag = cljs.core.get.call(null,map__10008__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));if(typeof sweep_stake.core.t10009 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10009 = (function (tag,props,edit_key,opts,map__10008,p__10001,owner,data,editable,meta10010){
this.tag = tag;
this.props = props;
this.edit_key = edit_key;
this.opts = opts;
this.map__10008 = map__10008;
this.p__10001 = p__10001;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta10010 = meta10010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10009.cljs$lang$type = true;
sweep_stake.core.t10009.cljs$lang$ctorStr = "sweep-stake.core/t10009";
sweep_stake.core.t10009.cljs$lang$ctorPrWriter = ((function (map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10009");
});})(map__10008,map__10008__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t10009.prototype.om$core$IRenderState$ = true;
sweep_stake.core.t10009.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (_,p__10012){var self__ = this;
var map__10013 = p__10012;var map__10013__$1 = ((cljs.core.seq_QMARK_.call(null,map__10013))?cljs.core.apply.call(null,cljs.core.hash_map,map__10013):map__10013);var editing = cljs.core.get.call(null,map__10013__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return self__.tag.call(null,self__.props,React.DOM.span({"onClick": ((function (text,___$1,map__10013,map__10013__$1,editing,map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(text,___$1,map__10013,map__10013__$1,editing,map__10008,map__10008__$1,opts,edit_key,props,tag))
, "style": sweep_stake.core.display.call(null,cljs.core.not.call(null,editing))},text),om.dom.input.call(null,{"onBlur": ((function (text,___$1,map__10013,map__10013__$1,editing,map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601))))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else
{return null;
}
});})(text,___$1,map__10013,map__10013__$1,editing,map__10008,map__10008__$1,opts,edit_key,props,tag))
, "onKeyPress": ((function (text,___$1,map__10013,map__10013__$1,editing,map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (p1__10000_SHARP_){if((p1__10000_SHARP_.keyCode === (13)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else
{return null;
}
});})(text,___$1,map__10013,map__10013__$1,editing,map__10008,map__10008__$1,opts,edit_key,props,tag))
, "onChange": ((function (text,___$1,map__10013,map__10013__$1,editing,map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (p1__9999_SHARP_){return sweep_stake.core.handle_change.call(null,p1__9999_SHARP_,self__.data,self__.edit_key,self__.owner);
});})(text,___$1,map__10013,map__10013__$1,editing,map__10008,map__10008__$1,opts,edit_key,props,tag))
, "value": text, "style": sweep_stake.core.display.call(null,editing)}));
});})(map__10008,map__10008__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t10009.prototype.om$core$IInitState$ = true;
sweep_stake.core.t10009.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});})(map__10008,map__10008__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t10009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (_10011){var self__ = this;
var _10011__$1 = this;return self__.meta10010;
});})(map__10008,map__10008__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t10009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function (_10011,meta10010__$1){var self__ = this;
var _10011__$1 = this;return (new sweep_stake.core.t10009(self__.tag,self__.props,self__.edit_key,self__.opts,self__.map__10008,self__.p__10001,self__.owner,self__.data,self__.editable,meta10010__$1));
});})(map__10008,map__10008__$1,opts,edit_key,props,tag))
;
sweep_stake.core.__GT_t10009 = ((function (map__10008,map__10008__$1,opts,edit_key,props,tag){
return (function __GT_t10009(tag__$1,props__$1,edit_key__$1,opts__$1,map__10008__$2,p__10001__$1,owner__$1,data__$1,editable__$1,meta10010){return (new sweep_stake.core.t10009(tag__$1,props__$1,edit_key__$1,opts__$1,map__10008__$2,p__10001__$1,owner__$1,data__$1,editable__$1,meta10010));
});})(map__10008,map__10008__$1,opts,edit_key,props,tag))
;
}
return (new sweep_stake.core.t10009(tag,props,edit_key,opts,map__10008__$1,p__10001,owner,data,editable,null));
});
sweep_stake.core.player_header = (function player_header(player,owner){if(typeof sweep_stake.core.t10017 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10017 = (function (owner,player,player_header,meta10018){
this.owner = owner;
this.player = player;
this.player_header = player_header;
this.meta10018 = meta10018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10017.cljs$lang$type = true;
sweep_stake.core.t10017.cljs$lang$ctorStr = "sweep-stake.core/t10017";
sweep_stake.core.t10017.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10017");
});
sweep_stake.core.t10017.prototype.om$core$IRender$ = true;
sweep_stake.core.t10017.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return om.core.build.call(null,sweep_stake.core.editable,self__.player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.th,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null));
});
sweep_stake.core.t10017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10019){var self__ = this;
var _10019__$1 = this;return self__.meta10018;
});
sweep_stake.core.t10017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10019,meta10018__$1){var self__ = this;
var _10019__$1 = this;return (new sweep_stake.core.t10017(self__.owner,self__.player,self__.player_header,meta10018__$1));
});
sweep_stake.core.__GT_t10017 = (function __GT_t10017(owner__$1,player__$1,player_header__$1,meta10018){return (new sweep_stake.core.t10017(owner__$1,player__$1,player_header__$1,meta10018));
});
}
return (new sweep_stake.core.t10017(owner,player,player_header,null));
});
sweep_stake.core.heading_row = (function heading_row(players,owner){if(typeof sweep_stake.core.t10023 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10023 = (function (owner,players,heading_row,meta10024){
this.owner = owner;
this.players = players;
this.heading_row = heading_row;
this.meta10024 = meta10024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10023.cljs$lang$type = true;
sweep_stake.core.t10023.cljs$lang$ctorStr = "sweep-stake.core/t10023";
sweep_stake.core.t10023.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10023");
});
sweep_stake.core.t10023.prototype.om$core$IRender$ = true;
sweep_stake.core.t10023.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.th(null,"Bet"),om.core.build_all.call(null,sweep_stake.core.player_header,self__.players),React.DOM.th(null,"Result")], null)));
});
sweep_stake.core.t10023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10025){var self__ = this;
var _10025__$1 = this;return self__.meta10024;
});
sweep_stake.core.t10023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10025,meta10024__$1){var self__ = this;
var _10025__$1 = this;return (new sweep_stake.core.t10023(self__.owner,self__.players,self__.heading_row,meta10024__$1));
});
sweep_stake.core.__GT_t10023 = (function __GT_t10023(owner__$1,players__$1,heading_row__$1,meta10024){return (new sweep_stake.core.t10023(owner__$1,players__$1,heading_row__$1,meta10024));
});
}
return (new sweep_stake.core.t10023(owner,players,heading_row,null));
});
sweep_stake.core.predication = (function predication(player,bet_id){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10026_SHARP_){return cljs.core._EQ_.call(null,bet_id,new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(p1__10026_SHARP_));
}),new cljs.core.Keyword(null,"predications","predications",1323956396).cljs$core$IFn$_invoke$arity$1(player)));
});
sweep_stake.core.predication_cell = (function predication_cell(p__10027,owner){var vec__10032 = p__10027;var player = cljs.core.nth.call(null,vec__10032,(0),null);var bet = cljs.core.nth.call(null,vec__10032,(1),null);var winners = cljs.core.nth.call(null,vec__10032,(2),null);if(typeof sweep_stake.core.t10033 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10033 = (function (winners,bet,player,vec__10032,owner,p__10027,predication_cell,meta10034){
this.winners = winners;
this.bet = bet;
this.player = player;
this.vec__10032 = vec__10032;
this.owner = owner;
this.p__10027 = p__10027;
this.predication_cell = predication_cell;
this.meta10034 = meta10034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10033.cljs$lang$type = true;
sweep_stake.core.t10033.cljs$lang$ctorStr = "sweep-stake.core/t10033";
sweep_stake.core.t10033.cljs$lang$ctorPrWriter = ((function (vec__10032,player,bet,winners){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10033");
});})(vec__10032,player,bet,winners))
;
sweep_stake.core.t10033.prototype.om$core$IRender$ = true;
sweep_stake.core.t10033.prototype.om$core$IRender$render$arity$1 = ((function (vec__10032,player,bet,winners){
return (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var css = (cljs.core.truth_(self__.winners.call(null,self__.player))?{"className": "winner"}:null);return om.core.build.call(null,sweep_stake.core.editable,sweep_stake.core.predication.call(null,self__.player,new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(self__.bet)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"predication","predication",-1894212241),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),css], null)], null));
});})(vec__10032,player,bet,winners))
;
sweep_stake.core.t10033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__10032,player,bet,winners){
return (function (_10035){var self__ = this;
var _10035__$1 = this;return self__.meta10034;
});})(vec__10032,player,bet,winners))
;
sweep_stake.core.t10033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__10032,player,bet,winners){
return (function (_10035,meta10034__$1){var self__ = this;
var _10035__$1 = this;return (new sweep_stake.core.t10033(self__.winners,self__.bet,self__.player,self__.vec__10032,self__.owner,self__.p__10027,self__.predication_cell,meta10034__$1));
});})(vec__10032,player,bet,winners))
;
sweep_stake.core.__GT_t10033 = ((function (vec__10032,player,bet,winners){
return (function __GT_t10033(winners__$1,bet__$1,player__$1,vec__10032__$1,owner__$1,p__10027__$1,predication_cell__$1,meta10034){return (new sweep_stake.core.t10033(winners__$1,bet__$1,player__$1,vec__10032__$1,owner__$1,p__10027__$1,predication_cell__$1,meta10034));
});})(vec__10032,player,bet,winners))
;
}
return (new sweep_stake.core.t10033(winners,bet,player,vec__10032,owner,p__10027,predication_cell,null));
});
sweep_stake.core.bet_winners = (function bet_winners(players,bet){return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__10036_SHARP_){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(bet),new cljs.core.Keyword(null,"predication","predication",-1894212241),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(bet)], null)], true),new cljs.core.Keyword(null,"predications","predications",1323956396).cljs$core$IFn$_invoke$arity$1(p1__10036_SHARP_));
}),players));
});
sweep_stake.core.bet_row = (function bet_row(p__10039,owner){var vec__10044 = p__10039;var app = cljs.core.nth.call(null,vec__10044,(0),null);var bet = cljs.core.nth.call(null,vec__10044,(1),null);if(typeof sweep_stake.core.t10045 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10045 = (function (bet,app,vec__10044,owner,p__10039,bet_row,meta10046){
this.bet = bet;
this.app = app;
this.vec__10044 = vec__10044;
this.owner = owner;
this.p__10039 = p__10039;
this.bet_row = bet_row;
this.meta10046 = meta10046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10045.cljs$lang$type = true;
sweep_stake.core.t10045.cljs$lang$ctorStr = "sweep-stake.core/t10045";
sweep_stake.core.t10045.cljs$lang$ctorPrWriter = ((function (vec__10044,app,bet){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10045");
});})(vec__10044,app,bet))
;
sweep_stake.core.t10045.prototype.om$core$IRender$ = true;
sweep_stake.core.t10045.prototype.om$core$IRender$render$arity$1 = ((function (vec__10044,app,bet){
return (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var players = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app);var bet_winners = sweep_stake.core.bet_winners.call(null,players,self__.bet);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.editable,self__.bet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null)),om.core.build_all.call(null,((function (players,bet_winners,this__5121__auto____$1,vec__10044,app,bet){
return (function (p1__10037_SHARP_,p2__10038_SHARP_){return sweep_stake.core.predication_cell.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10037_SHARP_,self__.bet,bet_winners], null),p2__10038_SHARP_);
});})(players,bet_winners,this__5121__auto____$1,vec__10044,app,bet))
,players),om.core.build.call(null,sweep_stake.core.editable,self__.bet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null))], null)));
});})(vec__10044,app,bet))
;
sweep_stake.core.t10045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__10044,app,bet){
return (function (_10047){var self__ = this;
var _10047__$1 = this;return self__.meta10046;
});})(vec__10044,app,bet))
;
sweep_stake.core.t10045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__10044,app,bet){
return (function (_10047,meta10046__$1){var self__ = this;
var _10047__$1 = this;return (new sweep_stake.core.t10045(self__.bet,self__.app,self__.vec__10044,self__.owner,self__.p__10039,self__.bet_row,meta10046__$1));
});})(vec__10044,app,bet))
;
sweep_stake.core.__GT_t10045 = ((function (vec__10044,app,bet){
return (function __GT_t10045(bet__$1,app__$1,vec__10044__$1,owner__$1,p__10039__$1,bet_row__$1,meta10046){return (new sweep_stake.core.t10045(bet__$1,app__$1,vec__10044__$1,owner__$1,p__10039__$1,bet_row__$1,meta10046));
});})(vec__10044,app,bet))
;
}
return (new sweep_stake.core.t10045(bet,app,vec__10044,owner,p__10039,bet_row,null));
});
sweep_stake.core.player_wins = (function player_wins(player,bets){return cljs.core.count.call(null,cljs.core.mapcat.call(null,(function (p1__10048_SHARP_){return sweep_stake.core.bet_winners.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [player], null),p1__10048_SHARP_);
}),bets));
});
sweep_stake.core.totals_row = (function totals_row(app,owner){if(typeof sweep_stake.core.t10053 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10053 = (function (owner,app,totals_row,meta10054){
this.owner = owner;
this.app = app;
this.totals_row = totals_row;
this.meta10054 = meta10054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10053.cljs$lang$type = true;
sweep_stake.core.t10053.cljs$lang$ctorStr = "sweep-stake.core/t10053";
sweep_stake.core.t10053.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10053");
});
sweep_stake.core.t10053.prototype.om$core$IRender$ = true;
sweep_stake.core.t10053.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var bets = new cljs.core.Keyword(null,"bets","bets",-1584076982).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.td(null,""),cljs.core.mapv.call(null,((function (bets,this__5121__auto____$1){
return (function (p1__10049_SHARP_){return React.DOM.td(null,sweep_stake.core.player_wins.call(null,p1__10049_SHARP_,bets));
});})(bets,this__5121__auto____$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.td(null,"")], null)));
});
sweep_stake.core.t10053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10055){var self__ = this;
var _10055__$1 = this;return self__.meta10054;
});
sweep_stake.core.t10053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10055,meta10054__$1){var self__ = this;
var _10055__$1 = this;return (new sweep_stake.core.t10053(self__.owner,self__.app,self__.totals_row,meta10054__$1));
});
sweep_stake.core.__GT_t10053 = (function __GT_t10053(owner__$1,app__$1,totals_row__$1,meta10054){return (new sweep_stake.core.t10053(owner__$1,app__$1,totals_row__$1,meta10054));
});
}
return (new sweep_stake.core.t10053(owner,app,totals_row,null));
});
sweep_stake.core.sweep_stake = (function sweep_stake__$1(app,owner){if(typeof sweep_stake.core.t10061 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10061 = (function (owner,app,sweep_stake,meta10062){
this.owner = owner;
this.app = app;
this.sweep_stake = sweep_stake;
this.meta10062 = meta10062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10061.cljs$lang$type = true;
sweep_stake.core.t10061.cljs$lang$ctorStr = "sweep-stake.core/t10061";
sweep_stake.core.t10061.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10061");
});
sweep_stake.core.t10061.prototype.om$core$IRender$ = true;
sweep_stake.core.t10061.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return React.DOM.table(null,cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.heading_row,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build_all.call(null,((function (this__5121__auto____$1){
return (function (p1__10056_SHARP_,p2__10057_SHARP_){return sweep_stake.core.bet_row.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.app,p1__10056_SHARP_], null),p2__10057_SHARP_);
});})(this__5121__auto____$1))
,new cljs.core.Keyword(null,"bets","bets",-1584076982).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build.call(null,sweep_stake.core.totals_row,self__.app)], null))));
});
sweep_stake.core.t10061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10063){var self__ = this;
var _10063__$1 = this;return self__.meta10062;
});
sweep_stake.core.t10061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10063,meta10062__$1){var self__ = this;
var _10063__$1 = this;return (new sweep_stake.core.t10061(self__.owner,self__.app,self__.sweep_stake,meta10062__$1));
});
sweep_stake.core.__GT_t10061 = (function __GT_t10061(owner__$1,app__$1,sweep_stake__$2,meta10062){return (new sweep_stake.core.t10061(owner__$1,app__$1,sweep_stake__$2,meta10062));
});
}
return (new sweep_stake.core.t10061(owner,app,sweep_stake__$1,null));
});
sweep_stake.core.sub_view = (function sub_view(item,owner){if(typeof sweep_stake.core.t10067 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10067 = (function (owner,item,sub_view,meta10068){
this.owner = owner;
this.item = item;
this.sub_view = sub_view;
this.meta10068 = meta10068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10067.cljs$lang$type = true;
sweep_stake.core.t10067.cljs$lang$ctorStr = "sweep-stake.core/t10067";
sweep_stake.core.t10067.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10067");
});
sweep_stake.core.t10067.prototype.om$core$IRender$ = true;
sweep_stake.core.t10067.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return React.DOM.div(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.item));
});
sweep_stake.core.t10067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10069){var self__ = this;
var _10069__$1 = this;return self__.meta10068;
});
sweep_stake.core.t10067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10069,meta10068__$1){var self__ = this;
var _10069__$1 = this;return (new sweep_stake.core.t10067(self__.owner,self__.item,self__.sub_view,meta10068__$1));
});
sweep_stake.core.__GT_t10067 = (function __GT_t10067(owner__$1,item__$1,sub_view__$1,meta10068){return (new sweep_stake.core.t10067(owner__$1,item__$1,sub_view__$1,meta10068));
});
}
return (new sweep_stake.core.t10067(owner,item,sub_view,null));
});
sweep_stake.core.something_else = (function something_else(original,owner,opts){if(typeof sweep_stake.core.t10073 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10073 = (function (opts,owner,original,something_else,meta10074){
this.opts = opts;
this.owner = owner;
this.original = original;
this.something_else = something_else;
this.meta10074 = meta10074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10073.cljs$lang$type = true;
sweep_stake.core.t10073.cljs$lang$ctorStr = "sweep-stake.core/t10073";
sweep_stake.core.t10073.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10073");
});
sweep_stake.core.t10073.prototype.om$core$IRender$ = true;
sweep_stake.core.t10073.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return React.DOM.div({"style": {"padding": "5px", "border": "1px solid #ccc"}},React.DOM.div(null,React.DOM.span(null,"Path:"),React.DOM.pre({"style": {"display": "inline-block"}},cljs.core.pr_str.call(null,om.core.path.call(null,cljs.core.second.call(null,self__.original))))),cljs.core.apply.call(null,om.core.build_STAR_,self__.original));
});
sweep_stake.core.t10073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10075){var self__ = this;
var _10075__$1 = this;return self__.meta10074;
});
sweep_stake.core.t10073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10075,meta10074__$1){var self__ = this;
var _10075__$1 = this;return (new sweep_stake.core.t10073(self__.opts,self__.owner,self__.original,self__.something_else,meta10074__$1));
});
sweep_stake.core.__GT_t10073 = (function __GT_t10073(opts__$1,owner__$1,original__$1,something_else__$1,meta10074){return (new sweep_stake.core.t10073(opts__$1,owner__$1,original__$1,something_else__$1,meta10074));
});
}
return (new sweep_stake.core.t10073(opts,owner,original,something_else,null));
});
om.core.root.call(null,sweep_stake.core.sweep_stake,sweep_stake.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (f,cursor,m){if(cljs.core._EQ_.call(null,f,sweep_stake.core.sub_view))
{return om.core.build_STAR_.call(null,sweep_stake.core.something_else,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cursor,m], null));
} else
{return new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268);
}
})], null));
