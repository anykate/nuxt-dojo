export default defineEventHandler(async (e) => {
    const { name } = getQuery(e);
    const { age, surname } = await readBody(e);
    const currencyAPIKey = useRuntimeConfig(e).currencyAPIKey;

    const { data } = await $fetch(
        `https://api.currencyapi.com/v3/currencies?apikey=${currencyAPIKey}`
    );

    return {
        message: `${name} ${surname} - ${age} yrs. old !!`,
        data,
    };
});
