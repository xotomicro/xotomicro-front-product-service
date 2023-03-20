import {globalEventDistributor} from "@app/App"
import {ApiSystem} from "@xotomicro/xotomicro-front-common-registry"
import React, {useState} from "react"

async function createProduct(product: {name: any; description: any}, token: any) {
    return await ApiSystem.postRequest({
        url: `http://${process.env.SERVICE_URL}:8080/products`,
        body: product,
    })
}

function AddProductApi({token, update, setUpdate}: any) {
    const [name, setName]: any = useState()
    const [description, setDescription]: any = useState()

    const handleSubmit: any = async (e: any): Promise<void> => {
        e.preventDefault()
        const result = await createProduct({name, description}, token)
        setUpdate(!update)
        globalEventDistributor.emit("product", result)
        console.log("EMIT")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={(e: any) => setName(e.target.value)} />
            <input style={{marginLeft: 5}} type="text" placeholder="Description" onChange={(e: any) => setDescription(e.target.value)} />
            <button style={{marginLeft: 5}} type="submit">
                Submit
            </button>
        </form>
    )
}

export default AddProductApi
