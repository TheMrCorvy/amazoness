import { createStore, combineReducers } from "redux"

import loadingReducer from "./reducers/loadingReducer"
import shoppingCartReducer from "./reducers/shoppingCartReducer"

const rootReducer = combineReducers({
	loading: loadingReducer,
	items: shoppingCartReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
