// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from 'bs-platform/lib/es6/block.js';
import * as Curry from 'bs-platform/lib/es6/curry.js';
import * as Caml_obj from 'bs-platform/lib/es6/caml_obj.js';
import * as Caml_format from 'bs-platform/lib/es6/caml_format.js';
import * as Caml_exceptions from 'bs-platform/lib/es6/caml_exceptions.js';
import * as Tree$PhyloLibWeb from './tree.bs.js';
import * as Lexer$PhyloLibWeb from './lexer.bs.js';

var $$SyntaxError = Caml_exceptions.create(
  'Phylo_parser-PhyloLibWeb.SyntaxError',
);

var empty_phylo = {
  name: '',
  description: '',
  tree: Tree$PhyloLibWeb.empty,
};

var empty_clade_attr = {
  name: undefined,
  rank: undefined,
  confidence: undefined,
  taxonomy: undefined,
};

function empty_start_tag(t) {
  return {
    tag_name: t,
    str_attr: undefined,
    num_attr: undefined,
    bool_attr: undefined,
  };
}

function print_debug(s) {}

var peek = {
  contents: function (param) {
    return /* EOF */ 17;
  },
};

var consume_token = {
  contents: function (param) {
    return /* EOF */ 17;
  },
};

function consume(token) {
  var x = Curry._1(peek.contents, undefined);
  if (Caml_obj.caml_equal(x, token)) {
    Curry._1(consume_token.contents, undefined);
    return;
  }
  print_debug(
    'Expected ' +
      (Lexer$PhyloLibWeb.to_string(token) +
        (', got ' + Lexer$PhyloLibWeb.to_string(x))),
  );
  throw $$SyntaxError;
}

function is_valid_tag(t) {
  if (typeof t !== 'number') {
    if (t.tag === /* Word */ 1) {
      return true;
    } else {
      return false;
    }
  }
  switch (t) {
    case /* Phylogeny */ 0:
    case /* Name */ 1:
    case /* Description */ 2:
    case /* Clade */ 3:
    case /* Rank */ 4:
    case /* Confidence */ 5:
    case /* Taxonomy */ 6:
    case /* SciName */ 7:
    case /* ID */ 8:
      return true;
    default:
      return false;
  }
}

function parse_words(_acc) {
  while (true) {
    var acc = _acc;
    var w = Curry._1(peek.contents, undefined);
    if (typeof w === 'number') {
      switch (w) {
        case /* Name */ 1:
        case /* Description */ 2:
        case /* Clade */ 3:
        case /* Rank */ 4:
        case /* Confidence */ 5:
        case /* Taxonomy */ 6:
        case /* ID */ 8:
        case /* Dot */ 14:
        case /* True */ 15:
          break;
        default:
          return acc;
      }
    } else {
      if (w.tag) {
        var s = w[0];
        consume(/* Word */ Block.__(1, [s]));
        if (acc !== '') {
          _acc = acc + (' ' + s);
          continue;
        }
        _acc = s;
        continue;
      }
      var n = w[0];
      consume(/* Num */ Block.__(0, [n]));
      if (acc !== '') {
        _acc = acc + (' ' + String(n));
        continue;
      }
      _acc = String(n);
      continue;
    }
    consume(w);
    if (acc !== '') {
      _acc = acc + (' ' + Lexer$PhyloLibWeb.to_string(w));
      continue;
    }
    _acc = Lexer$PhyloLibWeb.to_string(w);
    continue;
  }
}

function add_assoc(lst, attr) {
  if (lst !== undefined) {
    return /* :: */ [attr, lst];
  } else {
    return /* :: */ [attr, /* [] */ 0];
  }
}

function consume_end_tag(t) {
  consume(/* LAngleSlash */ 10);
  consume(t);
  return consume(/* RAngle */ 11);
}

function add_attr(tag, attr) {
  var x = Curry._1(peek.contents, undefined);
  if (typeof x === 'number') {
    if (x === /* Quote */ 12) {
      consume(/* Quote */ 12);
      var match = Curry._1(peek.contents, undefined);
      var return_tag;
      if (typeof match === 'number') {
        if (match !== 15) {
          if (match !== 16) {
            print_debug('add_attr\r\n       attribute error');
            throw $$SyntaxError;
          }
          consume(/* False */ 16);
          return_tag = {
            tag_name: tag.tag_name,
            str_attr: tag.str_attr,
            num_attr: tag.num_attr,
            bool_attr: add_assoc(tag.bool_attr, /* tuple */ [attr, false]),
          };
        } else {
          consume(/* True */ 15);
          return_tag = {
            tag_name: tag.tag_name,
            str_attr: tag.str_attr,
            num_attr: tag.num_attr,
            bool_attr: add_assoc(tag.bool_attr, /* tuple */ [attr, true]),
          };
        }
      } else {
        var words = parse_words('');
        return_tag = {
          tag_name: tag.tag_name,
          str_attr: add_assoc(tag.str_attr, /* tuple */ [attr, words]),
          num_attr: tag.num_attr,
          bool_attr: tag.bool_attr,
        };
      }
      consume(/* Quote */ 12);
      return return_tag;
    }
    print_debug('add_attr\r\n match failure');
    throw $$SyntaxError;
  } else {
    if (x.tag) {
      print_debug('add_attr\r\n match failure');
      throw $$SyntaxError;
    }
    var x$1 = x[0];
    consume(/* Num */ Block.__(0, [x$1]));
    return {
      tag_name: tag.tag_name,
      str_attr: tag.str_attr,
      num_attr: add_assoc(tag.num_attr, /* tuple */ [attr, x$1]),
      bool_attr: tag.bool_attr,
    };
  }
}

function parse_start_tag(param) {
  consume(/* LAngle */ 9);
  var x = Curry._1(peek.contents, undefined);
  var tmp;
  if (is_valid_tag(x)) {
    consume(x);
    tmp = empty_start_tag(x);
  } else {
    print_debug('parse_start_tag error');
    throw $$SyntaxError;
  }
  var _tag = tmp;
  while (true) {
    var tag = _tag;
    var x$1 = Curry._1(peek.contents, undefined);
    if (Lexer$PhyloLibWeb.is_word(x$1)) {
      consume(x$1);
      consume(/* Eq */ 13);
      var attr = Lexer$PhyloLibWeb.to_string(x$1);
      _tag = add_attr(tag, attr);
      continue;
    }
    if (typeof x$1 === 'number') {
      if (x$1 !== 11) {
        print_debug('parse_attr match failure');
        throw $$SyntaxError;
      }
      consume(/* RAngle */ 11);
      return tag;
    }
    print_debug('parse_attr match failure');
    throw $$SyntaxError;
  }
}

function ignore_tag(t) {
  while (true) {
    var x = Curry._1(peek.contents, undefined);
    if (typeof x === 'number') {
      if (x !== 9) {
        if (x === 10) {
          return consume_end_tag(t);
        }
        consume(x);
        continue;
      }
      var tag = parse_start_tag(undefined);
      ignore_tag(tag.tag_name);
      continue;
    }
    consume(x);
    continue;
  }
}

function parse_name(param) {
  var match = Curry._1(peek.contents, undefined);
  if (typeof match === 'number') {
    print_debug('Name not word/number');
    throw $$SyntaxError;
  }
  var name = parse_words('');
  consume_end_tag(/* Name */ 1);
  return name;
}

function parse_description(param) {
  var match = Curry._1(peek.contents, undefined);
  if (typeof match === 'number') {
    print_debug('Description not word/number');
    throw $$SyntaxError;
  }
  var descr = parse_words('');
  consume_end_tag(/* Description */ 2);
  return descr;
}

function parse_float(n) {
  consume(/* Dot */ 14);
  var x = Curry._1(peek.contents, undefined);
  if (typeof x === 'number') {
    print_debug('Warning: confidence not valid. Set to default 0.0');
    consume_end_tag(/* Confidence */ 5);
    return 0.0;
  }
  if (x.tag) {
    print_debug('Warning: confidence not valid. Set to default 0.0');
    consume_end_tag(/* Confidence */ 5);
    return 0.0;
  }
  var x$1 = x[0];
  var f = Caml_format.caml_float_of_string(String(n) + ('.' + String(x$1)));
  consume(/* Num */ Block.__(0, [x$1]));
  consume_end_tag(/* Confidence */ 5);
  return f;
}

function parse_confidence(param) {
  var n = Curry._1(peek.contents, undefined);
  if (typeof n === 'number') {
    if (n === /* Dot */ 14) {
      return parse_float(0);
    }
    print_debug('Confidence not a number');
    throw $$SyntaxError;
  } else {
    if (n.tag) {
      print_debug('Confidence not a number');
      throw $$SyntaxError;
    }
    var n$1 = n[0];
    consume(/* Num */ Block.__(0, [n$1]));
    if (Curry._1(peek.contents, undefined) === /* Dot */ 14) {
      return parse_float(n$1);
    } else {
      consume_end_tag(/* Confidence */ 5);
      return n$1;
    }
  }
}

function parse_id(param) {
  var match = Curry._1(peek.contents, undefined);
  if (typeof match === 'number') {
    print_debug('ID not word/number');
    throw $$SyntaxError;
  }
  var name = parse_words('');
  consume_end_tag(/* ID */ 8);
  return name;
}

function parse_scientific_name(param) {
  var match = Curry._1(peek.contents, undefined);
  if (typeof match === 'number') {
    print_debug('Scientific name not word/number');
    throw $$SyntaxError;
  }
  var name = parse_words('');
  consume_end_tag(/* SciName */ 7);
  return name;
}

function parse_taxonomy(_taxonomy) {
  while (true) {
    var taxonomy = _taxonomy;
    var match = Curry._1(peek.contents, undefined);
    if (typeof match === 'number') {
      if (match !== 9) {
        if (match !== 10) {
          print_debug('Unexpected token encountered when parsing taxonomy');
          throw $$SyntaxError;
        }
        consume_end_tag(/* Taxonomy */ 6);
        return taxonomy;
      }
      var tag = parse_start_tag(undefined);
      var x = tag.tag_name;
      if (typeof x === 'number') {
        if (x !== 7) {
          if (x !== 8) {
            ignore_tag(x);
            continue;
          }
          _taxonomy = {
            id: parse_id(undefined),
            scientific_name: taxonomy.scientific_name,
          };
          continue;
        }
        _taxonomy = {
          id: taxonomy.id,
          scientific_name: parse_scientific_name(undefined),
        };
        continue;
      }
      ignore_tag(x);
      continue;
    }
    print_debug('Unexpected token encountered when parsing taxonomy');
    throw $$SyntaxError;
  }
}

function parse_clade(acc, attr) {
  var match = Curry._1(peek.contents, undefined);
  if (typeof match === 'number') {
    if (match !== 9) {
      if (match !== 10) {
        print_debug('parse_clade match failure');
        throw $$SyntaxError;
      }
      consume_end_tag(/* Clade */ 3);
      if (Tree$PhyloLibWeb.is_empty(acc)) {
        var taxon = attr.taxonomy;
        if (taxon !== undefined) {
          return Tree$PhyloLibWeb.leaf(
            taxon.scientific_name,
            taxon.id,
            attr.name,
          );
        }
        var n = attr.name;
        if (n !== undefined) {
          return Tree$PhyloLibWeb.leaf(n, undefined, n);
        } else {
          print_debug('Warning: no name provided');
          return Tree$PhyloLibWeb.leaf_no_params('Unnamed');
        }
      } else {
        if (acc.tag) {
          return acc;
        }
        var taxon$1 = attr.taxonomy;
        var id = taxon$1 !== undefined ? taxon$1.id : undefined;
        return /* Clade */ Block.__(0, [
          /* clade_id */ acc[/* clade_id */ 0],
          /* children */ acc[/* children */ 1],
          /* bootstrap */ attr.confidence,
          /* rank */ attr.rank,
          /* id */ id,
          /* name */ attr.name,
        ]);
      }
    }
    var tag = parse_start_tag(undefined);
    var x = tag.tag_name;
    if (typeof x === 'number') {
      switch (x) {
        case /* Name */ 1:
          return parse_clade(acc, {
            name: parse_name(undefined),
            rank: attr.rank,
            confidence: attr.confidence,
            taxonomy: attr.taxonomy,
          });
        case /* Clade */ 3:
          if (Tree$PhyloLibWeb.is_empty(acc)) {
            return parse_clade(parse_clade(acc, empty_clade_attr), attr);
          }
          var clade = parse_clade(Tree$PhyloLibWeb.empty, empty_clade_attr);
          return parse_clade(
            Tree$PhyloLibWeb.zip_no_params(
              /* :: */ [acc, /* :: */ [clade, /* [] */ 0]],
            ),
            attr,
          );
        case /* Confidence */ 5:
          return parse_clade(acc, {
            name: attr.name,
            rank: attr.rank,
            confidence: parse_confidence(undefined),
            taxonomy: attr.taxonomy,
          });
        case /* Taxonomy */ 6:
          return parse_clade(acc, {
            name: attr.name,
            rank: attr.rank,
            confidence: attr.confidence,
            taxonomy: parse_taxonomy({
              id: undefined,
              scientific_name: 'Unnamed',
            }),
          });
        case /* Phylogeny */ 0:
        case /* Description */ 2:
        case /* Rank */ 4:
        case /* SciName */ 7:
        case /* ID */ 8:
        case /* LAngle */ 9:
        case /* LAngleSlash */ 10:
        case /* RAngle */ 11:
        case /* Quote */ 12:
        case /* Eq */ 13:
        case /* Dot */ 14:
        case /* True */ 15:
        case /* False */ 16:
        case /* EOF */ 17:
        case /* Unit */ 18:
          break;
      }
    }
    ignore_tag(x);
    return parse_clade(acc, attr);
  }
  print_debug('parse_clade match failure');
  throw $$SyntaxError;
}

function parse_phylogeny(_acc) {
  while (true) {
    var acc = _acc;
    var match = Curry._1(peek.contents, undefined);
    if (typeof match === 'number') {
      if (match !== 9) {
        if (match !== 10) {
          print_debug('parse_phylogeny match failure');
          throw $$SyntaxError;
        }
        consume_end_tag(/* Phylogeny */ 0);
        return acc;
      }
      var tag = parse_start_tag(undefined);
      var x = tag.tag_name;
      if (typeof x === 'number') {
        if (x >= 4) {
          ignore_tag(x);
          continue;
        }
        switch (x) {
          case /* Phylogeny */ 0:
            ignore_tag(x);
            continue;
          case /* Name */ 1:
            _acc = {
              name: parse_name(undefined),
              description: acc.description,
              tree: acc.tree,
            };
            continue;
          case /* Description */ 2:
            _acc = {
              name: acc.name,
              description: parse_description(undefined),
              tree: acc.tree,
            };
            continue;
          case /* Clade */ 3:
            _acc = {
              name: acc.name,
              description: acc.description,
              tree: parse_clade(acc.tree, empty_clade_attr),
            };
            continue;
        }
      } else {
        ignore_tag(x);
        continue;
      }
    } else {
      print_debug('parse_phylogeny match failure');
      throw $$SyntaxError;
    }
  }
}

function from_phylo(f) {
  var f$1 = Lexer$PhyloLibWeb.stream_of_file(f);
  var tokenizer = Lexer$PhyloLibWeb.token_function_builder(f$1);
  peek.contents = Curry._1(tokenizer, true);
  consume_token.contents = Curry._1(tokenizer, false);
  var match = Curry._1(peek.contents, undefined);
  if (typeof match === 'number') {
    if (match === 9) {
      var tag = parse_start_tag(undefined);
      var s = tag.tag_name;
      if (typeof s === 'number') {
        print_debug('parse_phylo_tag error 2');
        throw $$SyntaxError;
      }
      if (s.tag === /* Word */ 1) {
        if (s[0] === 'phyloxml') {
          var tag$1 = parse_start_tag(undefined);
          var match$1 = tag$1.tag_name;
          if (typeof match$1 === 'number') {
            if (match$1 !== 0) {
              print_debug('parse_phylo_tag error 1');
              throw $$SyntaxError;
            }
            var phylo = parse_phylogeny(empty_phylo);
            consume_end_tag(/* Word */ Block.__(1, ['phyloxml']));
            return phylo;
          }
          print_debug('parse_phylo_tag error 1');
          throw $$SyntaxError;
        }
        print_debug('parse_phylo_tag error 2');
        throw $$SyntaxError;
      }
      print_debug('parse_phylo_tag error 2');
      throw $$SyntaxError;
    }
    if (match === 17) {
      return empty_phylo;
    }
    print_debug('from_phylo_helper error');
    throw $$SyntaxError;
  }
  print_debug('from_phylo_helper error');
  throw $$SyntaxError;
}

export { $$SyntaxError, from_phylo };
/* Tree-PhyloLibWeb Not a pure module */
