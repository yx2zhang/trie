
function Trie () {
  this.root = {};
}

Trie.prototype.add = function ( str ) {
  var node = this.root;
  while ( str.length ) {
    var c = str[0];
    str = str.substr(1, str.length)
    if ( !node[c] ) {
      node[c] = {};
    }
    node = node[c];
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
  var results = this.build(node, needle);
  if ( results.length == 1 && results[0] == needle ) {
    results.length = 0;
  }
  return results;
};

Trie.prototype.build = function ( node, prefix ) {
  prefix = prefix || "";
  var arr = [];
  var words;

  for ( n in node ) {
    words = this.build(node[n], prefix + n);
    if ( words.length > 0 ) {
      arr = arr.concat(words);
    }
  }

  if ( arr.length == 0 ) {
    arr.push(prefix);
  }

  return arr;
};

module.exports = Trie;