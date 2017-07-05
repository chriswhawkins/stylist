import PhotoSwipe from 'photoswipe';
import PhotoSwipeUiDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import './gallery.css';

const GalleryDom = require('./gallery.html');


function component() {
  const element = document.createElement('div');
  element.innerHTML = `${GalleryDom}`;
  return element;
}

const openPhotoSwipe = () => {
  const pswpElement = document.querySelectorAll('.pswp')[0];

  const items = [
    {
      src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
      w: 964,
      h: 1024,
    }, {
      src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
      w: 1024,
      h: 683,
    },
  ];

  // define options (if needed)
  const options = {
    focus: false,
    history: false,
    showAnimationDuration: 0,
    hideAnimationDuration: 0,

  };

  const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUiDefault, items, options);
  gallery.init();
};

document.body.appendChild(component());

document.getElementById('btn').onclick = openPhotoSwipe;
