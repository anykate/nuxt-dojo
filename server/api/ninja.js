export default defineEventHandler(async (e) => {
	const { name } = getQuery(e)
	const { age, surname } = await readBody(e)
	const config = useRuntimeConfig()

	const { data } = await $fetch(`https://api.currencyapi.com/v3/currencies?apikey=${config.currencyKey}`)

	return {
		message: `${name} ${surname} - ${age} yrs. old !!`,
		data
	}
})