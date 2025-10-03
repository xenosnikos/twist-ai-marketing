<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { currentSlide } from '$lib/stores/presentation';

    export let slideIndex: number;
    export let isActive: boolean = false;
</script>

<div
    class="slide"
    class:active={isActive}
    in:fly={{ y: 50, duration: 600 }}
    out:fade={{ duration: 300 }}
>
    <div class="slide-content">
        <slot />
    </div>
</div>

<style>
    .slide {
        min-height: 100vh;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 4rem 2rem;
        transition: all 0.6s ease-in-out;
        position: relative;
        background: #1a1a1a;
    }

    .slide.active {
        display: flex;
        opacity: 1;
        transform: translateY(0);
    }

    .slide-content {
        max-width: 1200px;
        width: 100%;
        text-align: center;
        color: #ffffff;
    }

    @media (max-width: 768px) {
        .slide {
            padding: 2rem 1rem;
        }
    }
</style>
