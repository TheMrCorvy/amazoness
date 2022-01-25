import type { NextApiRequest, NextApiResponse } from "next"

import Product from "../../../database/models/Product"
import Session from "../../../database/models/Session"
import User from "../../../database/models/User"

import productSeeds from "../../../database/seeders/productSeeder.json"
import userSeeds from "../../../database/seeders/userSeeder.json"

import { dbConnect, dbDisconnect } from "../../../database"

export default async (req: NextApiRequest, res: NextApiResponse) => {
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

	await Session.deleteMany({})

	console.log("Deleted all of the sessions.")
	console.log("- - - - - - - - - - - - - - -")

	await User.deleteMany({})

	console.log("Deleted all of the users.")
	console.log("- - - - - - - - - - - - - - -")

	console.log("Starting to incert Data...")
	console.log("- - - - - - - - - - - - - - -")

	await Product.insertMany(productSeeds)

	console.log("Incerted all products from seeder.")
	console.log("- - - - - - - - - - - - - - -")

	await User.insertMany(userSeeds)

	console.log("Incerted all products from seeder.")
	console.log("- - - - - - - - - - - - - - -")

	await dbDisconnect()

	return res
		.status(200)
		.json({ message: "Database migrated and seeded successfully.", data: {}, status: 200 })
}
