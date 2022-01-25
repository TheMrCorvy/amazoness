import { Dispatch } from "redux"
import { toggleLoading, setErrorLoading } from "../redux/actions/loadingActions"
import { baseApiUri } from "../misc/config"
import { Req, Res } from "../misc/types"

const formatter = new Intl.NumberFormat("es-AR", {
	style: "currency",
	currency: "ARS",
})

export const usePriceFormatter = (price: number) => formatter.format(price)

export const useSlug = (str: string) => str.replace(/\s+/g, "-").toLowerCase()

export const useApi = async (request: Req, dispatch?: Dispatch): Promise<Res> => {
	const { method, endpoint, body, token, apiUri, headers } = request

	if (dispatch) {
		dispatch(toggleLoading(true))
	}

	const headerToken = { Authorization: token ? "Bearer " + token : "" }

	const reqHeaders = headers
		? new Headers({ ...headers, ...headerToken })
		: new Headers({
				"Content-Type": "application/json",
				Accept: "application/json",
				"Accept-Language": "en",
				...headerToken,
		  })

	const reqUrl = apiUri ? apiUri + endpoint : baseApiUri + endpoint

	return await fetch(reqUrl, { method, headers: reqHeaders, body: JSON.stringify(body) })
		.then((res) => res.json())
		.then((data) => {
			if (dispatch) {
				dispatch(toggleLoading(false))
			}

			if (data.status !== 200) {
				throw new Error(data.message)
			}

			return data
		})
		.catch((error) => {
			if (dispatch) {
				dispatch(setErrorLoading(error.message))
			}

			return error
		})
}
