const { generateKeyPairSync } = require("crypto")

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
	modulusLength: 2048,
	publicKeyEncoding: {
		type: "spki",
		format: "pem",
	},
	privateKeyEncoding: {
		type: "pkcs8",
		format: "pem",
	},
})

console.log(publicKey)
console.log(privateKey)

console.log(" ")
console.log("Now you can copy-paste these keys into .env file.")
console.log(" ")

module.exports = {
	privateKey,
	publicKey,
}
