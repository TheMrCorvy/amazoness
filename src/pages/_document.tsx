import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	render() {
		return (
			<Html lang="es">
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

					<meta
						name="description"
						content="An E-Commerce made with NextJS, Typescript, and MongoDB"
					/>
					<meta name="keywords" content="Amazoness" />

					{/* Google Fonts */}
					<link rel="preconnect" href="https://fonts.googleapis.com"></link>
					<link rel="preconnect" href="https://fonts.gstatic.com"></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
						rel="stylesheet"
					></link>

					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
