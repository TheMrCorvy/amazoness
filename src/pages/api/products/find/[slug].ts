import type { NextApiRequest, NextApiResponse } from "next"
import Product from "../../../../database/models/Product"

import { dbConnect, dbDisconnect } from "../../../../database"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
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
			return res.status(400).json({ message: "This method is not supported", data: {} })
	}
}

const findProduct = async (slug: string) => {
	await dbConnect()

	const product = await Product.findOne({ slug })
	const similarProducts = await Product.find({ category: product.category }).limit(4)

	await dbDisconnect()

	return { product, similarProducts, slug }
}
