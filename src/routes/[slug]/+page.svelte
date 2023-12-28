<script lang="ts">
	import Button from '../Button/button.svelte';
	export let email: string;
</script>

<div>
	<h1 class="text-charcoal_grey text-clamp pb-2 font-bold">Thanks for subscribing!</h1>
	<p>
		A confirmation email has been sent to <strong>{email}</strong> . Please open it and click the button
		inside to confirm your subscription.
	</p>
	<Button>Dismiss message</Button>
</div>
