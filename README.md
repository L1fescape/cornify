# Cornify

Cornify spreads eternal joy and happiness across the web by adding rainbows and unicorns to any web page.

## Install

```
npm install cornified
```

## Build

```
npm install
npm run build
```

## Functions

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

## Acknowledgements

Inspired by [cornify.com](http://www.cornify.com)
