
# Regex

  A trie.

## Installation

  Install with [component(1)](http://component.io):

    $ component install tm-components/trie

## Example

```
var trie = new Trie();
trie.add("thomas", "tie", "toggle");
trie.find("th"); // ["thomas"]
```

## API

### add(value)

Add a `string` or `Array` to the mappings.

### find(needle)

Finds a strings matching the needle as a prefix.