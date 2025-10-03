<script lang="ts">
    export let title: string = '';
    export let items: string[] = [];
</script>

<div class="card">
    {#if title}
        <h3>{title}</h3>
    {/if}
    {#if items && items.length > 0}
        <ul>
            {#each items as item}
                <li>{item}</li>
            {/each}
        </ul>
    {/if}
    <slot />
</div>

<style>
    .card {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        border: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        text-align: left;
    }

    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #1a1a1a;
        font-weight: 600;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
        font-size: 1rem;
    }

    li::before {
        content: "•";
        position: absolute;
        left: 0;
        color: #1a1a1a;
        font-weight: bold;
        font-size: 1.1rem;
    }
</style>
