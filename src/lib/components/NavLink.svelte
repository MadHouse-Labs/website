<script lang="ts">
    import type { Page } from "../stores";
    import { pageStore } from "../stores";

    export let page: Page;

    function click() {
        pageStore.set(page);
    }
</script>

<button
    class="underline text-white {$pageStore === page &&
        'font-bold tracking-wider'} hover:tracking-wider hover:font-bold focus:tracking-wider focus:font-bold transition-all"
    on:click={click}
>
    <slot></slot>
</button>
