
function Trie () {
  this.root = {};
}

Trie.prototype.add = function ( value ) {
  if ( typeof value == "string" ) {
    var str = value;
    var node = this.root;
    while ( str.length ) {
      var c = str[0];
      str = str.substr(1, str.length)
      if ( !node[c] ) {
        node[c] = {};
      }
      node = node[c];
    }
  }
  else if ( value instanceof Array ) {
    for ( i in value ) {
      this.add(value[i]);
    }
  }
};

Trie.prototype.find = function ( needle ) {
  var node = this.root;
  var str = needle;
  while ( str.length ) {
    var c = str[0];
    str = str.substr(1, str.length);
    node = node[c];
    if ( !node ) {
      break;
    }
  }

  return this.build(node, needle, true);
};

Trie.prototype.build = function ( node, prefix, isroot ) {
  prefix = prefix || "";
  var arr = [];
  var words;

  for ( n in node ) {
    words = this.build(node[n], prefix + n);
    if ( words.length > 0 ) {
      arr = arr.concat(words);
    }
  }

  if ( arr.length == 0 || isroot ) {
    arr.push(prefix);
  }

  return arr;
};

module.exports = Trie;