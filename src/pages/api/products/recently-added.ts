import type { NextApiRequest, NextApiResponse } from "next"
import Product from "../../../database/models/Product"

import { dbConnect, dbDisconnect } from "../../../database"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			const data = await getProducts()

			return res
				.status(200)
				.json({ status: 200, message: "products loaded successfully", data })

		default:
			return res
				.status(400)
				.json({ message: "This method is not supported", data: {}, status: 400 })
	}
}

const getProducts = async () => {
	await dbConnect()

	const products = await Product.find().sort({ _id: -1 }).limit(5)

	await dbDisconnect()

	return { products }
}
