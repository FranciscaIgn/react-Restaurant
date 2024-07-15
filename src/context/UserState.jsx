import { useReducer } from "react";
import { reducer } from "./UserReducer";
import { axiosClient } from "../config/api.config";
import UsersContext from "./UserContext";



export const UserState = ({children}) =>{
    
    const initialState = {
        userData:[
            {
                id: '',
                nombre: '',
                apellido: '',
                rut: '',
                telefono: 0,
                correo: '',
                contraseña: ''
            }
        ],
        authStatus: true
    };

    const [ globalState, dispatch ] = useReducer(reducer, initialState)


    const signupUser = async(dataForm) => {
        try {
            const { data } = await axiosClient.post("/signup", dataForm);

            dispatch({
                type: "REGISTRAR_USUARIO",
                payload: data
            });
        } catch (error) {
            console.log(error)
        }
    }

    const loginUser = async(dataForm) =>{
        try {
            const { data } = await axiosClient.post('/login', dataForm)
            
            dispatch({
                type: "LOGIN_EXITOSO",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const verifyToken = async() => {
        
        try {
            const token = localStorage.getItem('token')

        if(token) {
            axiosClient.defaults.headers.common['authorization']
        }else{
            delete axiosClient.defaults.headers.common['authorization']
        }

        const {data} = await axiosClient.get('/verify-user')

        dispatch({
            type: "OBTENER_USUATIO",
            payload: data
        })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UsersContext.Provider
             value={{
                usersData: globalState.usersData,
                authStatus: globalState.authStatus,
                signupUser,
                loginUser,
                verifyToken
             }}
             >{children}</UsersContext.Provider>
    );
}