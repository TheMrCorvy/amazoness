import type { NextApiRequest, NextApiResponse } from "next"

import bcrypt from "bcrypt"
import { saltWorkFactor, jwtConfig } from "../../../misc/config"
import { signJwt } from "../../../misc/auth"

import User, { UserDocument } from "../../../database/models/User"
import Session, { SessionDocument } from "../../../database/models/Session"
import { dbConnect, dbDisconnect } from "../../../database"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(400).json({ message: "This method is not supported", data: {} })
	}

	dbConnect()

	const user: UserDocument = await User.create({
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, saltWorkFactor),
		isAdmin: false,
	})

	const session: SessionDocument = await Session.create(user._id)

	dbDisconnect()

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
		billingAddress: user.billingAddress,
		shippingAddress: user.shippingAddress,
	}

	return res.status(200).json({
		status: 200,
		message: "Successfully registered new account",
		data: { accessToken, refreshToken, user: resUser },
	})
}
