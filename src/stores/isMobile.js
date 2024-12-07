import { writable } from 'svelte/store';

export const isMobile = writable(false);

function updateIsMobile() {
  const width = window.innerWidth;
  isMobile.set(width < 768);
}


export const isSmallScreen = writable(false);

function updateIsSmallScreen() {
  const width = window.innerWidth;
  isSmallScreen.set(width < 1080);
}


if (typeof window !== 'undefined') { //ensure this only runs in the browser
  window.addEventListener('resize', updateIsMobile);
  window.addEventListener('resize', updateIsSmallScreen);
  updateIsMobile();
  updateIsSmallScreen();
}