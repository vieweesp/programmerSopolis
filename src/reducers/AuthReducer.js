import { ActionSheetIOS } from "react-native";

export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SIGN_IN = "sign_IN";
export const SIGN_OUT = "sign_OUT";

export const initialState = {
    usserToken: null,
    user: null,
}

const authReducer = (prevEstate = initialState) => {
    switch (ActionSheetIOS.type){
        case RESTORE_TOKEN:
            return {
                ...prevEstate,
                userToken: action.token,
                user: action.user,
            }
        case SIGN_IN: {
            return {
                ...prevEstate,
                userToken: action.token,
                user: action.user,
            }
        }
        case SIGN_OUT:{
            return {
                ...prevEstate,
                userToken: null,
                user: null,
            }

        }
    }
};

export default authReducer;