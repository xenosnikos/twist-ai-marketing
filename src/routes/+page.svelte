<script lang="ts">
    import { onMount } from 'svelte';
    import { currentSlide, nextSlide, previousSlide, goToSlide } from '$lib/stores/presentation';
    import { slides } from '$lib/data/slides';
    import Slide from '$lib/components/Slide.svelte';
    import Navigation from '$lib/components/Navigation.svelte';
    import Card from '$lib/components/Card.svelte';
    import StatCard from '$lib/components/StatCard.svelte';
    import CodeBlock from '$lib/components/CodeBlock.svelte';
    import CodeWithTooltips from '$lib/components/CodeWithTooltips.svelte';
    import DiagramWrapper from '$lib/components/DiagramWrapper.svelte';
    import TableView from '$lib/components/TableView.svelte';
    import '$lib/styles/global.css';

    let current = 0;
    currentSlide.subscribe(value => current = value);

    // Keyboard navigation
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'ArrowRight' || event.key === ' ') {
            event.preventDefault();
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            previousSlide();
        }
    }

    // Touch/swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(event: TouchEvent) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event: TouchEvent) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                previousSlide();
            }
        }
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeydown);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    });
</script>

<svelte:head>
    <title>AI-Powered Marketing Automation Revolution</title>
</svelte:head>

<div class="presentation-container">
    <Navigation />

    {#each slides as slide, i}
        <Slide slideIndex={i} isActive={i === current}>
            {#if slide.type === 'title'}
                {#if slide.logo}
                    <div class="logo-container">
                        <img src={slide.logo} alt="Dofinity Logo" class="title-logo" />
                    </div>
                {/if}
                <h1>{slide.title}</h1>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.items}
                    <ul style="max-width: 600px; margin: 2rem auto; text-align: left;">
                        {#each slide.items as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                {/if}

            {:else if slide.type === 'content'}
                <h2>{slide.title}</h2>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.cards}
                    <div class="cards-grid">
                        {#each slide.cards as card}
                            <Card title={card.title} items={card.items || []}>
                                {#if card.content}
                                    <p>{card.content}</p>
                                {/if}
                            </Card>
                        {/each}
                    </div>
                {/if}
                {#if slide.content}
                    <p style="font-size: 1.2rem; margin-top: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">{slide.content}</p>
                {/if}
                {#if slide.items}
                    <ul style="max-width: 800px; margin: 2rem auto; text-align: left;">
                        {#each slide.items as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                {/if}
                {#if slide.quote}
                    <div class="quote">
                        {slide.quote.text}
                        <br><br>
                        <strong>— {slide.quote.author}</strong>
                    </div>
                {/if}

            {:else if slide.type === 'diagram'}
                <h2>{slide.title}</h2>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.diagram}
                    <DiagramWrapper diagram={slide.diagram.content || slide.diagram} />
                {/if}

            {:else if slide.type === 'code'}
                <h2>{slide.title}</h2>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.code}
                    <CodeBlock language={slide.code.language} code={slide.code.content} />
                {/if}
                {#if slide.items}
                    <div style="background: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">
                        <ul style="text-align: left;">
                            {#each slide.items as item}
                                <li>{item}</li>
                            {/each}
                        </ul>
                    </div>
                {/if}

            {:else if slide.type === 'code-tooltip'}
                <h2>{slide.title}</h2>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.code}
                    <CodeWithTooltips
                        language={slide.code.language}
                        code={slide.code.content}
                        tooltips={slide.tooltips || []}
                    />
                {/if}

            {:else if slide.type === 'table'}
                <h2>{slide.title}</h2>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.table}
                    <TableView headers={slide.table.headers} rows={slide.table.rows} />
                {/if}
                {#if slide.stats}
                    <div class="stats-grid">
                        {#each slide.stats as stat}
                            <StatCard number={stat.number} label={stat.label} sublabel={stat.sublabel} />
                        {/each}
                    </div>
                {/if}
                {#if slide.content}
                    <p style="font-size: 1.2rem; margin-top: 2rem;">{slide.content}</p>
                {/if}
                {#if slide.items}
                    <ul style="max-width: 800px; margin: 2rem auto; text-align: left;">
                        {#each slide.items as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                {/if}

            {:else if slide.type === 'stats'}
                <h2>{slide.title}</h2>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.stats}
                    <div class="stats-grid">
                        {#each slide.stats as stat}
                            <StatCard number={stat.number} label={stat.label} sublabel={stat.sublabel} />
                        {/each}
                    </div>
                {/if}
                {#if slide.items}
                    <ul style="max-width: 800px; margin: 2rem auto; text-align: left;">
                        {#each slide.items as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                {/if}

            {:else if slide.type === 'timeline'}
                <h2>{slide.title}</h2>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.cards}
                    <div class="timeline-grid">
                        {#each slide.cards as card, index}
                            <Card title={card.title} items={card.items || []} />
                        {/each}
                    </div>
                {/if}

            {:else if slide.type === 'cta'}
                <h2>{slide.title}</h2>
                {#if slide.subtitle}
                    <p class="subtitle">{slide.subtitle}</p>
                {/if}
                {#if slide.cards}
                    <div class="cards-grid">
                        {#each slide.cards as card}
                            <Card title={card.title} items={card.items || []} />
                        {/each}
                    </div>
                {/if}
                {#if slide.content}
                    <p style="font-size: 1.1rem; margin-top: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">{slide.content}</p>
                {/if}
            {/if}
        </Slide>
    {/each}
</div>

<style>
    .presentation-container {
        min-height: 100vh;
        background: #1a1a1a;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }

    .timeline-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }

    .logo-container {
        margin-bottom: 2rem;
    }

    .title-logo {
        max-width: 100%;
        height: auto;
        max-height: 150px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        .cards-grid,
        .timeline-grid,
        .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .title-logo {
            max-height: 100px;
        }
    }
</style>
