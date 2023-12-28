<script lang="ts">
	export let name: string;
	export let label: string;
	export let placeholder: string;
	export let value: string = '';
	export let error: string;

	function handleInput(event: any) {
		if (error !== '') {
			error = '';
		}
		// value = event.target.value;
	}
</script>

<label class="flex flex-col gap-2 text-sm">
	{label}
	<input
		type="email"
		{name}
		{value}
		{placeholder}
		on:input={handleInput}
		on:input
		class="py-3 px-2 rounded-md border focus:border-black outline-none text-base {error &&
			'border-rose-600'}"
	/>
	{#if error}
		<span class="text-rose-600 text-xs">{error}</span>
	{/if}
</label>
