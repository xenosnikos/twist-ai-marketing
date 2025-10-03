<script lang="ts">
    import { onMount } from 'svelte';
    import mermaid from 'mermaid';

    export let diagram: string = '';

    let diagramContainer: HTMLDivElement;
    let rendered = false;

    onMount(async () => {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'Montserrat, sans-serif'
        });

        if (diagramContainer && diagram && !rendered) {
            try {
                const { svg } = await mermaid.render('mermaid-' + Math.random().toString(36).substr(2, 9), diagram);
                diagramContainer.innerHTML = svg;
                rendered = true;
            } catch (error) {
                console.error('Mermaid rendering error:', error);
                diagramContainer.innerHTML = '<p>Error rendering diagram</p>';
            }
        }
    });
</script>

<div class="diagram-wrapper">
    <div bind:this={diagramContainer} class="diagram-container"></div>
</div>

<style>
    .diagram-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        margin: 2rem 0;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        overflow-x: auto;
    }

    .diagram-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
    }

    .diagram-container :global(svg) {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        .diagram-wrapper {
            padding: 1rem;
        }
    }
</style>
