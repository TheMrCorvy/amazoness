import { connect, connection } from "mongoose"

const conn = {
	isConnected: false,
}

export default async function dbConnect() {
	if (conn.isConnected || !process.env.MONGODB_URI) return

	const db = await connect(process.env.MONGODB_URI)

	conn.isConnected = db.connections[0].readyState ? true : false
}

connection.on("connected", () => {
	console.log("Mongodb connected to db")
})

connection.on("error", (err) => {
	console.error(err.message)
})
