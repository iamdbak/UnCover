import { IActionBase } from "../models/root.interface";
import { IAccount } from "../models/account.interface";
import { ActionType } from "../actions/account.actions";
import { StaticRouter } from "react-router";

const initialState: IAccount = {
    loading: false,
    error: null,
    username: "pk",
};

function accountReducer(state: IAccount = initialState, action: IActionBase): IAccount {
    switch (action.type) {
        case ActionType.LOG_IN: {
            return { loading: true, error: null, username: "" };
        }
        case ActionType.LOG_IN_SUCCESS: {
            return { loading: false, error: null, username: (action.username) };
        }
        case ActionType.LOG_IN_FAIL: {
            return { loading: false, error: action.error, username: "" };
        }
        case ActionType.LOG_OUT: {
            return { ...state, username: "" };
        }
        default:
            return state;
    }
}


export default accountReducer;
