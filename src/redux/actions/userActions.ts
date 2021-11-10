import { User } from "../../misc/types"
import { LogOutAction, LOG_OUT, SetUserDataAction, SET_USER_DATA } from "../types"

export const login = (user: User): SetUserDataAction => {
	return {
		type: SET_USER_DATA,
		payload: user,
	}
}

export const logout = (): LogOutAction => {
	return {
		type: LOG_OUT,
		payload: null,
	}
}
