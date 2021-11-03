import {
	ReduxProduct,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_ITEM_AMOUNT,
	UPDATE_SUBCATEGORY,
	AddToCartAction,
	RemoveFromCartAction,
	UpdateItemAmountAction,
	UpdateSubCategoryAction,
} from "../types"

export const addToCart = (item: ReduxProduct): AddToCartAction => {
	return {
		type: ADD_TO_CART,
		payload: item,
	}
}

export const removeFromCart = (itemName: string): RemoveFromCartAction => {
	return {
		type: REMOVE_FROM_CART,
		payload: itemName,
	}
}

export const updateItemAmount = (
	subCategoryId: string,
	selectedAmount: number,
	itemName: string
): UpdateItemAmountAction => {
	return {
		type: UPDATE_ITEM_AMOUNT,
		payload: {
			subCategoryId,
			selectedAmount,
			itemName,
		},
	}
}

export const updateSubCategory = (
	subCategoryId: string,
	itemName: string
): UpdateSubCategoryAction => {
	return {
		type: UPDATE_SUBCATEGORY,
		payload: {
			subCategoryId,
			itemName,
		},
	}
}
