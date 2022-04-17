import React from 'react'
import { GET_TODOS } from '../actions/actions'

const reducer = (state,action) => {
    if (action.type === GET_TODOS) {
        return {...state,todos:action.payload}
    }
    return state
}

export default reducer