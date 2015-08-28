# Cornify

Cornify spreads eternal joy and happiness across the web by adding rainbows and unicorns to any web page.

## Install

Cornify is available on both npm and bower as `cornified`.

To install via npm:

```
npm install cornified
```

To install via bower:

```
bower install cornified
```

## Usage

With node/browserify:

```js
var cornify = require('cornified');

// add a random unicorn or rainbow to the page
cornify.add();

// remove all cornify images from the page
cornify.clear();
```

With bower:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="bower_components/cornified/build.js"></script>
</head>
<body>
  
</body>
<script>
  cornify.add();
  cornify.pizzazz();
</script>
</html>
```


## API

##### `add`
> Appends a random cornify image to the page

```

cornify.add();
//=> <img class="cornify" src="https://raw.github.com/akenn/cornify/master/images/rainbow/2.gif" />
```

##### `count`
> Returns the number of cornify images on the page

```
cornify.count();
//=> 1
```

##### `clear`
> Remove all cornify images from the page

```
cornify.count();
//=> 117

cornify.clear();

cornify.count();
//=> 0
```

##### `pizzazz`
> Party time

```
cornify.count();
//=> 0

cornify.pizzazz();

cornify.count();
//=> 239
```

## Building

```
npm install
npm run build
```


## Acknowledgements

Inspired by [cornify.com](http://www.cornify.com)
