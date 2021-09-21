import { Dispatch } from "redux";
import Axios from "axios"

export const LOG_IN: string = "LOG_IN";
export const LOG_IN_SUCCESS: string = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL: string = "LOG_IN_SUCCESS";
export const LOG_OUT: string = "LOG_OUT";
export enum ActionType {
    LOG_IN = "LOG_IN",
    LOG_IN_SUCCESS = "LOG_IN_SUCCESS",
    LOG_IN_FAIL = "LOG_IN_FAIL",
    LOG_OUT = "LOG_OUT"
}
interface ILogInActionType { type: ActionType.LOG_IN };
interface ILogInSuccessType { type: ActionType.LOG_IN_SUCCESS, username: string }
interface ILogInFailType { type: ActionType.LOG_IN_FAIL, error: string }
interface ILogOutActionType { type: ActionType.LOG_OUT };
type loginAction = ILogInActionType | ILogInSuccessType | ILogInFailType
export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<loginAction>) => {
        dispatch({
            type: ActionType.LOG_IN
        });
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
            const { data } = await Axios.post(
                "http://localhost:9000/index/login",
                { 'username': email, 'password': password },
                config
            )
            dispatch({
                type: ActionType.LOG_IN_SUCCESS,
                username: data.username
            })
            localStorage.setItem("username", JSON.stringify(data.username));
        } catch (error) {
            dispatch({
                type: ActionType.LOG_IN_FAIL,
                error: error.message,
            })
        }
    };
}

export function logout(): ILogOutActionType {
    return { type: ActionType.LOG_OUT };
}

