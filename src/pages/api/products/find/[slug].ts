import type { NextApiRequest, NextApiResponse } from "next"
import Product from "../../../../models/Product"

import dbConnect from "../../../../misc/db"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const params = req.query

	switch (req.method) {
		case "GET":
			const data = await findProduct(
				typeof params.slug === "string" ? params.slug : params.slug[0]
			)

			return res
				.status(200)
				.json({ status: 200, message: "product loaded successfully", data })

		default:
			return res.status(400).json({ msg: "This method is not supported", data: {} })
	}
}

const findProduct = async (slug: string) => {
	await dbConnect()

	const product = await Product.find({ slug })

	return { product, slug }
}