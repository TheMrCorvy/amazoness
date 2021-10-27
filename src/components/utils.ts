const formatter = new Intl.NumberFormat("es-AR", {
	style: "currency",
	currency: "ARS",
})

export const usePriceFormatter = (price: number) => formatter.format(price)
