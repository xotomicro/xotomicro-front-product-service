const packageDependencies = require("../package.json").dependencies
const {getAliasConfig, getModuleRulesConfig, getMicroFrontPluginsConfig} = require("@xotomicro/xotomicro-front-utility-registry/src/config/webpack.shared")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {EnvironmentPlugin} = require("webpack")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    resolve: {
        alias: getAliasConfig(),
        extensions: [".js", ".tsx", ".jsx", ".ts"],
    },
    module: {
        rules: getModuleRulesConfig(),
    },
    plugins: getMicroFrontPluginsConfig({packageName: "xotomicro_front_product_service", packageDependencies, HtmlWebpackPlugin, EnvironmentPlugin, ModuleFederationPlugin}),
}
