import objectAssign from 'object-assign';
import anime from 'animejs/lib/anime.min.js';

// from http://www.quirksmode.org/js/events_properties.html#position
const getMousePos = ev => {
  let posx = 0;
  let posy = 0;
  if (!ev) ev = window.event;

  if (ev.pageX || ev.pageY) {
    posx = ev.pageX;
    posy = ev.pageY;
  } else if (ev.clientX || ev.clientY) {
    posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return { x : posx, y : posy };
};

class CursorFx {
  constructor(el, options) {
    this.DOM = { el };

    this.options = objectAssign({
      showCircle: true,
      showDot: true,
      dataAttribute: 'data-hover',
      opacity: 1,
      borderColor: 'rgb(255, 255, 255)',
      fixedOnHover: false,
      sizeOnHover: 75,
      opacityOnHover: 0.45,
      borderWidthOnHover: 2,
      borderColorOnHover: 'rgb(255, 0, 0)',
    }, options);

    const { showCircle, showDot } = this.options;

    this.createElements(showCircle, showDot);
    this.bounds = this.getBounds(showCircle, showDot);

    this.isHover = false;
    this.opacity = this.options.opacity;
    this.mousePos = {x:0, y:0};
    
    this.initEvents();
    this.initHover();
    requestAnimationFrame(() => this.render());
  }

  createElements(addCircle, addDot) {
    const circle = document.createElement('div');
    circle.classList.add('cursor__inner');
    circle.classList.add('cursor__inner--circle');

    const dot = document.createElement('div');
    dot.classList.add('cursor__inner');
    dot.classList.add('cursor__inner--dot');

    if (addCircle) {
      this.DOM.el.appendChild(circle);
      this.DOM.circle = circle;
    }

    if (addDot) {
      this.DOM.el.appendChild(dot);
      this.DOM.dot = dot;
    }
  }

  getBounds(addCircle, addDot) {
    const bounds = {};

    if (addCircle) bounds.circle = this.DOM.circle.getBoundingClientRect();
    if (addDot) bounds.dot = this.DOM.dot.getBoundingClientRect();

    return bounds;
  }

  initEvents() {
    window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
  }

  initHover() {
    [...document.querySelectorAll(`[${this.options.dataAttribute}]`)].forEach((link) => {
      link.addEventListener('mouseenter', (e) => this.enter(e));
      link.addEventListener('mouseleave', (e) => this.leave(e));
      link.addEventListener('click', (e) => this.click(e));
    });
  }

  _renderDot() {
    anime({
      targets: this.DOM.dot,
      translateX: this.mousePos.x - this.bounds.dot.width/2,
      translateY: this.mousePos.y - this.bounds.dot.height/2,
      duration: 70,
    });
  }

  _renderCircle() {
    const { fixedOnHover, borderColor, opacity } = this.options;

    if (!this.isHover) {
      anime({
        targets: this.DOM.circle,
        easing: 'easeOutQuart',
        duration: 120,
        translateX: this.mousePos.x - this.bounds.circle.width/2,
        translateY: this.mousePos.y - this.bounds.circle.height/2,
        opacity: opacity,
        borderColor: borderColor,
      });
    } else {
      if (fixedOnHover) return;

      const {
        sizeOnHover, opacityOnHover,
        borderWidthOnHover, borderColorOnHover,
      } = this.options;
  
      anime({
        targets: this.DOM.circle,
        easing: 'easeOutQuart',
        duration: 120,
        translateX: this.mousePos.x - sizeOnHover/2,
        translateY: this.mousePos.y - sizeOnHover/2,
        width: sizeOnHover,
        height: sizeOnHover,
        opacity: opacityOnHover,
        borderColor: borderColorOnHover,
        borderWidth: borderWidthOnHover,
      });
    }
  }

  render() {
    const { showCircle, showDot } = this.options;
    if (showDot) this._renderDot();
    if (showCircle) this._renderCircle();
    requestAnimationFrame(() => this.render());
  }

  enter(e) {
    const {
      fixedOnHover,
      sizeOnHover, opacityOnHover,
      borderWidthOnHover, borderColorOnHover,
    } = this.options;
    const target = e.currentTarget;
    const box = target.getBoundingClientRect();

    if (fixedOnHover) {
      anime({
        targets: this.DOM.circle,
        easing: 'easeOutQuart',
        duration: 400,
        translateX: box.left + box.width / 2 - (sizeOnHover / 2) + window.scrollX,
        translateY: box.top + box.height / 2 - (sizeOnHover / 2) + window.scrollY,
        width: sizeOnHover,
        height: sizeOnHover,
        opacity: opacityOnHover,
        borderColor: borderColorOnHover,
        borderWidth: borderWidthOnHover,
      });
    }

    this.isHover = true;
  }

  leave() {
    const { borderColor, opacity } = this.options;

    anime({
      targets: this.DOM.circle,
      easing: 'easeOutQuart',
      duration: 400,
      width: this.bounds.circle.width,
      height: this.bounds.circle.height,
      opacity: opacity,
      borderColor: borderColor,
      borderWidth: 1,
    });

    this.isHover = false;
  }

  click() {}
}

export default CursorFx;
