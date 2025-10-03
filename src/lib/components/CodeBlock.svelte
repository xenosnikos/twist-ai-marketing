<script lang="ts">
    import { onMount } from 'svelte';
    import hljs from 'highlight.js/lib/core';
    import python from 'highlight.js/lib/languages/python';
    import yaml from 'highlight.js/lib/languages/yaml';
    import 'highlight.js/styles/atom-one-dark.css';

    export let language: string = 'python';
    export let code: string = '';

    let codeElement: HTMLElement;

    hljs.registerLanguage('python', python);
    hljs.registerLanguage('yaml', yaml);

    onMount(() => {
        if (codeElement) {
            hljs.highlightElement(codeElement);
        }
    });
</script>

<div class="code-container">
    <pre><code bind:this={codeElement} class="language-{language}">{code}</code></pre>
</div>

<style>
    .code-container {
        background: #282c34;
        border-radius: 12px;
        overflow: hidden;
        margin: 1rem 0;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }

    pre {
        margin: 0;
        padding: 1.5rem;
        overflow-x: auto;
    }

    code {
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        code {
            font-size: 0.8rem;
        }
    }
</style>
