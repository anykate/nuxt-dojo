<template>
	<div class="mt-7 max-w-sm mx-auto text-center card">
		<p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
		<p class="mt-7 text-6xl">Oopsie!</p>
		<p class="mt-7 text-2xl text-red-400">{{ error.message }}</p>
		<button type="button" class="btn my-4 text-2xl" @click="handleClearError">Go Home</button>
	</div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>