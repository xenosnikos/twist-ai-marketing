import { writable } from 'svelte/store';

export const currentSlide = writable(0);
export const totalSlides = writable(19);

export function nextSlide() {
    currentSlide.update(n => {
        let total = 0;
        totalSlides.subscribe(t => total = t)();
        return n < total - 1 ? n + 1 : n;
    });
}

export function previousSlide() {
    currentSlide.update(n => n > 0 ? n - 1 : n);
}

export function goToSlide(index: number) {
    currentSlide.set(index);
}
