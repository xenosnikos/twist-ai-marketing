<script lang="ts">
    export let headers: string[] = [];
    export let rows: Array<{ [key: string]: string }> = [];
</script>

<div class="table-container">
    <table>
        <thead>
            <tr>
                {#each headers as header}
                    <th>{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each rows as row}
                <tr>
                    {#each Object.values(row) as cell}
                        <td>{cell}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .table-container {
        overflow-x: auto;
        margin: 2rem 0;
        border-radius: 20px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background: #2a2a2a;
        border-radius: 20px;
        overflow: hidden;
    }

    th, td {
        padding: 1.5rem;
        text-align: left;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        color: #ffffff;
    }

    th {
        background: #FFD700;
        font-weight: 700;
        color: #1a1a1a;
    }

    tr:last-child td {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        th, td {
            padding: 1rem;
            font-size: 0.9rem;
        }
    }
</style>
