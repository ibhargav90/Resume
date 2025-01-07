import { fade, slide } from 'astro:transitions';

export const myFadeTransition = fade({
  duration: '300ms',
});

export const mySlideTransition = slide({
  duration: '500ms',
});

export const myCustomTransition = {
  forwards: {
    old: { name: 'fadeOut', duration: '0.3s', easing: 'ease-out' },
    new: { name: 'fadeIn', duration: '0.3s', easing: 'ease-in' },
  },
  backwards: {
    old: { name: 'fadeOut', duration: '0.3s', easing: 'ease-out' },
    new: { name: 'fadeIn', duration: '0.3s', easing: 'ease-in' },
  },
};
