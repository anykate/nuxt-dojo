<template>
	<div class="card">
		<div class="grid sm:grid-cols-2 gap-10">
			<div class="p-7">
				<img :src="product.image" :alt="product.title" class="mx-auto my-2 max-w-80" />
			</div>
			<div class="p-7">
				<h2 class="text-4xl my-7"> {{ product.title }}</h2>
				<p class="text-xl my-7">Price - &#8377;{{ product.price }}</p>
				<h3 class="font-bold border-b mb-4 pb-2">
					Product Description :
				</h3>
				<p class="mb-7">{{ product.description }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped></style>