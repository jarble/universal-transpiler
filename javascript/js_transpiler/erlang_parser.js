/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var erlang_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,21],$V2=[1,19],$V3=[1,14],$V4=[1,17],$V5=[1,20],$V6=[1,22],$V7=[1,35],$V8=[1,31],$V9=[1,34],$Va=[1,37],$Vb=[2,35],$Vc=[10,18,48],$Vd=[2,53],$Ve=[1,39],$Vf=[1,40],$Vg=[1,41],$Vh=[1,42],$Vi=[1,43],$Vj=[1,44],$Vk=[1,45],$Vl=[1,46],$Vm=[1,47],$Vn=[1,48],$Vo=[1,49],$Vp=[10,14,18,19,25,27,31,32,33,34,35,36,37,38,39,40,41,45,46,48,49,54],$Vq=[10,14,18,19,25,27,31,32,33,34,35,36,37,38,39,40,41,45,46,48,49,52,54],$Vr=[2,46],$Vs=[1,56],$Vt=[14,27,54],$Vu=[1,57],$Vv=[10,14,27,54],$Vw=[2,36],$Vx=[10,48],$Vy=[10,14,18,19,25,27,31,32,33,34,35,36,37,45,46,48,49,54],$Vz=[10,14,18,19,25,27,31,32,33,34,35,36,37,38,39,45,46,48,49,54];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements":4,"EOF":5,"statements":6,"statements_":7,"statements_without_vars":8,"initialize_vars":9,",":10,"statement":11,"initialize_var":12,"top_level_statement":13,".":14,"IDENTIFIER":15,"(":16,"exprs":17,")":18,"->":19,"function_call":20,"statement_with_semicolon":21,"if_statement":22,"case":23,"e":24,"of":25,"case_statements":26,"end":27,"initialize_var1":28,"initialize_var_":29,"=":30,"or":31,"and":32,"==":33,"=<":34,"<":35,">=":36,">":37,"+":38,"-":39,"*":40,"/":41,"dot_expr":42,"parentheses_expr":43,"[":44,"||":45,"<-":46,"list_comprehensions":47,"]":48,"|":49,"NUMBER":50,"STRING_LITERAL":51,":":52,"elif":53,";":54,"if":55,"case_statement":56,"case_statements_":57,"_":58,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:",",14:".",15:"IDENTIFIER",16:"(",18:")",19:"->",23:"case",25:"of",27:"end",30:"=",31:"or",32:"and",33:"==",34:"=<",35:"<",36:">=",37:">",38:"+",39:"-",40:"*",41:"/",44:"[",45:"||",46:"<-",48:"]",49:"|",50:"NUMBER",51:"STRING_LITERAL",52:":",54:";",55:"if",58:"_"},
productions_: [0,[3,2],[6,1],[7,1],[7,3],[8,3],[8,1],[9,3],[9,1],[4,3],[4,2],[13,6],[13,5],[13,3],[13,1],[11,1],[11,1],[11,5],[21,1],[28,1],[12,1],[29,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,2],[24,1],[20,3],[20,4],[43,9],[43,7],[43,2],[43,3],[43,5],[43,1],[43,5],[43,3],[43,1],[43,1],[43,1],[47,5],[47,1],[42,3],[42,1],[17,3],[17,1],[53,3],[53,5],[22,7],[56,4],[57,2],[57,1],[26,4]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2:
this.$ = ["statements",$$[$0]]
break;
case 4:
this.$ = [["lexically_scoped_vars",$$[$0-2],["statements",$$[$0]]]]
break;
case 5: case 7: case 52:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 6: case 8: case 51: case 59:
this.$ =
 [$$[$0]];
break;
case 9: case 50:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 10:
this.$ =
 [$$[$0-1]];
break;
case 11:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0]]
break;
case 12:
this.$ = ["function","public","Object",$$[$0-4],[],$$[$0]]
break;
case 13:
this.$ = ["function","public","Object",$$[$0-2],[],$$[$0]]
break;
case 15:
this.$ = ["semicolon",$$[$0]];
break;
case 17:
this.$ = ["switch",$$[$0-3],$$[$0-1]];
break;
case 18:
this.$= ["return",$$[$0]];
break;
case 19:
this.$ = ["initialize_var"].concat($$[$0]);
break;
case 20:
this.$ = ["lexically_scoped_var"].concat($$[$0]);
break;
case 21:
this.$ = ["Object",$$[$0-2],$$[$0]];
break;
case 22:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 23:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 24:
this.$ = ['==',$$[$0-2],$$[$0]];
break;
case 25:
this.$ = ['<=',$$[$0-2],$$[$0]];
break;
case 26: case 27: case 28: case 29:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 30:
this.$ = ["-",$$[$0-2],$$[$0]];
break;
case 31:
this.$ = ["*",$$[$0-2],$$[$0]];
break;
case 32:
this.$ = ["/",$$[$0-2],$$[$0]];
break;
case 33:
this.$ = ["-",$$[$0]];
break;
case 34:
this.$ = [".",$$[$0]];
break;
case 35:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 36:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 37:
this.$=["list_comprehension",$$[$0-7],$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 38:
this.$=["list_comprehension",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 39:
this.$ = ["initializer_list","Object",[]];
break;
case 40:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 41:
this.$ = ["list_head_tail","Object",$$[$0-3],["initializer_list","Object",$$[$0-1]]];
break;
case 43:
this.$ = ["initialize_tuple","Object",[$$[$0-3]].concat($$[$0-1])];
break;
case 44:
this.$ = $$[$0-1];
break;
case 45: case 46: case 47:
this.$ = yytext;
break;
case 48:
this.$ = ["list_comprehensions",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 53:
this.$ = [$$[$0]];
break;
case 54:
this.$ = ["elif",$$[$0-2],$$[$0]];
break;
case 55:
this.$ = ["elif",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 56:
this.$ = ["if",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 57:
this.$ = ["case",$$[$0-3],$$[$0-1]]
break;
case 58:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 60:
this.$ = $$[$0-3].concat([["default",$$[$0]]])
break;
}
},
table: [{3:1,4:2,13:3,15:$V0,20:5},{1:[3]},{5:[1,6]},{14:[1,7]},{16:[1,8],19:[1,9]},{14:[2,14]},{1:[2,1]},{4:10,5:[2,10],13:3,15:$V0,20:5},{15:$V1,16:$V2,17:11,18:[1,12],20:18,24:13,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{6:23,7:24,8:25,9:26,11:27,12:28,15:$V7,16:$V2,20:18,21:29,22:30,23:$V8,24:33,29:32,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},{5:[2,9]},{10:$Va,18:[1,36]},{14:$Vb,19:[1,38]},o($Vc,$Vd,{31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo}),{15:$V1,16:$V2,20:18,24:50,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},o($Vp,[2,34]),o($Vp,[2,51],{52:[1,51]}),{15:$V1,16:$V2,17:54,20:18,24:52,39:$V3,42:15,43:16,44:$V4,48:[1,53],50:$V5,51:$V6},o($Vq,[2,42]),{15:$V1,16:$V2,20:18,24:55,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},o($Vq,[2,45]),o($Vq,$Vr,{16:$Vs}),o($Vq,[2,47]),{14:[2,13]},o($Vt,[2,2]),o($Vt,[2,3],{10:$Vu}),{10:[1,58]},o($Vv,[2,6]),{10:[2,8]},o($Vv,[2,15]),o($Vv,[2,16]),{15:$V1,16:$V2,20:18,24:59,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{10:[2,20]},o($Vv,[2,18],{31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo}),{15:$V1,16:$V2,20:18,24:60,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},o([10,14,27,31,32,33,34,35,36,37,38,39,40,41,52,54],$Vr,{16:$Vs,30:[1,61]}),{14:$Vw,19:[1,62]},{15:$V1,16:$V2,20:18,24:63,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{6:64,7:24,8:25,9:26,11:27,12:28,15:$V7,16:$V2,20:18,21:29,22:30,23:$V8,24:33,29:32,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},{15:$V1,16:$V2,20:18,24:65,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:66,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:67,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:68,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:69,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:70,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:71,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:72,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:73,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:74,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:75,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},o($Vp,[2,33]),{15:$V1,16:$V2,20:18,42:76,43:16,44:$V4,50:$V5,51:$V6},o($Vx,$Vd,{31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,45:[1,77],49:[1,78]}),o($Vq,[2,39]),{10:$Va,48:[1,79]},{10:[1,80],18:[1,81],31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo},{15:$V1,16:$V2,17:83,18:[1,82],20:18,24:13,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{11:84,15:$V1,16:$V2,20:18,21:29,22:30,23:$V8,24:33,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},{8:85,11:27,12:86,15:$V7,16:$V2,20:18,21:29,22:30,23:$V8,24:33,29:32,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},{25:[1,87],31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo},{19:[1,88],31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo},{15:$V1,16:$V2,20:18,24:89,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{6:90,7:24,8:25,9:26,11:27,12:28,15:$V7,16:$V2,20:18,21:29,22:30,23:$V8,24:33,29:32,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},o($Vc,[2,52],{31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo}),{14:[2,12]},o([10,14,18,19,25,27,31,45,46,48,49,54],[2,22],{32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo}),o([10,14,18,19,25,27,31,32,45,46,48,49,54],[2,23],{33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo}),o($Vy,[2,24],{38:$Vl,39:$Vm,40:$Vn,41:$Vo}),o($Vy,[2,25],{38:$Vl,39:$Vm,40:$Vn,41:$Vo}),o($Vy,[2,26],{38:$Vl,39:$Vm,40:$Vn,41:$Vo}),o($Vy,[2,27],{38:$Vl,39:$Vm,40:$Vn,41:$Vo}),o($Vy,[2,28],{38:$Vl,39:$Vm,40:$Vn,41:$Vo}),o($Vz,[2,29],{40:$Vn,41:$Vo}),o($Vz,[2,30],{40:$Vn,41:$Vo}),o($Vp,[2,31]),o($Vp,[2,32]),o($Vp,[2,50]),{15:$V1,16:$V2,20:18,24:91,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,17:92,20:18,24:13,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},o($Vq,[2,40]),{15:$V1,16:$V2,17:93,20:18,24:13,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},o($Vq,[2,44]),o($Vq,$Vb),{10:$Va,18:[1,94]},o($Vv,[2,5]),o($Vt,[2,4],{10:$Vu}),{10:[2,7]},{15:$V1,16:$V2,20:18,24:98,26:95,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,56:97,57:96},{6:99,7:24,8:25,9:26,11:27,12:28,15:$V7,16:$V2,20:18,21:29,22:30,23:$V8,24:33,29:32,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},{10:[2,21],31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo},{14:[2,11]},{31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,46:[1,100]},{10:$Va,48:[1,101]},{10:$Va,18:[1,102]},o($Vq,$Vw),{27:[1,103]},{58:[1,104]},{15:$V1,16:$V2,20:18,24:98,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,56:97,57:105,58:[2,59]},{19:[1,106],31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo},{54:[1,107]},{15:$V1,16:$V2,20:18,24:109,39:$V3,42:15,43:16,44:$V4,47:108,50:$V5,51:$V6},o($Vq,[2,41]),o($Vq,[2,43]),o($Vv,[2,17]),{19:[1,110]},{58:[2,58]},{6:111,7:24,8:25,9:26,11:27,12:28,15:$V7,16:$V2,20:18,21:29,22:30,23:$V8,24:33,29:32,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},{15:$V1,16:$V2,20:18,24:113,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,53:112},{10:[1,114],48:[1,115]},o($Vx,[2,49],{31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo}),{6:116,7:24,8:25,9:26,11:27,12:28,15:$V7,16:$V2,20:18,21:29,22:30,23:$V8,24:33,29:32,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},{54:[1,117]},{27:[1,118]},{19:[1,119],31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo},{15:$V1,16:$V2,20:18,24:120,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},o($Vq,[2,38]),{27:[2,60]},o([15,16,39,44,50,51,58],[2,57]),o($Vv,[2,56]),{6:121,7:24,8:25,9:26,11:27,12:28,15:$V7,16:$V2,20:18,21:29,22:30,23:$V8,24:33,29:32,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,55:$V9},{31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,46:[1,123],48:[1,122]},{27:[2,54],54:[1,124]},o($Vq,[2,37]),{15:$V1,16:$V2,20:18,24:125,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6},{15:$V1,16:$V2,20:18,24:113,39:$V3,42:15,43:16,44:$V4,50:$V5,51:$V6,53:126},o($Vx,[2,48],{31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo}),{27:[2,55]}],
defaultActions: {5:[2,14],6:[2,1],10:[2,9],23:[2,13],28:[2,8],32:[2,20],64:[2,12],86:[2,7],90:[2,11],105:[2,58],116:[2,60],126:[2,55]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* IGNORE */
break;
case 1:/* IGNORE */
break;
case 2:return 50
break;
case 3:return 51
break;
case 4:return 23
break;
case 5:return 25
break;
case 6:return "or"
break;
case 7:return "if"
break;
case 8:return "and"
break;
case 9:return "andalso"
break;
case 10:return "end"
break;
case 11:return 10
break;
case 12:return 54
break;
case 13:return 45
break;
case 14:return 19
break;
case 15:return 14
break;
case 16:return 52
break;
case 17:return 36
break;
case 18:return 37
break;
case 19:return 34
break;
case 20:return 46
break;
case 21:return 35
break;
case 22:return 33
break;
case 23:return 30
break;
case 24:return '*='
break;
case 25:return 40
break;
case 26:return '/='
break;
case 27:return 41
break;
case 28:return '-='
break;
case 29:return '--'
break;
case 30:return 39
break;
case 31:return '++'
break;
case 32:return '+='
break;
case 33:return 38
break;
case 34:return '^'
break;
case 35:return '{'
break;
case 36:return '}'
break;
case 37:return ']['
break;
case 38:return 44
break;
case 39:return 48
break;
case 40:return 16
break;
case 41:return 18
break;
case 42:return 58
break;
case 43:return 15
break;
case 44:return 5
break;
case 45:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:;.*)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:case\b)/,/^(?:of\b)/,/^(?:or\b)/,/^(?:if\b)/,/^(?:and\b)/,/^(?:andalso\b)/,/^(?:end\b)/,/^(?:,)/,/^(?:;)/,/^(?:\|\|)/,/^(?:->)/,/^(?:\.)/,/^(?::)/,/^(?:>=)/,/^(?:>)/,/^(?:=<)/,/^(?:<-)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = erlang_parser;
exports.Parser = erlang_parser.Parser;
exports.parse = function () { return erlang_parser.parse.apply(erlang_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}