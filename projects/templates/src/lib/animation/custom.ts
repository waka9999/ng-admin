import {
  animation,
  useAnimation,
  animate,
  style,
  transition,
  trigger,
  animateChild,
  query,
} from '@angular/animations';

const metadata = animation(
  [
    style({
      opacity: '{{opacity}}',
      transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})',
    }),
    animate('{{duration}} {{delay}} cubic-bezier(0, 0, 0.2, 0.1)', style('*')),
  ],
  {
    params: {
      duration: '280ms',
      delay: '0ms',
      opacity: '0',
      scale: '1',
      x: '0',
      y: '0',
      z: '0',
    },
  }
);

export const customAnimation = trigger('custom', [
  transition('void => *', [
    useAnimation(metadata),
    query('@*', animateChild(), { optional: true }),
  ]),
]);
