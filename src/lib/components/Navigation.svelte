<script lang="ts">
    import { currentSlide, totalSlides, nextSlide, previousSlide, goToSlide } from '$lib/stores/presentation';

    let current = 0;
    let total = 20;

    currentSlide.subscribe(value => current = value);
    totalSlides.subscribe(value => total = value);
</script>

<!-- Slide Counter -->
<div class="slide-counter">
    <span>{current + 1}</span> / <span>{total}</span>
</div>

<!-- Arrow Navigation -->
<button class="arrow-nav arrow-left" on:click={previousSlide} aria-label="Previous slide">
    ‹
</button>
<button class="arrow-nav arrow-right" on:click={nextSlide} aria-label="Next slide">
    ›
</button>

<!-- Navigation Dots -->
<div class="navigation">
    {#each Array(total) as _, i}
        <button
            class="nav-dot"
            class:active={i === current}
            on:click={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
        ></button>
    {/each}
</div>

<style>
    .slide-counter {
        position: fixed;
        top: 30px;
        right: 30px;
        background: #FFD700;
        color: #1a1a1a;
        padding: 12px 24px;
        border-radius: 12px;
        font-weight: 700;
        z-index: 1000;
        font-size: 1rem;
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
    }

    .arrow-nav {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        background: #FFD700;
        color: #1a1a1a;
        border: none;
        width: 56px;
        height: 56px;
        border-radius: 12px;
        cursor: pointer;
        font-size: 1.8rem;
        z-index: 1000;
        transition: all 0.2s ease;
        font-weight: 700;
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
    }

    .arrow-nav:hover {
        background: #FFC700;
        transform: translateY(-50%) scale(1.05);
        box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5);
    }

    .arrow-left {
        left: 30px;
    }

    .arrow-right {
        right: 30px;
    }

    .navigation {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        z-index: 1000;
    }

    .nav-dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
    }

    .nav-dot.active {
        background: #FFD700;
        transform: scale(1.4);
        box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
    }

    @media (max-width: 768px) {
        .arrow-nav {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
        }

        .arrow-left {
            left: 15px;
        }

        .arrow-right {
            right: 15px;
        }

        .slide-counter {
            top: 15px;
            right: 15px;
            padding: 8px 16px;
            font-size: 0.8rem;
        }
    }
</style>
