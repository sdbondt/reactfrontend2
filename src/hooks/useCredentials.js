import { useReducer } from "react"

const reducer = (state, action) => ({
    ...state,
    ...action
})

const useCredentials = (initialState) => {
    const [credentials, dispatchCredentials] = useReducer(reducer, initialState)

    const handleChanges = (e) => dispatchCredentials({ [e.target.name]: e.target.value })

    return { credentials, dispatchCredentials, handleChanges }
}

export default useCredentials