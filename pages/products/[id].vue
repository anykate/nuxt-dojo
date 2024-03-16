<template>
	<div>
		<p> {{ product.title }}</p>
		<p> {{ product.price }}</p>
		<p> {{ product.id }}</p>
	</div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })
</script>

<style scoped>
h2 {
	margin-bottom: 20px;
	font-size: 36px;
}

p {
	margin: 20px 0;
}
</style>