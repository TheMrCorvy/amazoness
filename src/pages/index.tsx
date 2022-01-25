import type { NextPage } from "next"

import { useApi } from "../components/utils"

import { Product, Req } from "../misc/types"

import PopularProducts from "../components/sections/PopularProducts"

const Home: NextPage<Props> = ({ recentlyAddedProducts }) => {
	return (
		<>
			<PopularProducts products={recentlyAddedProducts} />
		</>
	)
}

export async function getServerSideProps() {
	const callApi = useApi

	const req: Req = {
		endpoint: "/products/recently-added",
		method: "GET",
	}

	const recentlyAddedProducts = await callApi(req).then((res: any) => {
		return res.data.products
	})

	return {
		props: { recentlyAddedProducts },
	}
}

interface Props {
	recentlyAddedProducts: Product[]
}

export default Home
