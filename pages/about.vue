<template>
	<div>
		<h2>About - {{ greeting.message }}</h2>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores vitae veritatis temporibus pariatur magni!
			Ullam expedita sed quos adipisci in</p>
		<p class="text-xl card">INR Info :
		<p class="mt-4 info font-bold">Symbol: {{ greeting.data.INR.symbol }}</p>
		<p class="info font-bold">Name: {{ greeting.data.INR.name }}</p>
		<p class="info font-bold">Code: {{ greeting.data.INR.code }}</p>
		</p>
	</div>
</template>

<script setup>
useHead({
	title: 'Nuxt Dojo | About'
})

const { data: greeting } = await useFetch('/api/ninja?name=Aniket', {
	method: 'post',
	body: {
		age: 46,
		surname: 'Aryamane'
	}
})

if (!greeting.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Error communicating with CurrenciesAPI !!',
		fatal: true
	})
}
</script>

<style scoped>
h2 {
	margin-bottom: 20px;
	font-size: 36px;
}

p:not(.info) {
	margin: 20px 0;
}
</style>