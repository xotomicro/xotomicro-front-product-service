import React from "react"
import ReactDOM from "react-dom"
import {App} from "../App"

let container

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

global.fetch = jest.fn(async () => {
    return {
        async json() {
            return []
        },
    } as Response
})

const AppTestWrapper: any = (): React.ReactElement => {
    return <App />
}

describe("App", () => {
    test("should render <App/>", () => {
        ReactDOM.render(<AppTestWrapper />, container)
    })
})
