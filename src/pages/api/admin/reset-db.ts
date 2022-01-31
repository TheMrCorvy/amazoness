import type { NextApiRequest, NextApiResponse } from "next"

import Product from "../../../database/models/Product"

import productSeeds from "../../../database/seeders/productSeeder.json"

import { dbConnect, dbDisconnect } from "../../../database"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return res
			.status(400)
			.json({ message: "This method is not supported", data: {}, status: 400 })
	}

	await dbConnect()

	await Product.deleteMany({})

	console.log("- - - - - - - - - - - - - - -")
	console.log("Deleted all of the products.")
	console.log("- - - - - - - - - - - - - - -")

	console.log("Starting to incert Data...")
	console.log("- - - - - - - - - - - - - - -")

	await Product.insertMany(productSeeds)

	console.log("Incerted all products from seeder.")
	console.log("- - - - - - - - - - - - - - -")

	await dbDisconnect()

	return res
		.status(200)
		.json({ message: "Database migrated and seeded successfully.", data: {}, status: 200 })
}
