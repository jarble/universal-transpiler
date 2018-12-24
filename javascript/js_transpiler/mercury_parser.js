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
var mercury_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,22],$V2=[1,12],$V3=[1,17],$V4=[1,20],$V5=[1,23],$V6=[1,24],$V7=[1,37],$V8=[1,33],$V9=[1,36],$Va=[10,14,19,22,23,28,30,33,34,35,36,37,38,39,40,41,42,43,48,49,50,56],$Vb=[1,40],$Vc=[10,22,50],$Vd=[2,56],$Ve=[1,42],$Vf=[1,43],$Vg=[1,44],$Vh=[1,45],$Vi=[1,46],$Vj=[1,47],$Vk=[1,48],$Vl=[1,49],$Vm=[1,50],$Vn=[1,51],$Vo=[1,52],$Vp=[2,12],$Vq=[1,53],$Vr=[1,54],$Vs=[1,55],$Vt=[1,57],$Vu=[10,14,22,23,28,30,33,34,35,36,37,38,39,40,41,42,43,48,49,50,56],$Vv=[14,30,56],$Vw=[1,64],$Vx=[10,14,30,56],$Vy=[2,51],$Vz=[10,22],$VA=[10,14,22,23,28,30,33,34,35,36,37,38,39,48,49,50,56],$VB=[10,14,22,23,28,30,33,34,35,36,37,38,39,40,41,48,49,50,56];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements":4,"EOF":5,"statements":6,"statements_":7,"statements_without_vars":8,"initialize_vars":9,",":10,"statement":11,"initialize_var":12,"top_level_statement":13,".":14,"parameter":15,"IDENTIFIER":16,"=":17,"e":18,":":19,"parameters":20,"(":21,")":22,"->":23,"function_call":24,"statement_with_semicolon":25,"if_statement":26,"case":27,"of":28,"case_statements":29,"end":30,"initialize_var1":31,"initialize_var_":32,"or":33,"and":34,"==":35,"=<":36,"<":37,">=":38,">":39,"+":40,"-":41,"*":42,"/":43,"dot_expr":44,"exprs":45,"parentheses_expr":46,"[":47,"||":48,"<-":49,"]":50,"expr":51,"|":52,"NUMBER":53,"STRING_LITERAL":54,"elif":55,";":56,"if":57,"case_statement":58,"case_statements_":59,"_":60,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:",",14:".",16:"IDENTIFIER",17:"=",19:":",21:"(",22:")",23:"->",27:"case",28:"of",30:"end",33:"or",34:"and",35:"==",36:"=<",37:"<",38:">=",39:">",40:"+",41:"-",42:"*",43:"/",47:"[",48:"||",49:"<-",50:"]",51:"expr",52:"|",53:"NUMBER",54:"STRING_LITERAL",56:";",57:"if",60:"_"},
productions_: [0,[3,2],[6,1],[7,1],[7,3],[8,3],[8,1],[9,3],[9,1],[4,3],[4,2],[15,3],[15,1],[15,5],[15,3],[20,3],[20,1],[20,0],[13,6],[13,3],[13,1],[11,1],[11,1],[11,5],[25,1],[31,1],[12,1],[32,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,2],[18,1],[24,3],[24,4],[46,7],[46,9],[46,2],[46,3],[46,5],[46,1],[46,3],[46,1],[46,1],[46,1],[44,3],[44,1],[45,3],[45,1],[55,3],[55,5],[26,7],[58,4],[59,2],[59,1],[29,4]],
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
case 5: case 7: case 55:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 6: case 8: case 16: case 54: case 62:
this.$ =
 [$$[$0]];
break;
case 9: case 15: case 53:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 10:
this.$ =
 [$$[$0-1]];
break;
case 11:
this.$ = ["default_parameter","Object",$$[$0-2],$$[$0]];
break;
case 12:
this.$ = ["Object", $$[$0]];
break;
case 13:
this.$ = ["default_parameter",$$[$0-2],$$[$0-4],$$[$0]];
break;
case 14:
this.$ = [$$[$0], $$[$0-2]];
break;
case 17:
this.$ = []
break;
case 18:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0]]
break;
case 19:
this.$ = ["function","public","Object",$$[$0-2],[],$$[$0]]
break;
case 21:
this.$ = ["semicolon",$$[$0]];
break;
case 23:
this.$ = ["switch",$$[$0-3],$$[$0-1]];
break;
case 24:
this.$= ["return",$$[$0]];
break;
case 25:
this.$ = ["initialize_var"].concat($$[$0]);
break;
case 26:
this.$ = ["lexically_scoped_var"].concat($$[$0]);
break;
case 27:
this.$ = ["Object",$$[$0-2],$$[$0]];
break;
case 28:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 29:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 30:
this.$ = ['==',$$[$0-2],$$[$0]];
break;
case 31:
this.$ = ['<=',$$[$0-2],$$[$0]];
break;
case 32: case 34:
this.$ = ['>',$$[$0-2],$$[$0]];
break;
case 33:
this.$ = ['>=',$$[$0-2],$$[$0]];
break;
case 35:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 36:
this.$ = ["-",$$[$0-2],$$[$0]];
break;
case 37:
this.$ = ["*",$$[$0-2],$$[$0]];
break;
case 38:
this.$ = ["/",$$[$0-2],$$[$0]];
break;
case 39:
this.$ = ["-",$$[$0]];
break;
case 40:
this.$ = [".",$$[$0]];
break;
case 41:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 42:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 43:
this.$=["list_comprehension",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 44:
this.$=["list_comprehension",$$[$0-7],$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 45:
this.$ = ["initializer_list","Object",[]];
break;
case 46:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 47:
this.$ = ["list_head_tail","Object",$$[$0-3],["initializer_list","Object",$$[$0-1]]];
break;
case 49:
this.$ = $$[$0-1];
break;
case 50: case 51: case 52:
this.$ = yytext;
break;
case 56:
this.$ = [$$[$0]];
break;
case 57:
this.$ = ["elif",$$[$0-2],$$[$0]];
break;
case 58:
this.$ = ["elif",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 59:
this.$ = ["if",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 60:
this.$ = ["case",$$[$0-3],$$[$0-1]]
break;
case 61:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 63:
this.$ = $$[$0-3].concat([["default",$$[$0]]])
break;
}
},
table: [{3:1,4:2,13:3,16:$V0,24:5},{1:[3]},{5:[1,6]},{14:[1,7]},{21:[1,8],23:[1,9]},{14:[2,20]},{1:[2,1]},{4:10,5:[2,10],13:3,16:$V0,24:5},{15:14,16:[1,16],18:15,20:11,21:$V1,22:$V2,24:21,41:$V3,44:18,45:13,46:19,47:$V4,53:$V5,54:$V6},{6:25,7:26,8:27,9:28,11:29,12:30,16:$V7,18:35,21:$V1,24:21,25:31,26:32,27:$V8,32:34,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,57:$V9},{5:[2,9]},{22:[1,38]},o($Va,[2,41]),{10:$Vb,22:[1,39]},{10:[1,41],22:[2,16]},o($Vc,$Vd,{33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o([10,22,33,34,35,36,37,38,39,40,41,42,43],$Vp,{17:$Vq,19:$Vr,21:$Vs}),{16:$Vt,18:56,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},o($Vu,[2,40]),o($Vu,[2,54],{19:[1,58]}),{16:$Vt,18:59,21:$V1,24:21,41:$V3,44:18,45:61,46:19,47:$V4,50:[1,60],51:[1,62],53:$V5,54:$V6},o($Va,[2,48]),{16:$Vt,18:63,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},o($Va,[2,50]),o($Va,[2,52]),{14:[2,19]},o($Vv,[2,2]),o($Vv,[2,3],{10:$Vw}),{10:[1,65]},o($Vx,[2,6]),{10:[2,8]},o($Vx,[2,21]),o($Vx,[2,22]),{16:$Vt,18:66,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{10:[2,26]},o($Vx,[2,24],{33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo}),{16:$Vt,18:67,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},o([10,14,19,30,33,34,35,36,37,38,39,40,41,42,43,56],$Vy,{17:[1,68],21:$Vs}),{23:[1,69]},o($Va,[2,42]),{16:$Vt,18:70,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{15:14,16:[1,72],20:71,22:[2,17]},{16:$Vt,18:73,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:74,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:75,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:76,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:77,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:78,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:79,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:80,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:81,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:82,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:83,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:$Vt,18:84,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{16:[1,85]},{16:$Vt,18:15,21:$V1,22:$V2,24:21,41:$V3,44:18,45:13,46:19,47:$V4,53:$V5,54:$V6},o($Vu,[2,39]),o($Va,$Vy,{21:$Vs}),{16:$Vt,21:$V1,24:21,44:86,46:19,47:$V4,53:$V5,54:$V6},o([10,50],$Vd,{33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo,48:[1,87]}),o($Va,[2,45]),{10:$Vb,50:[1,88]},{52:[1,89]},{22:[1,90],33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo},{11:91,16:$Vt,18:35,21:$V1,24:21,25:31,26:32,27:$V8,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,57:$V9},{8:92,11:29,12:93,16:$V7,18:35,21:$V1,24:21,25:31,26:32,27:$V8,32:34,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,57:$V9},{28:[1,94],33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo},{23:[1,95],33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo},{16:$Vt,18:96,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{6:97,7:26,8:27,9:28,11:29,12:30,16:$V7,18:35,21:$V1,24:21,25:31,26:32,27:$V8,32:34,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,57:$V9},o($Vc,[2,55],{33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo}),{22:[2,15]},o($Vz,$Vp,{17:$Vq,19:$Vr}),o([10,14,22,23,28,30,33,48,49,50,56],[2,28],{34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o([10,14,22,23,28,30,33,34,48,49,50,56],[2,29],{35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o($VA,[2,30],{40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o($VA,[2,31],{40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o($VA,[2,32],{40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o($VA,[2,33],{40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o($VA,[2,34],{40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o($VB,[2,35],{42:$Vn,43:$Vo}),o($VB,[2,36],{42:$Vn,43:$Vo}),o($Vu,[2,37]),o($Vu,[2,38]),o($Vz,[2,11],{33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo}),o($Vz,[2,14],{17:[1,98]}),o($Vu,[2,53]),{16:$Vt,18:99,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},o($Va,[2,46]),{16:$Vt,18:15,21:$V1,24:21,41:$V3,44:18,45:100,46:19,47:$V4,53:$V5,54:$V6},o($Va,[2,49]),o($Vx,[2,5]),o($Vv,[2,4],{10:$Vw}),{10:[2,7]},{16:$Vt,18:104,21:$V1,24:21,29:101,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,58:103,59:102},{6:105,7:26,8:27,9:28,11:29,12:30,16:$V7,18:35,21:$V1,24:21,25:31,26:32,27:$V8,32:34,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,57:$V9},{10:[2,27],33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo},{14:[2,18]},{16:$Vt,18:106,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo,49:[1,107]},{10:$Vb,50:[1,108]},{30:[1,109]},{60:[1,110]},{16:$Vt,18:104,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,58:103,59:111,60:[2,62]},{23:[1,112],33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo},{56:[1,113]},o($Vz,[2,13],{33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo}),{16:$Vt,18:114,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},o($Va,[2,47]),o($Vx,[2,23]),{23:[1,115]},{60:[2,61]},{6:116,7:26,8:27,9:28,11:29,12:30,16:$V7,18:35,21:$V1,24:21,25:31,26:32,27:$V8,32:34,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,57:$V9},{16:$Vt,18:118,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,55:117},{10:[1,120],33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo,50:[1,119]},{6:121,7:26,8:27,9:28,11:29,12:30,16:$V7,18:35,21:$V1,24:21,25:31,26:32,27:$V8,32:34,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,57:$V9},{56:[1,122]},{30:[1,123]},{23:[1,124],33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo},o($Va,[2,43]),{16:$Vt,18:125,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6},{30:[2,63]},o([16,21,41,47,53,54,60],[2,60]),o($Vx,[2,59]),{6:126,7:26,8:27,9:28,11:29,12:30,16:$V7,18:35,21:$V1,24:21,25:31,26:32,27:$V8,32:34,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,57:$V9},{33:$Ve,34:$Vf,35:$Vg,36:$Vh,37:$Vi,38:$Vj,39:$Vk,40:$Vl,41:$Vm,42:$Vn,43:$Vo,50:[1,127]},{30:[2,57],56:[1,128]},o($Va,[2,44]),{16:$Vt,18:118,21:$V1,24:21,41:$V3,44:18,46:19,47:$V4,53:$V5,54:$V6,55:129},{30:[2,58]}],
defaultActions: {5:[2,20],6:[2,1],10:[2,9],25:[2,19],30:[2,8],34:[2,26],71:[2,15],93:[2,7],97:[2,18],111:[2,61],121:[2,63],129:[2,58]},
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
case 0:/* skip whitespace */
break;
case 1:return 53
break;
case 2:return 54
break;
case 3:return 27
break;
case 4:return 28
break;
case 5:return "or"
break;
case 6:return "if"
break;
case 7:return "and"
break;
case 8:return "andalso"
break;
case 9:return "end"
break;
case 10:return 10
break;
case 11:return 56
break;
case 12:return 48
break;
case 13:return 23
break;
case 14:return 14
break;
case 15:return 19
break;
case 16:return 38
break;
case 17:return 39
break;
case 18:return 36
break;
case 19:return 49
break;
case 20:return 37
break;
case 21:return 35
break;
case 22:return 17
break;
case 23:return '*='
break;
case 24:return 42
break;
case 25:return '/='
break;
case 26:return 43
break;
case 27:return '-='
break;
case 28:return '--'
break;
case 29:return 41
break;
case 30:return '++'
break;
case 31:return '+='
break;
case 32:return 40
break;
case 33:return '^'
break;
case 34:return '{'
break;
case 35:return '}'
break;
case 36:return ']['
break;
case 37:return 47
break;
case 38:return 50
break;
case 39:return 21
break;
case 40:return 22
break;
case 41:return 60
break;
case 42:return 16
break;
case 43:return 5
break;
case 44:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:case\b)/,/^(?:of\b)/,/^(?:or\b)/,/^(?:if\b)/,/^(?:and\b)/,/^(?:andalso\b)/,/^(?:end\b)/,/^(?:,)/,/^(?:;)/,/^(?:\|\|)/,/^(?:->)/,/^(?:\.)/,/^(?::)/,/^(?:>=)/,/^(?:>)/,/^(?:=<)/,/^(?:<-)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
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
exports.parser = mercury_parser;
exports.Parser = mercury_parser.Parser;
exports.parse = function () { return mercury_parser.parse.apply(mercury_parser, arguments); };
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