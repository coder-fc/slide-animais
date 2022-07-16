import Slide from "./slide.js";

const slide = new Slide('.slide', '.container');
slide.init();

slide.changeSlide(1);

console.log(slide); 

