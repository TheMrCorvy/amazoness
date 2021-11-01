import { createStore, combineReducers } from "redux"

import loadingReducer from "./reducers/loadingReducer"

const rootReducer = combineReducers({
	loading: loadingReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
