import { createStore, combineReducers } from "redux"

import loadingReducer from "./reducers/loadingReducer"
import shoppingCartReducer from "./reducers/shoppingCartReducer"
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
	loading: loadingReducer,
	items: shoppingCartReducer,
	user: userReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
