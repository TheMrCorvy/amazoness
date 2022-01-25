import type { NextApiRequest, NextApiResponse } from "next"
import Product from "../../../database/models/Product"

import { dbConnect, dbDisconnect } from "../../../database"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return res
			.status(400)
			.json({ message: "This method is not supported", data: {}, status: 400 })
	}

	const data = await getProducts()

	return res.status(200).json({ status: 200, message: "products loaded successfully", data })
}

const getProducts = async () => {
	await dbConnect()

	const products = await Product.find().select({ slug: 1 })

	await dbDisconnect()

	return { products }
}
