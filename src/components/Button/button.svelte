<script lang="ts">
	export let action: string = '';
</script>

<button
	formaction={action}
	type="submit"
	class="flex w-full items-center justify-center py-3 px-2 bg-dark_slate_grey text-white font-bold rounded-md outline-none hover:bg-gradient-to-r from-pink-600 to-tomato hover:drop-shadow-[0_0.5em_1em_#ff3e00aa] duration-300 hover:duration-200 ease-in"
>
	<slot />
</button>
