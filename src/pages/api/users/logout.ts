import type { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "GET") {
		return res
			.status(400)
			.json({ message: "This method is not supported", data: {}, status: 400 })
	}
}
