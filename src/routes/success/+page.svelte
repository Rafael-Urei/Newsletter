<script lang="ts">
	import Button from '../../components/Button/button.svelte';
	import Success from '../../components/Icons/success.svelte';
	export let data;
</script>

<div
	class="bg-white flex flex-col h-svh md:h-auto justify-between md:justify-center gap-10 p-10 md:rounded-xl md:max-w-[400px] md:gap-8 font-roboto"
>
	<div class="flex flex-col gap-8 justify-center md:pt-0">
		<Success />
		<h1 class="text-charcoal_grey text-clamp font-bold leading-[3rem]">Thanks for subscribing!</h1>
		<p class="text-sm">
			A confirmation email has been sent to <strong>{data.email}</strong> . Please open it and click
			the button inside to confirm your subscription.
		</p>
	</div>
	<form method="post" action="?/dismiss">
		<Button action="?/dismiss">Dismiss message</Button>
	</form>
</div>
