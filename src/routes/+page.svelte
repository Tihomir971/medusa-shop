<script lang="ts">
	import Collection from '$lib/components/Collection.svelte';
	export let data;
</script>

<Collection products={data.products.products} />

<pre>
    {JSON.stringify(data.products, null, 2)}
</pre>
