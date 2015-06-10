var _ = require('lodash');

var imageUrlTemplate = _.template('https://raw.github.com/akenn/cornify/master/images/<%= type %>/<%= id %>.gif');
var types = [{
  name: 'unicorn',
  count: 7
}, {
  name: 'rainbow',
  count: 4
}];

var getImageSrc = function() {
  var randomImg = _.sample(types);

  return imageUrlTemplate({
    type: randomImg.name,
    id: _.random(randomImg.count)
  });
};

var getRandomImage = function() {
  var img = document.createElement('img');
  img.src = getImageSrc();
  img.className = 'cornify';
  img.style = {
    top: _.random(document.body.clientHeight),
    left: _.random(document.body.clientWidth),
    position: 'fixed',
    transition: 'all .1s linear'
  };
  // img.onmouseover = function() {
  //   var size = Math.random() + 0.5;
  //   var angle = Math.random() * 15 + 1 + 'deg';
  //   var transform = 'rotate(' + angle + ') scale(' + size + ',' + size + ')';

  //   this.style.transform = transform;
  //   this.style.WebkitTransform = transform;
  // };

  // img.onmouseout = function() {
  //   var transform = 'rotate(0deg) scale(1, 1)';
  //   this.style.transform = transform;
  //   this.style.WebkitTransform = transform;
  // };

  return img;
};

var add = function() {
  var img = getRandomImage();
  document.body.appendChild(img);
};

var clear = function() {
  document.querySelector('.cornify').remove();
};

module.exports = {
  add: add,
  clear: clear
};

var pizzazz = function() {
  _.times(_.random(0, 100), add);
};

window.cornify = {
  add: add,
  clear: clear,
  pizzazz: pizzazz
};
