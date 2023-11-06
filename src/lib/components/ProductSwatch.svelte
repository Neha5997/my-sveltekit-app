<script lang="ts">
    export let color: any;
    export let selected: Boolean;
</script>

<button class="w-[20px] h-[20px] rounded-full" 
    class:border-2={selected}
    style:background-color={color}
    on:click
    >
</button>