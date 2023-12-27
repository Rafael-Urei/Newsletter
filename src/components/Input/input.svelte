<script lang="ts">
	export let name: string;
	export let label: string;
	export let placeholder: string;
</script>

<label class="flex flex-col gap-2 text-sm">
	{label}
	<input
		type="email"
		bind:value={name}
		{placeholder}
		class="py-3 px-2 rounded-md border focus:border-black outline-none text-base"
	/>
</label>
