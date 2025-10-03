<script lang="ts">
    export let number: string;
    export let label: string;
    export let sublabel: string = '';
</script>

<div class="stat-card">
    <span class="stat-number">{number}</span>
    <p class="stat-label">{label}</p>
    {#if sublabel}
        <p class="stat-sublabel">{sublabel}</p>
    {/if}
</div>

<style>
    .stat-card {
        background: linear-gradient(135deg, #FFE66D 0%, #FFD93D 100%);
        padding: 2.5rem;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: none;
    }

    .stat-card:hover {
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5);
    }

    .stat-number {
        font-size: 3.5rem;
        font-weight: 800;
        color: #1a1a1a;
        display: block;
        margin-bottom: 0.5rem;
        letter-spacing: -0.03em;
    }

    .stat-label {
        font-size: 1.2rem;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0;
    }

    .stat-sublabel {
        font-size: 1rem;
        color: #333;
        margin-top: 0.5rem;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .stat-number {
            font-size: 2.5rem;
        }
    }
</style>
