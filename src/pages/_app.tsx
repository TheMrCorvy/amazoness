import "../styles/globals.css"

import type { AppProps } from "next/app"
import Head from "next/head"

import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../misc/theme"

import Layout from "../components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Amazoness</title>

				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>

				<meta name="keywords" content="Amazoness" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default MyApp
