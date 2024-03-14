import { gsap } from "./greensock/index.js";
import { SplitText } from "./greensock/SplitText.js";

export function animateSkills() {   
    gsap.registerPlugin(SplitText)  

    const split = new SplitText('.skills', { type: 'chars' })

    const typing_text = gsap.timeline()
      .from(split.chars, {
      duration: .1,
      autoAlpha: 0,
      stagger: {
        each: .1
      }
    });
}     