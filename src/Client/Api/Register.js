// import { LoginErr, LoginStart, LoginSuccess } from "../REDUX/ReduxMain.js/Login"
import { LoginErr, LoginStart, LoginSuccess, signupErr, signUpStart, signUpSuccess } from "../REDUX/ReduxMain.js/Registration"
import { PublicRequest } from "../RequestMethod"

/*Register user  */
export const SignupApi = async (dispatch, user) => {
    dispatch(signUpStart())
    try {
        const res = await PublicRequest.post('user/Register', user)
        dispatch(signUpSuccess(res.data))
            (res.data)
    } catch (error) {
        dispatch(signupErr(error))
    }
}
/*Login user  */
export const LoginApi = async (dispatch, user) => {
    dispatch(LoginStart())
    try {
        const res = await PublicRequest.post('user/Login', user)
        dispatch(LoginSuccess(res.data))
    } catch (error) {
        dispatch(LoginErr(error))
    }
}


