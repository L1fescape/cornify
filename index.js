var _ = require('lodash');

var className = 'cornify';
var imageUrlTemplate = _.template('https://raw.github.com/akenn/cornify/master/images/<%= type %>/<%= id %>.gif');
var types = [{
  name: 'unicorn',
  count: 7
}, {
  name: 'rainbow',
  count: 4
}];

function getRandomImageSrc() {
  var randomType = _.sample(types);

  return imageUrlTemplate({
    type: randomType.name,
    id: _.random(1, randomType.count)
  });
};

function createRandomImage() {
  var img = document.createElement('img');

  img.src = getRandomImageSrc();
  img.className = className;
  img.style.top = _.random(100) + '%';
  img.style.left = _.random(100) + '%';
  img.style.position = 'fixed';
  img.style.transition = 'all .1s linear';

  img.onmouseover = function() {
    var size = Math.random() + 0.5;
    var angle = Math.random() * 15 + 1 + 'deg';
    var transform = 'rotate(' + angle + ') scale(' + size + ',' + size + ')';

    this.style.transform = transform;
    this.style.WebkitTransform = transform;
  };

  img.onmouseout = function() {
    var transform = 'rotate(0deg) scale(1, 1)';
    this.style.transform = transform;
    this.style.WebkitTransform = transform;
  };

  return img;
};

function add() {
  return document.body.appendChild(createRandomImage());
};

module.exports = {
  add: add,

  count: function() {
    return document.querySelectorAll('.' + className).length;
  },

  clear: function() {
    _.each(document.querySelectorAll('.' + className), function(node) {
      node.parentNode.removeChild(node);
    });
  },

  pizzazz: function() {
    _.times(_.random(10, 500), add);
  }
};
