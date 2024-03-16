<template>
	<header class="shadow-sm bg-white">
		<nav class="container mx-auto p-4 flex justify-between items-center">
			<NuxtLink to="/" class="font-bold my-title">NuxtDojo</NuxtLink>
			<ul class="flex gap-4 items-center">
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about">About</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/products" class="btn my-btn">Products</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>

</script>

<style scoped>
/* ul{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
	background-color: lightgoldenrodyellow;
	list-style:  none;
	margin: 0;
	padding: 20px 10px;
	box-sizing: border-box;
} */
.router-link-exact-active:not(.my-title, .my-btn) {
	color: #12b488;
}
</style>