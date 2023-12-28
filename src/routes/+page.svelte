<script lang="ts">
	import Button from '../components/Button/button.svelte';
	import Listcheck from '../components/Icons/listcheck.svelte';
	import Input from '../components/Input/input.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	export let form;
	let email: string;

	const redirectTo = $page.url.searchParams.get('redirectTo') || '/success';
</script>

<svelte:head>
	<title>Newsletter</title>
	<meta name="description" content="Newsletter- Frontmentor" />
</svelte:head>

<div
	class="bg-white flex md:flex-row items-center md:w-auto w-full flex-col-reverse md:p-10 md:rounded-lg gap-10 font-roboto"
>
	<section class="flex flex-col justify-center gap-8 px-6 pb-10 max-w-[400px]">
		<div class="flex flex-col gap-4 text-charcoal_grey">
			<h1 class="text-charcoal_grey text-clamp pb-2 font-bold">Stay updated!</h1>
			<p class="text-base">Join 60,000+ product managers receiving monthly updates on:</p>
			<ul class="flex flex-col gap-4">
				<li class="flex gap-4 items-center">
					<Listcheck />Product discovery and building what matters
				</li>
				<li class="flex gap-4 items-center">
					<Listcheck />Measuring to ensure updates are a success
				</li>
				<li class="flex gap-4 items-center">
					<Listcheck />And much more!
				</li>
			</ul>
		</div>
		<form
			method="post"
			action="?/confirm&redirectTo={redirectTo}"
			class="flex flex-col gap-5"
			use:enhance
		>
			<Input
				name="email"
				label="Email address"
				placeholder="email@company.com"
				error={form?.error ? form?.error : ''}
				bind:value={email}
			/>
			<Button action="?/confirm&redirectTo={redirectTo}">Subscribe to monthly newsletter</Button>
		</form>
	</section>
	<aside>
		<picture>
			<source srcset="/assets/images/illustration-sign-up-mobile.svg" media="(max-width: 800px)" />
			<img src="/assets/images/illustration-sign-up-desktop.svg" alt="" />
		</picture>
	</aside>
</div>
