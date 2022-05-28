import {generateRandomToken} from "@components/token/store/action"
import {initialState} from "@components/token/store/state"

export function tokenReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case "generateRandomToken":
            return generateRandomToken(state)
        default:
            return state
    }
}
