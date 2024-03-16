<template>
	<div class="grid sm:grid-cols-4 gap-5">
		<div v-for="product in products" :key="product.id">
			<NuxtLink :to="`/products/${product.id}`">
				{{ product.title }}
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
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