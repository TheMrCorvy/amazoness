import type { NextApiRequest, NextApiResponse } from "next"
import Product from "../../../models/Product"

import dbConnect from "../../../misc/db"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			const data = await getProducts()

			return res.status(200).json({ data })

		default:
			return res.status(400).json({ msg: "This method is not supported", data: {} })
	}
}

const getProducts = async () => {
	await dbConnect()

	const products = await Product.find()

	return { products }
}
