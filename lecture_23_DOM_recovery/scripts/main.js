class Slider {

  #rootNode;

  constructor(rootNodeSelector, images) {
    const rootNode = document.querySelector(rootNodeSelector);
    if (!rootNode) {
      throw new Error('Incorrect root node!');
    }
    this.#rootNode = rootNode;
    this.images = images;
  }
  #init() {
    const sliderContainerEl = document.createElement('div');
    sliderContainerEl.classList.add('sliderContainer');

    const slidesContainerEl = document.createElement('div');
    slidesContainerEl.classList.add('slidesContainer');

    const imagesContainerEl = document.createElement('div');
    imagesContainerEl.classList.add('imagesContainer');
    this.#imagesContainer = imagesContainerEl;

    // создать div.dotsContainer
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dotsContainer');
// создать div.navigationContainer
    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');
    const arrowLeft = document.createElement('div');
    arrowLeft.classList.add('arrow', 'arrowLeft');
    arrowLeft.textContent = 'Prev';
    const arrowRight = document.createElement('div');
    arrowRight.classList.add('arrow', 'arrowRight');
    arrowRight.textContent = 'Next';
    navContainer.append(arrowLeft, arrowRight);

    arrowRight.addEventListener('click', this.navigateNext.bind(this));
this.images.forEach( (img, idx) => {
      const imgEl = document.createElement('img');
      imgEl.src = img;
      imgEl.classList.add('slide');
      imagesContainerEl.append(imgEl);
      // создать элементы для точек: div.dot, и добавить в dotsContainer
      const dotEl = document.createElement('div');
      dotEl.classList.add('dot');
      dotEl.dataset.ordernum = idx;
      dotsContainer.append(dotEl);
    });

    slidesContainerEl.append(imagesContainerEl);
    sliderContainerEl.append(navContainer, slidesContainerEl, dotsContainer);

    this.#rootNode.append(sliderContainerEl);

    // Shift formula: -1 * currentSlideNum * 100 + '%'
  navigateNext() {
    let targetSlide = this.#currentSlideNum + 1;
    if (targetSlide === this.images.length) {
      targetSlide = 0;
    }
    this.#currentSlideNum = targetSlide;
    const shiftValue =  -100 * this.#currentSlideNum;
    this.#currentShift = shiftValue;
    this.#imagesContainer.style.left = shiftValue + '%';
  }
  }
  
}


const sliderEl = new slider ('slider', ['https://avatars.mds.yandex.net/i?id=38626a0a842450fb09a1de88d86f2bfc_l-5334983-images-thumbs&n=13',
   'https://s1.1zoom.ru/b5050/382/Owls_Birds_5_595457_2048x1152.jpg',
    'https://static29.tgcnt.ru/posts/_0/b2/b2795c298fdb20455ea34d9de7295e28.jpg'])