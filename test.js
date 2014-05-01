
var expect = require('expect.js')
var Trie = require('./');

describe('trie', function(){
  it('works', function(){
    var trie = new Trie();

    ["apple", "app", "apps", "appie"].forEach(function(word){
      trie.add(word);
    });

    expect(trie.find("app")).to.eql(["apple","app","apps","appie"]);
  });
});
