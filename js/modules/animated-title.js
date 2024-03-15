import { gsap } from "./greensock/index.js";

export function animateTitle() {  
    gsap.from(".title", {
      duration: 1, 
      y: -100, 
      opacity: 0, 
      ease: "bounce.out" 
    });
}     