
var expect = require('expect.js')
var Trie = require('./');

describe('trie', function(){
  it('works', function(){
    var trie = new Trie();
    var list = ["apple", "app", "apps", "appie"];
    list.sort();
    trie.add(list);

    test = trie.find("app");
    test.sort();
    expect(test).to.eql(list);
  });
});
