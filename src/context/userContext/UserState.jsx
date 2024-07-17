import { useReducer } from "react";
import { reducer } from "./UserReducer";
import { axiosClient } from "../../config/api.config";
import UsersContext from "./UserContext";


export const UserState = ({children}) => {

    const initialState ={
        userData: {},
        authStatus: false,
    };

    const [globalState, dispatch ] = useReducer(reducer, initialState)

    const signupUser =async(dataForm) =>{
        try {
            const { data } = await axiosClient.post("/signup", dataForm);

            dispatch ({
                type: "REGISTRAR_USUARIO",
                payload: data
            });
        } catch (error) {
            console.log(error)
        }
    }


    const loginUser = async(dataForm) => {
        try {
            const { data } =await axiosClient.post("/login", dataForm)

            dispatch({
                type: "LOGIN_EXITOSO",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const verifyToken = async () => {
        try {
          const token = localStorage.getItem("token");
          if (token) {
            axiosClient.defaults.headers.common["Authorization"] = token;
          } else {
            delete axiosClient.defaults.headers.common["Authorization"];
          }
          const { data } = await axiosClient.get("/verify-user");
          console.log(data)
          
          dispatch({
            type: "OBTENER_USUARIO",
            payload: data,
          });
          return data.data
      
        } catch (error) {
          console.log(error);
        }
      };
  
      const logout = () => {
        dispatch({
          type: "LOGOUT"
        })
      }
  
      const getUsers = async() => {
        try {
          const { data } = await axiosClient.get("/users");
  
          dispatch({
            type: "OBTENER_USUARIOS",
            payload: data

          
          })
        } catch (error) {
          console.log(error)
        }
      }
  
      return (
        <UsersContext.Provider
          value={{
            userData: globalState.userData,
            authStatus: globalState.authStatus,
            signupUser,
            loginUser,
            verifyToken,
            logout,
            getUsers
          }}
        >
          {children}
        </UsersContext.Provider>
      );


    

}