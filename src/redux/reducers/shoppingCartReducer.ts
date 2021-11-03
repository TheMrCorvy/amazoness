import {
	ReduxProduct,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_ITEM_AMOUNT,
	UPDATE_SUBCATEGORY,
	ShoppingCartState,
	ShoppingCartAction,
	UpdateItemAmountAction,
	UpdateSubCategoryAction,
} from "../types"

const initialState: ShoppingCartState = {
	items: [],
}

const shoppingCartReducer = (
	state = initialState,
	action: ShoppingCartAction
): ShoppingCartState => {
	switch (action.type) {
		case ADD_TO_CART:
			let itemList: ReduxProduct[] = [...state.items]

			let notInArray = true

			itemList.forEach((item) => {
				if (item.name === action.payload.name) {
					notInArray = false
				}
			})

			if (notInArray) {
				itemList.push(action.payload)
			}

			return {
				...state,
				items: itemList,
			}

		case REMOVE_FROM_CART:
			return {
				...state,
				items: state.items.filter((item) => item.name !== action.payload),
			}

		case UPDATE_ITEM_AMOUNT:
			return updateAmount(state, action)

		case UPDATE_SUBCATEGORY:
			return updateSubCategory(state, action)

		default:
			return { ...state }
	}
}

export default shoppingCartReducer

const updateAmount = (state: ShoppingCartState, action: UpdateItemAmountAction) => {
	const { itemName, selectedAmount, subCategoryId } = action.payload

	const index = state.items.findIndex((item) => item.name === itemName)

	let newItemList: ReduxProduct[] = [...state.items]

	if (subCategoryId === "Default") {
		if (selectedAmount <= newItemList[index].default.stock && selectedAmount > 0) {
			newItemList[index].selectedAmount = selectedAmount
		}
	}

	const item = state.items[index]

	if (item.subCategories && item.subCategories.length >= 1) {
		const subCategory = item.subCategories.find(
			(product) => product.name + "," + product.title === subCategoryId
		)

		if (subCategory && selectedAmount <= subCategory.stock && selectedAmount > 0) {
			newItemList[index].selectedAmount = selectedAmount
		}
	}

	return { ...state, items: newItemList }
}

const updateSubCategory = (state: ShoppingCartState, action: UpdateSubCategoryAction) => {
	const { itemName, subCategoryId } = action.payload

	let newItemList: ReduxProduct[] = [...state.items]

	const index = newItemList.findIndex((item) => item.name === itemName)

	if (subCategoryId !== "Default") {
		const [name, title] = subCategoryId.split(",") as [string, string]

		newItemList[index].selectedOption = { name, title }
	} else {
		newItemList[index].selectedOption = { name: "Default", title: "" }
	}

	return { ...state, items: newItemList }
}
