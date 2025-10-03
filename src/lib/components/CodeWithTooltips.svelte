<script lang="ts">
    import { onMount } from 'svelte';
    import hljs from 'highlight.js/lib/core';
    import python from 'highlight.js/lib/languages/python';
    import 'highlight.js/styles/atom-one-dark.css';

    export let language: string = 'python';
    export let code: string = '';
    export let tooltips: Array<{ line: number; text: string }> = [];

    let codeElement: HTMLElement;
    let activeTooltip: number | null = null;

    hljs.registerLanguage('python', python);

    onMount(() => {
        if (codeElement) {
            hljs.highlightElement(codeElement);
        }
    });

    function showTooltip(lineNum: number) {
        activeTooltip = lineNum;
    }

    function hideTooltip() {
        activeTooltip = null;
    }
</script>

<div class="code-with-tooltips">
    <div class="hover-hint">💡 Hover over highlighted sections to learn more</div>
    <div class="code-container">
        <pre><code bind:this={codeElement} class="language-{language}">{code}</code></pre>

        {#each tooltips as tooltip}
            <div
                class="tooltip-trigger"
                style="top: {(tooltip.line - 1) * 1.6}rem"
                on:mouseenter={() => showTooltip(tooltip.line)}
                on:mouseleave={hideTooltip}
                role="button"
                tabindex="0"
            >
                <span class="indicator">ℹ️</span>
                {#if activeTooltip === tooltip.line}
                    <div class="tooltip-content">
                        {tooltip.text}
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    .code-with-tooltips {
        position: relative;
        margin: 2rem 0;
    }

    .hover-hint {
        background: linear-gradient(135deg, #FFD700 0%, #FFC700 100%);
        color: #1a1a1a;
        padding: 0.8rem 1.5rem;
        border-radius: 12px 12px 0 0;
        text-align: center;
        font-weight: 600;
        font-size: 0.95rem;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
    }

    .code-container {
        position: relative;
        background: #0a0a0a;
        border-radius: 0 0 16px 16px;
        overflow: visible;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    }

    pre {
        margin: 0;
        padding: 2rem 3rem 2rem 2rem;
        overflow-x: auto;
        border: 1px solid rgba(255, 215, 0, 0.2);
        border-top: none;
        border-radius: 0 0 16px 16px;
    }

    code {
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .tooltip-trigger {
        position: absolute;
        right: 0.5rem;
        width: 2rem;
        height: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
    }

    .indicator {
        font-size: 1.2rem;
        filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.6));
        transition: transform 0.2s ease;
    }

    .tooltip-trigger:hover .indicator {
        transform: scale(1.2);
    }

    .tooltip-content {
        position: absolute;
        right: 3rem;
        top: -0.5rem;
        background: linear-gradient(135deg, #FFD700 0%, #FFC700 100%);
        color: #1a1a1a;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        min-width: 300px;
        max-width: 400px;
        font-size: 0.95rem;
        line-height: 1.5;
        box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4);
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
        z-index: 20;
    }

    .tooltip-content::after {
        content: '';
        position: absolute;
        right: -8px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid #FFD700;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media (max-width: 768px) {
        .tooltip-content {
            min-width: 200px;
            max-width: 250px;
            font-size: 0.85rem;
            padding: 0.8rem 1rem;
        }

        pre {
            padding: 1.5rem 2.5rem 1.5rem 1.5rem;
        }
    }
</style>
