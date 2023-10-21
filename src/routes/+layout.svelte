<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/navigation/NavBar.svelte';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
	$: user = data?.user;
	$: cart = data?.cart;
	$: count = cart?.items?.length || null;
</script>

<NavBar bind:user bind:cart bind:count />
<slot />
