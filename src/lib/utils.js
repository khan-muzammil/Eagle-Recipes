import axios from "axios"

const baseUrl =
	"https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes"

const fetchData = async (query, page) => {
	const response = await axios.get(`${query}&page=${page}`)
	let data = response.data

	data = data.results.map((elm) => {
		return {
			name: elm.name,
			lastUpdated: elm.last_updated.date,
			cogs: elm.cogs,
			cost: elm.cost_price.toFixed(2),
			sale: elm.sale_price.toFixed(2),
			grossMargin: elm.gross_margin.toFixed(2),
			tags: elm.categories,
		}
	})

	if (data.length > 0) {
		return data.concat(await fetchData(query, page + 1))
	} else {
		return data
	}
}

export const getRecipesByPagination = async (page = 1) => {
	const query = `${baseUrl}/?`
	const data = await fetchData(query, page)
	return data
}

export const getIncorrectDataByPagination = async (page = 1) => {
	const query = `${baseUrl}/?is_incorrect=true`
	const data = await fetchData(query, page)
	return data
}

export const getUntaggedDataByPagination = async (page = 1) => {
	const query = `${baseUrl}/?is_untagged=true`
	const data = await fetchData(query, page)
	return data
}
export const getDisabledDataByPagination = async (page = 1) => {
	const query = `${baseUrl}/?is_disabled=true`
	const data = await fetchData(query, page)
	return data
}
