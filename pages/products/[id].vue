<template>
	<div>
		<h2>Products - {{ id }}</h2>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores vitae veritatis temporibus pariatur magni!
			Ullam expedita sed quos adipisci in</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores vitae veritatis temporibus pariatur magni!
			Ullam expedita sed quos adipisci in</p>
	</div>
</template>

<script setup>
const { id } = useRoute().params;
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