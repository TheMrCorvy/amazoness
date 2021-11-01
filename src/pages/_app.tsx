import "../styles/globals.css"

import type { AppProps } from "next/app"
import Head from "next/head"
import PropTypes from "prop-types"

import { useEffect } from "react"

import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../misc/theme"

import { Provider } from "react-redux"
import store from "../redux/store"

import Layout from "../components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")

		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<title>Amazoness</title>

				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>

				<meta
					name="description"
					content="An E-Commerce made with NextJS, Typescript, and MongoDB"
				/>

				<meta name="keywords" content="Amazoness" />
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</Provider>
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

export default MyApp
