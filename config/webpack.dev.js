const { merge } = require("webpack-merge")
const path = require("path")
require("dotenv").config({ path: "node_modules/@xotomicro/xotomicro-front-utility-registry/src/global.env" })
require("dotenv").config({ path: "service.env" })
const commonConfig = require("./webpack.common")
const { getMicrofrontDevServerConfig } = require("@xotomicro/xotomicro-front-utility-registry/src/config/webpack.shared")

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const devConfig = {
	entry: path.resolve(process.cwd(), "src/App.tsx"),
	mode: "development",

	devServer: getMicrofrontDevServerConfig(),
}

module.exports = merge(commonConfig, devConfig)
