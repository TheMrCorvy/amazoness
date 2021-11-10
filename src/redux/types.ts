import { Product, User } from "../misc/types"

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
	payload: {
		loading: boolean
		error: string
	}
}

export type LoadingAction = ToggleLoadingAction | SetErrorAction | ClearErrorAction

/******************************************************************************** shopping cart */
export interface ReduxProduct extends Omit<Product, "_id"> {
	selectedOption?: {
		title: string
		name: string
	}
	selectedAmount: number
	totalPrice: number
}

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const UPDATE_ITEM_AMOUNT = "UPDATE_ITEM_AMOUNT"
export const UPDATE_SUBCATEGORY = "UPDATE_SUBCATEGORY"

export interface ShoppingCartState {
	items: ReduxProduct[]
}

export interface AddToCartAction {
	type: typeof ADD_TO_CART
	payload: ReduxProduct
}

export interface RemoveFromCartAction {
	type: typeof REMOVE_FROM_CART
	payload: string
}

export interface UpdateItemAmountAction {
	type: typeof UPDATE_ITEM_AMOUNT
	payload: {
		subCategoryId: string // subCategory.name + "," + subCategory.title
		selectedAmount: number
		itemName: string
	}
}

export interface UpdateSubCategoryAction {
	type: typeof UPDATE_SUBCATEGORY
	payload: {
		subCategoryId: string // subCategory.name + "," + subCategory.title
		itemName: string
	}
}

export type ShoppingCartAction =
	| AddToCartAction
	| RemoveFromCartAction
	| UpdateItemAmountAction
	| UpdateSubCategoryAction

/******************************************************************************** user */

export const SET_USER_DATA = "SET_USER_DATA"
export const LOG_OUT = "LOG_OUT"

export interface UserState {
	user: User | null
}

export interface SetUserDataAction {
	type: typeof SET_USER_DATA
	payload: User
}

export interface LogOutAction {
	type: typeof LOG_OUT
	payload: undefined
}

export type UserActions = SetUserDataAction | LogOutAction
