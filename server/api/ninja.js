export default defineEventHandler(async (e) => {
	const { name } = getQuery(e)
	const { age, surname } = await readBody(e)
	const API_KEY = import.meta.env.VITE_API_KEY

	const { data } = await $fetch(`https://api.currencyapi.com/v3/currencies?apikey=${API_KEY}`)

	return {
		message: `${name} ${surname} - ${age} yrs. old !!`,
		data
	}
})