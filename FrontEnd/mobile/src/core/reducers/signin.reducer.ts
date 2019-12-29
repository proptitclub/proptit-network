// import { UserAction } from "../actions/user.action";
import { SIGN_IN_PROGRESS, SIGN_IN_SUCCESS, SIGN_IN_ERROR, SignInState, SignInAction } from "../types/signin.types";
import { logD } from "../../common/LogTool";

let initialState: SignInState = {
    isLoading: false,
    isSuccess: false,
}

export default (state: SignInState = initialState, action: SignInAction): SignInState => {
    switch (action.type) {
        case SIGN_IN_PROGRESS:
            return ({
                ...state,
                isLoading: true,
            });
        case SIGN_IN_SUCCESS:
            logD("AppLog", "Reducer: Login Success!")
            return ({
                ...state,
                isLoading: false,
                isSuccess: true,
                currentUserID: action.currentUserID
            });
        case SIGN_IN_ERROR:
            return ({
                ...state,
                isLoading: false,
            });
        default:
            return state;
    }
}