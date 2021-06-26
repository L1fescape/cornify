import template from 'lodash-es/template';
import sample from 'lodash-es/sample';
import random from 'lodash-es/random';
import each from 'lodash-es/each';
import times from 'lodash-es/times';

var className = 'cornify';
var imageUrlTemplate = template('https://raw.github.com/akenn/cornify/master/images/<%= type %>/<%= id %>.gif');
var types = [{
  name: 'unicorn',
  count: 7
}, {
  name: 'rainbow',
  count: 4
}];

function getRandomImageSrc() {
  var randomType = sample(types);

  return imageUrlTemplate({
    type: randomType.name,
    id: random(1, randomType.count)
  });
}

function createRandomImage() {
  var img = document.createElement('img');

  img.src = getRandomImageSrc();
  img.className = className;
  img.style.top = random(100) + '%';
  img.style.left = random(100) + '%';
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
}

function add() {
  return document.body.appendChild(createRandomImage());
}

export default {
  add: add,

  count: function() {
    return document.querySelectorAll('.' + className).length;
  },

  clear: function() {
    each(document.querySelectorAll('.' + className), function(node) {
      node.parentNode.removeChild(node);
    });
  },

  pizzazz: function() {
    times(random(10, 500), add);
  }
};
