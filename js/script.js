import { SlideNav }  from "./slide.js";

const slide = new SlideNav('.slide', '.container');
slide.init();
slide.addArrow('.prev', '.next');
slide.controlAdd();



