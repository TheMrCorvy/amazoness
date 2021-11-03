import { Product } from "../misc/types"

/******************************************************************************** show loading animation */
export const TOGGLE_LOADING = "TOGGLE_LOADING"
export const SET_LOADING_ERROR = "SET_LOADING_ERROR"
export const CLEAR_LOADING_ERROR = "CLEAR_LOADING_ERROR"

export interface LoadingStateI {
	loading: boolean
	error?: string
}

export interface ToggleLoadingAction {
	type: typeof TOGGLE_LOADING
	payload: {
		loading: boolean
		error: string
	}
}

export interface SetErrorAction {
	type: typeof SET_LOADING_ERROR
	payload: {
		loading: boolean
		error: string
	}
}

export interface ClearErrorAction {
	type: typeof CLEAR_LOADING_ERROR
	payload: boolean
}

export type LoadingAction = ToggleLoadingAction | SetErrorAction | ClearErrorAction

/******************************************************************************** shopping cart */
export interface ReduxProduct extends Product {
	selectedOption?: {
		title: string
		name: string
	}
	selectedAmount: number
	totalPrice: number
}
