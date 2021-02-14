import { animateChild, query, stagger, transition, trigger, useAnimation, animation, style, animate } from '@angular/animations';

const metadata = animation([
  animate('{{duration}} {{delay}} cubic-bezier(0, 0, 0.2, 0.1)')], {
  params: {
    duration: '0ms',
    delay: '0ms',
  }
});

export const listSlideUp = trigger('slideUp', [
  transition(':enter', [
    useAnimation(metadata),
    query('@*',
      [
        stagger('50ms', [
          animateChild()
        ])
      ], { optional: true })
  ])
]);
