export const reducer = (globalState, action ) => {
    switch(action.type) {
        case "REGISTRAR_USUARIO":
            localStorage.setItem('token', action.payload.token)

            return {
                ...globalState,
                userData: action.payload.user,
                authStatus: true
            }

            case "LOGIN_EXITOSO":
                localStorage.setItem('token', action.payload.token)

                return{
                    ...globalState,
                    userData: action.payload.user,
                    authStatus: true
                }
    }
}