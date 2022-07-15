export default class Slide {
    constructor(slide, container) {
        this.slide = document.querySelector(slide);
        this.container = document.querySelector(container);
        this.dist = {
            finalPosition: 0, startX: 0, movement:0
        }
    }

    moveSlide(distX) {
        this.dist.movePosition = distX
        this.slide.style.transform = `translate3d(${distX}px, 0, 0)`
    }

    uptadePosition(clientX) {
        this.dist.movement = (this.dist.startX - clientX * 1.4);
        return this.dist.finalPosition - this.dist.movement;
    }

    onStart(event) {
        let moveType;

        if (event.type === 'mousedown') {
            event.preventDefault();
            this.dist.startX = event.clientX;
            moveType = 'mousemove';
        } else {
            this.dist.startX = event.changedTouches[0].clientX;
            moveType = 'touchmove'
        }
        this.container.addEventListener(moveType, this.onMove);
    }

    onMove(event) {
        const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
        const finalPosition = this.uptadePosition(pointerPosition);
        this.moveSlide(finalPosition);
    }

    onEnd(event) {
        const moveType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
        this.container.removeEventListener(moveType, this.onMove)
        this.dist.finalPosition = this.dist.movePosition;
    }

    addEventsSlide() {
        this.container.addEventListener('mousedown', this.onStart);
        this.container.addEventListener('touchstart', this.onStart);
        this.container.addEventListener('mouseup', this.onEnd);
        this.container.addEventListener('touchend', this.onEnd);
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