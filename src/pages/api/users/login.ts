import type { NextApiRequest, NextApiResponse } from "next"
import User, { UserDocument } from "../../../database/models/User"
import Session, { SessionDocument } from "../../../database/models/Session"

import { signJwt } from "../../../misc/auth"
import { jwtConfig } from "../../../misc/config"

import { dbConnect, dbDisconnect } from "../../../database"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "POST":
			const data = await login(req.body.email, req.body.password)

			if (data.status === 401 || data.status === 404) {
				return res.status(data.status).json({ request: req.body, ...data })
			}

			return res.status(200).json(data)

		default:
			return res.status(400).json({ msg: "This method is not supported", data: {} })
	}
}

const login = async (email: string, password: string) => {
	await dbConnect()

	const user: UserDocument | null = await User.findOne({ email })

	if (!user) {
		await dbDisconnect()

		return { satus: 404, message: "user was not found" }
	}

	const isValid = await user.comparePassword(password)

	if (!isValid) {
		await dbDisconnect()

		return { status: 401, message: "password was incorrect" }
	}

	const session: SessionDocument = await Session.create(user._id)

	await dbDisconnect()

	const accessToken = signJwt(
		{ ...user, session: session._id },
		{ expiresIn: jwtConfig.accessTokenTtl }
	)

	const refreshToken = signJwt(
		{ ...user, session: session._id },
		{ expiresIn: jwtConfig.refreshTokenTtl }
	)

	const resUser = {
		_id: user._id,
		email: user.email,
		name: user.name,
		isAdmin: user.isAdmin,
	}

	return {
		status: 200,
		message: "successfully logged in",
		data: { accessToken, refreshToken, user: resUser },
	}
}
