
# Regex

  A trie.

## Installation

  Install with [component(1)](http://component.io):

    $ component install tm-components/trie

## Example

```
var trie = new Trie();
var list = ["thomas", "tie", "toggle"];
trie.add(list);
trie.add("thorn");
trie.find("th"); // ["thomas", "thorn"];
```

## API

### add(value)

Add a `string` or `Array` to the mappings.

### find(needle)

Finds a strings matching the needle as a prefix.