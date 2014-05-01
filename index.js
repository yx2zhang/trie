
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

  return this.build(node, needle, true);
};

Trie.prototype.build = function ( node, prefix, omit ) {
  prefix = prefix || "";
  var arr = [];
  var words;

  for ( n in node ) {
    words = this.build(node[n], prefix + n);
    if ( words.length > 0 ) {
      arr = arr.concat(words);
    }
  }

  if ( !omit && arr.length == 0 ) {
    arr.push(prefix);
  }

  return arr;
};

module.exports = Trie;