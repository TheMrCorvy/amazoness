import { Req, Res } from "../misc/types"

const formatter = new Intl.NumberFormat("es-AR", {
	style: "currency",
	currency: "ARS",
})

export const usePriceFormatter = (price: number) => formatter.format(price)

export const useSlug = (str: string) => str.replace(/\s+/g, "-").toLowerCase()

export const useApi = async (request: Req): Promise<Res> => {
	const { method, endpoint, body, token, apiUri, headers } = request

	const headerToken = { Authorization: token ? "Bearer " + token : "" }

	const reqHeaders = headers
		? new Headers({ ...headers, ...headerToken })
		: new Headers({
				"Content-Type": "application/json",
				Accept: "application/json",
				"Accept-Language": "en",
				...headerToken,
		  })

	const reqUrl = apiUri ? apiUri + endpoint : "/api" + endpoint

	return await fetch(reqUrl, { method, headers: reqHeaders, body: JSON.stringify(body) })
		.then((res) => res.json())
		.then((data) => data)
		.catch((error) => error)
}

export const useFakeApi = async (request: Req): Promise<Res> => {
	return await new Promise((r) => setTimeout(r, 2000)).then(() => {
		return {
			message: "Succes!",
			status: 200,
			data: {
				message: "Succes!",
				status: 200,
				data: {
					name: "",
					id: 1,
					category: "",
					description: "",
					images: [""],
					price: 0,
					brand: "",
					rating: 0,
					numReviews: 0,
					stock: 0,
				},
			},
		}
	})
}
