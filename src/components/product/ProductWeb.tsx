import React, {useState} from "react"
import AddProductApi from "@api/AddProductApi"
import ProductApi from "@api/ProductApi"
import {getToken} from "@services/ProductServices"

const token: string | null = getToken()

export const ProductWeb: any = (props: any): JSX.Element => {
    const [update, setUpdate]: any = useState()
    return (
        <div className="section-app__item">
            <p>Add product</p>
            <AddProductApi token={token} update={update} setUpdate={setUpdate} />
            <p>Product list</p>
            <ProductApi token={token} />
        </div>
    )
}
