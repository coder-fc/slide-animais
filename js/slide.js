export default class Slide {
    constructor(slide, container) {
        this.slide = document.querySelector(slide)
        this.container = document.querySelector(container)
    }

    onStart(event) {
        event.preventDefault();
        this.container.addEventListener('mousemove', this.onMove);
    }

    onMove(event) {

    }

    onEnd(event) {
        this.container.removeEventListener('mousemove', this.onMove)
    }

    addEventsSlide() {
        this.container.addEventListener('mousedown', this.onStart);
        this.container.addEventListener('mouseup', this.onEnd);
    }

    bindEvent() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    init() {
        this.bindEvent();
        this.addEventsSlide();
        return this;
    }
}