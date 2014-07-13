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
sweep_stake.core.editable = (function editable(data,owner,p__10232){var map__10239 = p__10232;var map__10239__$1 = ((cljs.core.seq_QMARK_.call(null,map__10239))?cljs.core.apply.call(null,cljs.core.hash_map,map__10239):map__10239);var opts = map__10239__$1;var edit_key = cljs.core.get.call(null,map__10239__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var props = cljs.core.get.call(null,map__10239__$1,new cljs.core.Keyword(null,"props","props",453281727));var tag = cljs.core.get.call(null,map__10239__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));if(typeof sweep_stake.core.t10240 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10240 = (function (tag,props,edit_key,opts,map__10239,p__10232,owner,data,editable,meta10241){
this.tag = tag;
this.props = props;
this.edit_key = edit_key;
this.opts = opts;
this.map__10239 = map__10239;
this.p__10232 = p__10232;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta10241 = meta10241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10240.cljs$lang$type = true;
sweep_stake.core.t10240.cljs$lang$ctorStr = "sweep-stake.core/t10240";
sweep_stake.core.t10240.cljs$lang$ctorPrWriter = ((function (map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10240");
});})(map__10239,map__10239__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t10240.prototype.om$core$IRenderState$ = true;
sweep_stake.core.t10240.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (_,p__10243){var self__ = this;
var map__10244 = p__10243;var map__10244__$1 = ((cljs.core.seq_QMARK_.call(null,map__10244))?cljs.core.apply.call(null,cljs.core.hash_map,map__10244):map__10244);var editing = cljs.core.get.call(null,map__10244__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return self__.tag.call(null,self__.props,React.DOM.span({"onClick": ((function (text,___$1,map__10244,map__10244__$1,editing,map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(text,___$1,map__10244,map__10244__$1,editing,map__10239,map__10239__$1,opts,edit_key,props,tag))
, "style": sweep_stake.core.display.call(null,cljs.core.not.call(null,editing))},text),om.dom.input.call(null,{"onBlur": ((function (text,___$1,map__10244,map__10244__$1,editing,map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601))))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else
{return null;
}
});})(text,___$1,map__10244,map__10244__$1,editing,map__10239,map__10239__$1,opts,edit_key,props,tag))
, "onKeyPress": ((function (text,___$1,map__10244,map__10244__$1,editing,map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (p1__10231_SHARP_){if((p1__10231_SHARP_.keyCode === (13)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else
{return null;
}
});})(text,___$1,map__10244,map__10244__$1,editing,map__10239,map__10239__$1,opts,edit_key,props,tag))
, "onChange": ((function (text,___$1,map__10244,map__10244__$1,editing,map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (p1__10230_SHARP_){return sweep_stake.core.handle_change.call(null,p1__10230_SHARP_,self__.data,self__.edit_key,self__.owner);
});})(text,___$1,map__10244,map__10244__$1,editing,map__10239,map__10239__$1,opts,edit_key,props,tag))
, "value": text, "style": sweep_stake.core.display.call(null,editing)}));
});})(map__10239,map__10239__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t10240.prototype.om$core$IInitState$ = true;
sweep_stake.core.t10240.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});})(map__10239,map__10239__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t10240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (_10242){var self__ = this;
var _10242__$1 = this;return self__.meta10241;
});})(map__10239,map__10239__$1,opts,edit_key,props,tag))
;
sweep_stake.core.t10240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function (_10242,meta10241__$1){var self__ = this;
var _10242__$1 = this;return (new sweep_stake.core.t10240(self__.tag,self__.props,self__.edit_key,self__.opts,self__.map__10239,self__.p__10232,self__.owner,self__.data,self__.editable,meta10241__$1));
});})(map__10239,map__10239__$1,opts,edit_key,props,tag))
;
sweep_stake.core.__GT_t10240 = ((function (map__10239,map__10239__$1,opts,edit_key,props,tag){
return (function __GT_t10240(tag__$1,props__$1,edit_key__$1,opts__$1,map__10239__$2,p__10232__$1,owner__$1,data__$1,editable__$1,meta10241){return (new sweep_stake.core.t10240(tag__$1,props__$1,edit_key__$1,opts__$1,map__10239__$2,p__10232__$1,owner__$1,data__$1,editable__$1,meta10241));
});})(map__10239,map__10239__$1,opts,edit_key,props,tag))
;
}
return (new sweep_stake.core.t10240(tag,props,edit_key,opts,map__10239__$1,p__10232,owner,data,editable,null));
});
sweep_stake.core.player_header = (function player_header(player,owner){if(typeof sweep_stake.core.t10248 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10248 = (function (owner,player,player_header,meta10249){
this.owner = owner;
this.player = player;
this.player_header = player_header;
this.meta10249 = meta10249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10248.cljs$lang$type = true;
sweep_stake.core.t10248.cljs$lang$ctorStr = "sweep-stake.core/t10248";
sweep_stake.core.t10248.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10248");
});
sweep_stake.core.t10248.prototype.om$core$IRender$ = true;
sweep_stake.core.t10248.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return om.core.build.call(null,sweep_stake.core.editable,self__.player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.th,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null));
});
sweep_stake.core.t10248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10250){var self__ = this;
var _10250__$1 = this;return self__.meta10249;
});
sweep_stake.core.t10248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10250,meta10249__$1){var self__ = this;
var _10250__$1 = this;return (new sweep_stake.core.t10248(self__.owner,self__.player,self__.player_header,meta10249__$1));
});
sweep_stake.core.__GT_t10248 = (function __GT_t10248(owner__$1,player__$1,player_header__$1,meta10249){return (new sweep_stake.core.t10248(owner__$1,player__$1,player_header__$1,meta10249));
});
}
return (new sweep_stake.core.t10248(owner,player,player_header,null));
});
sweep_stake.core.heading_row = (function heading_row(players,owner){if(typeof sweep_stake.core.t10254 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10254 = (function (owner,players,heading_row,meta10255){
this.owner = owner;
this.players = players;
this.heading_row = heading_row;
this.meta10255 = meta10255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10254.cljs$lang$type = true;
sweep_stake.core.t10254.cljs$lang$ctorStr = "sweep-stake.core/t10254";
sweep_stake.core.t10254.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10254");
});
sweep_stake.core.t10254.prototype.om$core$IRender$ = true;
sweep_stake.core.t10254.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.th(null,"Bet"),om.core.build_all.call(null,sweep_stake.core.player_header,self__.players),React.DOM.th(null,"Result")], null)));
});
sweep_stake.core.t10254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10256){var self__ = this;
var _10256__$1 = this;return self__.meta10255;
});
sweep_stake.core.t10254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10256,meta10255__$1){var self__ = this;
var _10256__$1 = this;return (new sweep_stake.core.t10254(self__.owner,self__.players,self__.heading_row,meta10255__$1));
});
sweep_stake.core.__GT_t10254 = (function __GT_t10254(owner__$1,players__$1,heading_row__$1,meta10255){return (new sweep_stake.core.t10254(owner__$1,players__$1,heading_row__$1,meta10255));
});
}
return (new sweep_stake.core.t10254(owner,players,heading_row,null));
});
sweep_stake.core.predication = (function predication(player,bet_id){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10257_SHARP_){return cljs.core._EQ_.call(null,bet_id,new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(p1__10257_SHARP_));
}),new cljs.core.Keyword(null,"predications","predications",1323956396).cljs$core$IFn$_invoke$arity$1(player)));
});
sweep_stake.core.predication_cell = (function predication_cell(p__10258,owner){var vec__10263 = p__10258;var player = cljs.core.nth.call(null,vec__10263,(0),null);var bet = cljs.core.nth.call(null,vec__10263,(1),null);var winners = cljs.core.nth.call(null,vec__10263,(2),null);if(typeof sweep_stake.core.t10264 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10264 = (function (winners,bet,player,vec__10263,owner,p__10258,predication_cell,meta10265){
this.winners = winners;
this.bet = bet;
this.player = player;
this.vec__10263 = vec__10263;
this.owner = owner;
this.p__10258 = p__10258;
this.predication_cell = predication_cell;
this.meta10265 = meta10265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10264.cljs$lang$type = true;
sweep_stake.core.t10264.cljs$lang$ctorStr = "sweep-stake.core/t10264";
sweep_stake.core.t10264.cljs$lang$ctorPrWriter = ((function (vec__10263,player,bet,winners){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10264");
});})(vec__10263,player,bet,winners))
;
sweep_stake.core.t10264.prototype.om$core$IRender$ = true;
sweep_stake.core.t10264.prototype.om$core$IRender$render$arity$1 = ((function (vec__10263,player,bet,winners){
return (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var css = (cljs.core.truth_(self__.winners.call(null,self__.player))?{"className": "winner"}:null);return om.core.build.call(null,sweep_stake.core.editable,sweep_stake.core.predication.call(null,self__.player,new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(self__.bet)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"predication","predication",-1894212241),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),css], null)], null));
});})(vec__10263,player,bet,winners))
;
sweep_stake.core.t10264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__10263,player,bet,winners){
return (function (_10266){var self__ = this;
var _10266__$1 = this;return self__.meta10265;
});})(vec__10263,player,bet,winners))
;
sweep_stake.core.t10264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__10263,player,bet,winners){
return (function (_10266,meta10265__$1){var self__ = this;
var _10266__$1 = this;return (new sweep_stake.core.t10264(self__.winners,self__.bet,self__.player,self__.vec__10263,self__.owner,self__.p__10258,self__.predication_cell,meta10265__$1));
});})(vec__10263,player,bet,winners))
;
sweep_stake.core.__GT_t10264 = ((function (vec__10263,player,bet,winners){
return (function __GT_t10264(winners__$1,bet__$1,player__$1,vec__10263__$1,owner__$1,p__10258__$1,predication_cell__$1,meta10265){return (new sweep_stake.core.t10264(winners__$1,bet__$1,player__$1,vec__10263__$1,owner__$1,p__10258__$1,predication_cell__$1,meta10265));
});})(vec__10263,player,bet,winners))
;
}
return (new sweep_stake.core.t10264(winners,bet,player,vec__10263,owner,p__10258,predication_cell,null));
});
sweep_stake.core.bet_winners = (function bet_winners(players,bet){return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__10267_SHARP_){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",923999819),new cljs.core.Keyword(null,"bet-id","bet-id",923999819).cljs$core$IFn$_invoke$arity$1(bet),new cljs.core.Keyword(null,"predication","predication",-1894212241),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(bet)], null)], true),new cljs.core.Keyword(null,"predications","predications",1323956396).cljs$core$IFn$_invoke$arity$1(p1__10267_SHARP_));
}),players));
});
sweep_stake.core.bet_row = (function bet_row(p__10270,owner){var vec__10275 = p__10270;var app = cljs.core.nth.call(null,vec__10275,(0),null);var bet = cljs.core.nth.call(null,vec__10275,(1),null);if(typeof sweep_stake.core.t10276 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10276 = (function (bet,app,vec__10275,owner,p__10270,bet_row,meta10277){
this.bet = bet;
this.app = app;
this.vec__10275 = vec__10275;
this.owner = owner;
this.p__10270 = p__10270;
this.bet_row = bet_row;
this.meta10277 = meta10277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10276.cljs$lang$type = true;
sweep_stake.core.t10276.cljs$lang$ctorStr = "sweep-stake.core/t10276";
sweep_stake.core.t10276.cljs$lang$ctorPrWriter = ((function (vec__10275,app,bet){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10276");
});})(vec__10275,app,bet))
;
sweep_stake.core.t10276.prototype.om$core$IRender$ = true;
sweep_stake.core.t10276.prototype.om$core$IRender$render$arity$1 = ((function (vec__10275,app,bet){
return (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var players = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app);var bet_winners = sweep_stake.core.bet_winners.call(null,players,self__.bet);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.editable,self__.bet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null)),om.core.build_all.call(null,((function (players,bet_winners,this__5121__auto____$1,vec__10275,app,bet){
return (function (p1__10268_SHARP_,p2__10269_SHARP_){return sweep_stake.core.predication_cell.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10268_SHARP_,self__.bet,bet_winners], null),p2__10269_SHARP_);
});})(players,bet_winners,this__5121__auto____$1,vec__10275,app,bet))
,players),om.core.build.call(null,sweep_stake.core.editable,self__.bet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"tag","tag",-1290361223),om.dom.td,new cljs.core.Keyword(null,"props","props",453281727),null], null)], null))], null)));
});})(vec__10275,app,bet))
;
sweep_stake.core.t10276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__10275,app,bet){
return (function (_10278){var self__ = this;
var _10278__$1 = this;return self__.meta10277;
});})(vec__10275,app,bet))
;
sweep_stake.core.t10276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__10275,app,bet){
return (function (_10278,meta10277__$1){var self__ = this;
var _10278__$1 = this;return (new sweep_stake.core.t10276(self__.bet,self__.app,self__.vec__10275,self__.owner,self__.p__10270,self__.bet_row,meta10277__$1));
});})(vec__10275,app,bet))
;
sweep_stake.core.__GT_t10276 = ((function (vec__10275,app,bet){
return (function __GT_t10276(bet__$1,app__$1,vec__10275__$1,owner__$1,p__10270__$1,bet_row__$1,meta10277){return (new sweep_stake.core.t10276(bet__$1,app__$1,vec__10275__$1,owner__$1,p__10270__$1,bet_row__$1,meta10277));
});})(vec__10275,app,bet))
;
}
return (new sweep_stake.core.t10276(bet,app,vec__10275,owner,p__10270,bet_row,null));
});
sweep_stake.core.player_wins = (function player_wins(player,bets){return cljs.core.count.call(null,cljs.core.mapcat.call(null,(function (p1__10279_SHARP_){return sweep_stake.core.bet_winners.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [player], null),p1__10279_SHARP_);
}),bets));
});
sweep_stake.core.totals_row = (function totals_row(app,owner){if(typeof sweep_stake.core.t10284 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10284 = (function (owner,app,totals_row,meta10285){
this.owner = owner;
this.app = app;
this.totals_row = totals_row;
this.meta10285 = meta10285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10284.cljs$lang$type = true;
sweep_stake.core.t10284.cljs$lang$ctorStr = "sweep-stake.core/t10284";
sweep_stake.core.t10284.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10284");
});
sweep_stake.core.t10284.prototype.om$core$IRender$ = true;
sweep_stake.core.t10284.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;var bets = new cljs.core.Keyword(null,"bets","bets",-1584076982).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.td(null,""),cljs.core.mapv.call(null,((function (bets,this__5121__auto____$1){
return (function (p1__10280_SHARP_){return React.DOM.td(null,sweep_stake.core.player_wins.call(null,p1__10280_SHARP_,bets));
});})(bets,this__5121__auto____$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.td(null,"")], null)));
});
sweep_stake.core.t10284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10286){var self__ = this;
var _10286__$1 = this;return self__.meta10285;
});
sweep_stake.core.t10284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10286,meta10285__$1){var self__ = this;
var _10286__$1 = this;return (new sweep_stake.core.t10284(self__.owner,self__.app,self__.totals_row,meta10285__$1));
});
sweep_stake.core.__GT_t10284 = (function __GT_t10284(owner__$1,app__$1,totals_row__$1,meta10285){return (new sweep_stake.core.t10284(owner__$1,app__$1,totals_row__$1,meta10285));
});
}
return (new sweep_stake.core.t10284(owner,app,totals_row,null));
});
sweep_stake.core.sweep_stake = (function sweep_stake__$1(app,owner){if(typeof sweep_stake.core.t10292 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t10292 = (function (owner,app,sweep_stake,meta10293){
this.owner = owner;
this.app = app;
this.sweep_stake = sweep_stake;
this.meta10293 = meta10293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t10292.cljs$lang$type = true;
sweep_stake.core.t10292.cljs$lang$ctorStr = "sweep-stake.core/t10292";
sweep_stake.core.t10292.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sweep-stake.core/t10292");
});
sweep_stake.core.t10292.prototype.om$core$IRender$ = true;
sweep_stake.core.t10292.prototype.om$core$IRender$render$arity$1 = (function (this__5121__auto__){var self__ = this;
var this__5121__auto____$1 = this;return React.DOM.table(null,cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.heading_row,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build_all.call(null,((function (this__5121__auto____$1){
return (function (p1__10287_SHARP_,p2__10288_SHARP_){return sweep_stake.core.bet_row.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.app,p1__10287_SHARP_], null),p2__10288_SHARP_);
});})(this__5121__auto____$1))
,new cljs.core.Keyword(null,"bets","bets",-1584076982).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build.call(null,sweep_stake.core.totals_row,self__.app)], null))));
});
sweep_stake.core.t10292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10294){var self__ = this;
var _10294__$1 = this;return self__.meta10293;
});
sweep_stake.core.t10292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10294,meta10293__$1){var self__ = this;
var _10294__$1 = this;return (new sweep_stake.core.t10292(self__.owner,self__.app,self__.sweep_stake,meta10293__$1));
});
sweep_stake.core.__GT_t10292 = (function __GT_t10292(owner__$1,app__$1,sweep_stake__$2,meta10293){return (new sweep_stake.core.t10292(owner__$1,app__$1,sweep_stake__$2,meta10293));
});
}
return (new sweep_stake.core.t10292(owner,app,sweep_stake__$1,null));
});
om.core.root.call(null,sweep_stake.core.sweep_stake,sweep_stake.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
