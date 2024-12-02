import { writable } from 'svelte/store';

//create a writable store
export const isMobile = writable(false);

//function to update the store based on screen width
function updateIsMobile() {
  console.log('resize');
  const width = window.innerWidth;
  isMobile.set(width < 768); // mobile if width is less than 768px
}

//listen to resize events and update the store
if (typeof window !== 'undefined') { //ensure this only runs in the browser
  window.addEventListener('resize', updateIsMobile);
  updateIsMobile(); //set the initial value
}