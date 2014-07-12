// Compiled by ClojureScript 0.0-2156
goog.provide('sweep_stake.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
sweep_stake.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",520336676),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Brendan",new cljs.core.Keyword(null,"predications","predications",4029831755),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),1,new cljs.core.Keyword(null,"predication","predication",2635212876),"2-1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),2,new cljs.core.Keyword(null,"predication","predication",2635212876),1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),3,new cljs.core.Keyword(null,"predication","predication",2635212876),"Tom"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Paul",new cljs.core.Keyword(null,"predications","predications",4029831755),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),1,new cljs.core.Keyword(null,"predication","predication",2635212876),"1-1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),2,new cljs.core.Keyword(null,"predication","predication",2635212876),2], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),3,new cljs.core.Keyword(null,"predication","predication",2635212876),"Dick"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Lis",new cljs.core.Keyword(null,"predications","predications",4029831755),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),1,new cljs.core.Keyword(null,"predication","predication",2635212876),"1-2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),2,new cljs.core.Keyword(null,"predication","predication",2635212876),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),3,new cljs.core.Keyword(null,"predication","predication",2635212876),"Harry"], null)], null)], null)], null),new cljs.core.Keyword(null,"bets","bets",1016924532),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),1,new cljs.core.Keyword(null,"description","description",3584325486),"Full time score",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"score","score",1123168772),new cljs.core.Keyword(null,"result","result",4374444943),"1-2"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),2,new cljs.core.Keyword(null,"description","description",3584325486),"Number of yellows",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451),new cljs.core.Keyword(null,"result","result",4374444943),0], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),3,new cljs.core.Keyword(null,"description","description",3584325486),"First goal scorer",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"result","result",4374444943),"Tom"], null)], null)], null));
sweep_stake.core.player_header = (function player_header(player,owner){if(typeof sweep_stake.core.t5466 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t5466 = (function (owner,player,player_header,meta5467){
this.owner = owner;
this.player = player;
this.player_header = player_header;
this.meta5467 = meta5467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t5466.cljs$lang$type = true;
sweep_stake.core.t5466.cljs$lang$ctorStr = "sweep-stake.core/t5466";
sweep_stake.core.t5466.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sweep-stake.core/t5466");
});
sweep_stake.core.t5466.prototype.om$core$IRender$ = true;
sweep_stake.core.t5466.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.th(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.player));
});
sweep_stake.core.t5466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5468){var self__ = this;
var _5468__$1 = this;return self__.meta5467;
});
sweep_stake.core.t5466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5468,meta5467__$1){var self__ = this;
var _5468__$1 = this;return (new sweep_stake.core.t5466(self__.owner,self__.player,self__.player_header,meta5467__$1));
});
sweep_stake.core.__GT_t5466 = (function __GT_t5466(owner__$1,player__$1,player_header__$1,meta5467){return (new sweep_stake.core.t5466(owner__$1,player__$1,player_header__$1,meta5467));
});
}
return (new sweep_stake.core.t5466(owner,player,player_header,null));
});
sweep_stake.core.heading_row = (function heading_row(players,owner){if(typeof sweep_stake.core.t5472 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t5472 = (function (owner,players,heading_row,meta5473){
this.owner = owner;
this.players = players;
this.heading_row = heading_row;
this.meta5473 = meta5473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t5472.cljs$lang$type = true;
sweep_stake.core.t5472.cljs$lang$ctorStr = "sweep-stake.core/t5472";
sweep_stake.core.t5472.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sweep-stake.core/t5472");
});
sweep_stake.core.t5472.prototype.om$core$IRender$ = true;
sweep_stake.core.t5472.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.th(null,"Bet"),om.core.build_all.call(null,sweep_stake.core.player_header,self__.players),React.DOM.th(null,"Result")], null)));
});
sweep_stake.core.t5472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5474){var self__ = this;
var _5474__$1 = this;return self__.meta5473;
});
sweep_stake.core.t5472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5474,meta5473__$1){var self__ = this;
var _5474__$1 = this;return (new sweep_stake.core.t5472(self__.owner,self__.players,self__.heading_row,meta5473__$1));
});
sweep_stake.core.__GT_t5472 = (function __GT_t5472(owner__$1,players__$1,heading_row__$1,meta5473){return (new sweep_stake.core.t5472(owner__$1,players__$1,heading_row__$1,meta5473));
});
}
return (new sweep_stake.core.t5472(owner,players,heading_row,null));
});
sweep_stake.core.predication = (function predication(player,bet_id){return new cljs.core.Keyword(null,"predication","predication",2635212876).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__5475_SHARP_){return cljs.core._EQ_.call(null,bet_id,new cljs.core.Keyword(null,"bet-id","bet-id",3916339017).cljs$core$IFn$_invoke$arity$1(p1__5475_SHARP_));
}),new cljs.core.Keyword(null,"predications","predications",4029831755).cljs$core$IFn$_invoke$arity$1(player))));
});
sweep_stake.core.predication_cell = (function predication_cell(player,bet,winners){if(typeof sweep_stake.core.t5479 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t5479 = (function (winners,bet,player,predication_cell,meta5480){
this.winners = winners;
this.bet = bet;
this.player = player;
this.predication_cell = predication_cell;
this.meta5480 = meta5480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t5479.cljs$lang$type = true;
sweep_stake.core.t5479.cljs$lang$ctorStr = "sweep-stake.core/t5479";
sweep_stake.core.t5479.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sweep-stake.core/t5479");
});
sweep_stake.core.t5479.prototype.om$core$IRender$ = true;
sweep_stake.core.t5479.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var css = (cljs.core.truth_(self__.winners.call(null,self__.player))?{"className": "winner"}:null);return React.DOM.td(css,sweep_stake.core.predication.call(null,self__.player,new cljs.core.Keyword(null,"bet-id","bet-id",3916339017).cljs$core$IFn$_invoke$arity$1(self__.bet)));
});
sweep_stake.core.t5479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5481){var self__ = this;
var _5481__$1 = this;return self__.meta5480;
});
sweep_stake.core.t5479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5481,meta5480__$1){var self__ = this;
var _5481__$1 = this;return (new sweep_stake.core.t5479(self__.winners,self__.bet,self__.player,self__.predication_cell,meta5480__$1));
});
sweep_stake.core.__GT_t5479 = (function __GT_t5479(winners__$1,bet__$1,player__$1,predication_cell__$1,meta5480){return (new sweep_stake.core.t5479(winners__$1,bet__$1,player__$1,predication_cell__$1,meta5480));
});
}
return (new sweep_stake.core.t5479(winners,bet,player,predication_cell,null));
});
sweep_stake.core.bet_winners = (function bet_winners(players,bet){return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__5482_SHARP_){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bet-id","bet-id",3916339017),new cljs.core.Keyword(null,"bet-id","bet-id",3916339017).cljs$core$IFn$_invoke$arity$1(bet),new cljs.core.Keyword(null,"predication","predication",2635212876),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(bet)], null)], true),new cljs.core.Keyword(null,"predications","predications",4029831755).cljs$core$IFn$_invoke$arity$1(p1__5482_SHARP_));
}),players));
});
sweep_stake.core.bet_row = (function bet_row(app,bet,owner){if(typeof sweep_stake.core.t5487 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t5487 = (function (owner,bet,app,bet_row,meta5488){
this.owner = owner;
this.bet = bet;
this.app = app;
this.bet_row = bet_row;
this.meta5488 = meta5488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t5487.cljs$lang$type = true;
sweep_stake.core.t5487.cljs$lang$ctorStr = "sweep-stake.core/t5487";
sweep_stake.core.t5487.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sweep-stake.core/t5487");
});
sweep_stake.core.t5487.prototype.om$core$IRender$ = true;
sweep_stake.core.t5487.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var players = new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(self__.app);var bet_winners = sweep_stake.core.bet_winners.call(null,players,self__.bet);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.td(null,new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(self__.bet)),om.core.build_all.call(null,(function (p1__5483_SHARP_){return sweep_stake.core.predication_cell.call(null,p1__5483_SHARP_,self__.bet,bet_winners);
}),players),React.DOM.td(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(self__.bet))], null)));
});
sweep_stake.core.t5487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5489){var self__ = this;
var _5489__$1 = this;return self__.meta5488;
});
sweep_stake.core.t5487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5489,meta5488__$1){var self__ = this;
var _5489__$1 = this;return (new sweep_stake.core.t5487(self__.owner,self__.bet,self__.app,self__.bet_row,meta5488__$1));
});
sweep_stake.core.__GT_t5487 = (function __GT_t5487(owner__$1,bet__$1,app__$1,bet_row__$1,meta5488){return (new sweep_stake.core.t5487(owner__$1,bet__$1,app__$1,bet_row__$1,meta5488));
});
}
return (new sweep_stake.core.t5487(owner,bet,app,bet_row,null));
});
sweep_stake.core.player_wins = (function player_wins(player,bets){return cljs.core.count.call(null,cljs.core.mapcat.call(null,(function (p1__5490_SHARP_){return sweep_stake.core.bet_winners.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [player], null),p1__5490_SHARP_);
}),bets));
});
sweep_stake.core.totals_row = (function totals_row(app,owner){if(typeof sweep_stake.core.t5495 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t5495 = (function (owner,app,totals_row,meta5496){
this.owner = owner;
this.app = app;
this.totals_row = totals_row;
this.meta5496 = meta5496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t5495.cljs$lang$type = true;
sweep_stake.core.t5495.cljs$lang$ctorStr = "sweep-stake.core/t5495";
sweep_stake.core.t5495.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sweep-stake.core/t5495");
});
sweep_stake.core.t5495.prototype.om$core$IRender$ = true;
sweep_stake.core.t5495.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var bets = new cljs.core.Keyword(null,"bets","bets",1016924532).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.td(null,""),cljs.core.mapv.call(null,(function (p1__5491_SHARP_){return React.DOM.td(null,sweep_stake.core.player_wins.call(null,p1__5491_SHARP_,bets));
}),new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.td(null,"")], null)));
});
sweep_stake.core.t5495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5497){var self__ = this;
var _5497__$1 = this;return self__.meta5496;
});
sweep_stake.core.t5495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5497,meta5496__$1){var self__ = this;
var _5497__$1 = this;return (new sweep_stake.core.t5495(self__.owner,self__.app,self__.totals_row,meta5496__$1));
});
sweep_stake.core.__GT_t5495 = (function __GT_t5495(owner__$1,app__$1,totals_row__$1,meta5496){return (new sweep_stake.core.t5495(owner__$1,app__$1,totals_row__$1,meta5496));
});
}
return (new sweep_stake.core.t5495(owner,app,totals_row,null));
});
sweep_stake.core.sweep_stake = (function sweep_stake__$1(app,owner){if(typeof sweep_stake.core.t5502 !== 'undefined')
{} else
{
/**
* @constructor
*/
sweep_stake.core.t5502 = (function (owner,app,sweep_stake,meta5503){
this.owner = owner;
this.app = app;
this.sweep_stake = sweep_stake;
this.meta5503 = meta5503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sweep_stake.core.t5502.cljs$lang$type = true;
sweep_stake.core.t5502.cljs$lang$ctorStr = "sweep-stake.core/t5502";
sweep_stake.core.t5502.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sweep-stake.core/t5502");
});
sweep_stake.core.t5502.prototype.om$core$IRender$ = true;
sweep_stake.core.t5502.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.table,null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,sweep_stake.core.heading_row,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build_all.call(null,(function (p1__5498_SHARP_){return sweep_stake.core.bet_row.call(null,self__.app,p1__5498_SHARP_,self__.owner);
}),new cljs.core.Keyword(null,"bets","bets",1016924532).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build.call(null,sweep_stake.core.totals_row,self__.app)], null)));
});
sweep_stake.core.t5502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5504){var self__ = this;
var _5504__$1 = this;return self__.meta5503;
});
sweep_stake.core.t5502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5504,meta5503__$1){var self__ = this;
var _5504__$1 = this;return (new sweep_stake.core.t5502(self__.owner,self__.app,self__.sweep_stake,meta5503__$1));
});
sweep_stake.core.__GT_t5502 = (function __GT_t5502(owner__$1,app__$1,sweep_stake__$2,meta5503){return (new sweep_stake.core.t5502(owner__$1,app__$1,sweep_stake__$2,meta5503));
});
}
return (new sweep_stake.core.t5502(owner,app,sweep_stake__$1,null));
});
om.core.root.call(null,sweep_stake.core.sweep_stake,sweep_stake.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
