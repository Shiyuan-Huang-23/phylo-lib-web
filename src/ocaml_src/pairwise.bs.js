// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Char from "bs-platform/lib/es6/char.js";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Caml_obj from "bs-platform/lib/es6/caml_obj.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Caml_primitive from "bs-platform/lib/es6/caml_primitive.js";
import * as Dna$PhyloLibWeb from "./dna.bs.js";

function max_three(a, b, c) {
  return Caml_obj.caml_max(Caml_obj.caml_max(a, b), c);
}

function init_matrix(d1, d2, indel, m, n) {
  var mat = $$Array.make_matrix(m, n, -1000000000);
  for(var r = 0; r < m; ++r){
    Caml_array.caml_array_set(Caml_array.caml_array_get(mat, r), 0, Caml_int32.imul(r, indel));
  }
  for(var c = 0; c < n; ++c){
    Caml_array.caml_array_set(Caml_array.caml_array_get(mat, 0), c, Caml_int32.imul(c, indel));
  }
  return mat;
}

function neighbors(d1, d2, r, c, mat, align, misalign, indel) {
  var left = c.contents < 1 ? -1000000000 : indel + Caml_array.caml_array_get(Caml_array.caml_array_get(mat, r.contents), c.contents - 1 | 0) | 0;
  var up = r.contents < 1 ? -1000000000 : indel + Caml_array.caml_array_get(Caml_array.caml_array_get(mat, r.contents - 1 | 0), c.contents) | 0;
  var diagonal = r.contents < 1 || c.contents < 1 ? -1000000000 : Caml_array.caml_array_get(Caml_array.caml_array_get(mat, r.contents - 1 | 0), c.contents - 1 | 0) + (
      Caml_obj.caml_equal(Dna$PhyloLibWeb.get(d1, (
                0 > r.contents ? 0 : r.contents
              ) - 1 | 0), Dna$PhyloLibWeb.get(d2, (
                0 > c.contents ? 0 : c.contents
              ) - 1 | 0)) ? align : misalign
    ) | 0;
  return /* tuple */[
          left,
          up,
          diagonal
        ];
}

function fill_matrix(d1, d2, align, misalign, indel, m, n) {
  var mat = init_matrix(d1, d2, indel, m, n);
  for(var r = 1; r < m; ++r){
    for(var c = 1; c < n; ++c){
      var match = neighbors(d1, d2, {
            contents: r
          }, {
            contents: c
          }, mat, align, misalign, indel);
      Caml_array.caml_array_set(Caml_array.caml_array_get(mat, r), c, max_three(match[0], match[1], match[2]));
    }
  }
  return mat;
}

function backtrack(d1, d2, mat, align, misalign, indel) {
  var r = {
    contents: Dna$PhyloLibWeb.length(d1)
  };
  var c = {
    contents: Dna$PhyloLibWeb.length(d2)
  };
  var acc1 = "";
  var acc2 = "";
  while(r.contents > 0 || c.contents > 0) {
    var match = neighbors(d1, d2, r, c, mat, align, misalign, indel);
    var cell = Caml_array.caml_array_get(Caml_array.caml_array_get(mat, r.contents), c.contents);
    if (cell === match[2]) {
      acc1 = Char.escaped(Dna$PhyloLibWeb.get_e(d1, r.contents - 1 | 0)) + acc1;
      acc2 = Char.escaped(Dna$PhyloLibWeb.get_e(d2, c.contents - 1 | 0)) + acc2;
      r.contents = r.contents - 1 | 0;
      c.contents = c.contents - 1 | 0;
    } else if (cell === match[0]) {
      acc1 = "_" + acc1;
      acc2 = Char.escaped(Dna$PhyloLibWeb.get_e(d2, c.contents - 1 | 0)) + acc2;
      c.contents = c.contents - 1 | 0;
    } else if (cell === match[1]) {
      acc2 = "_" + acc2;
      acc1 = Char.escaped(Dna$PhyloLibWeb.get_e(d1, r.contents - 1 | 0)) + acc1;
      r.contents = r.contents - 1 | 0;
    } else {
      Pervasives.failwith("This should not happen");
    }
  };
  return [
          Dna$PhyloLibWeb.from_string(acc1),
          Dna$PhyloLibWeb.from_string(acc2)
        ];
}

function align_pair(d1, d2, align, misalign, indel) {
  var m = Dna$PhyloLibWeb.length(d1) + 1 | 0;
  var n = Dna$PhyloLibWeb.length(d2) + 1 | 0;
  var mat = fill_matrix(d1, d2, align, misalign, indel, m, n);
  var score = Caml_array.caml_array_get(Caml_array.caml_array_get(mat, m - 1 | 0), n - 1 | 0);
  var alignment = backtrack(d1, d2, mat, align, misalign, indel);
  return /* tuple */[
          alignment,
          score
        ];
}

function diff(d1, d2, align, misalign, indel) {
  var m = Dna$PhyloLibWeb.length(d1) + 1 | 0;
  var n = Dna$PhyloLibWeb.length(d2) + 1 | 0;
  var mat = fill_matrix(d1, d2, align, misalign, indel, m, n);
  var aligned = backtrack(d1, d2, mat, align, misalign, indel);
  var s1 = Caml_array.caml_array_get(aligned, 0);
  var s2 = Caml_array.caml_array_get(aligned, 1);
  var len = Dna$PhyloLibWeb.length(s1);
  var diff$1 = 0;
  for(var r = 0; r < len; ++r){
    if (Caml_obj.caml_equal(Dna$PhyloLibWeb.get(s1, r), /* "_" */95) || Caml_obj.caml_equal(Dna$PhyloLibWeb.get(s2, r), /* "_" */95)) {
      diff$1 = diff$1 - indel | 0;
    } else if (Caml_obj.caml_notequal(Dna$PhyloLibWeb.get(s1, r), Dna$PhyloLibWeb.get(s2, r))) {
      diff$1 = diff$1 + 1 | 0;
    }
    
  }
  return diff$1;
}

function print_alignment(d1, d2) {
  var n = Dna$PhyloLibWeb.length(d1);
  for(var i = 0 ,i_finish = (n - 1 | 0) / 80 | 0; i <= i_finish; ++i){
    console.log(Dna$PhyloLibWeb.string_of_range(d1, Caml_int32.imul(80, i), Caml_primitive.caml_int_min(n, Caml_int32.imul(80, i + 1 | 0))));
    for(var j = Caml_int32.imul(80, i) ,j_finish = Caml_primitive.caml_int_min(n - 1 | 0, Caml_int32.imul(80, i + 1 | 0) - 1 | 0); j <= j_finish; ++j){
      if (Caml_obj.caml_equal(Dna$PhyloLibWeb.get(d1, j), Dna$PhyloLibWeb.get(d2, j))) {
        Pervasives.print_char(/* "*" */42);
      } else if (Caml_obj.caml_equal(Dna$PhyloLibWeb.get(d1, j), /* "_" */95) || Caml_obj.caml_equal(Dna$PhyloLibWeb.get(d2, j), /* "_" */95)) {
        Pervasives.print_char(/* " " */32);
      } else {
        Pervasives.print_char(/* "|" */124);
      }
    }
    Pervasives.print_newline(undefined);
    console.log(Dna$PhyloLibWeb.string_of_range(d2, Caml_int32.imul(80, i), Caml_primitive.caml_int_min(n, Caml_int32.imul(80, i + 1 | 0))));
    Pervasives.print_newline(undefined);
  }
  
}

export {
  align_pair ,
  diff ,
  print_alignment ,
  
}
/* No side effect */