import { UserState, UserActions, SET_USER_DATA, LOG_OUT } from "../types"

const initialState: UserState = {
	user: null,
}

const userReducer = (state = initialState, action: UserActions): UserState => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, user: action.payload }
		case LOG_OUT:
			return { ...state, user: null }

		default:
			return { ...state }
	}
}

export default userReducer
