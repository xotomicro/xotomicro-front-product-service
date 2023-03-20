import React, {useEffect, useState} from "react"
import {ApiSystem, ProductModel} from "@xotomicro/xotomicro-front-common-registry"
import {globalEventDistributor} from "@app/App"

export class ProductApi extends React.Component<Readonly<{token: string | null}>, {token: string | null; products: any[]; loading: boolean}> {
    constructor(props: {token: string | null}) {
        super(props)

        this.state = {token: props.token, products: [], loading: true}
        globalEventDistributor &&
            globalEventDistributor.on("product", () => {
                this.load()
            })
    }

    async componentDidMount() {
        await this.load()
    }

    async load() {
        this.setState({loading: true})
        const products = await ApiSystem.getRequest({url: `http://${process.env.SERVICE_URL}:8080/products`})
        this.setState({products})
        this.setState({loading: false})
    }

    render() {
        const {loading, products} = this.state

        if (loading) return <p>Loading...</p>

        if (products) {
            return (
                <div className="product">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product: ProductModel, index: React.Key | null | undefined) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }

        return <p>Cannot load data</p>
    }
}

export default ProductApi
