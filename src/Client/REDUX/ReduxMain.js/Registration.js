import { createSlice } from "@reduxjs/toolkit";


const RegistrationSlice = createSlice({
    name: 'signup',
    initialState: {
        isFetching: false,
        currentUser: null,
        error: null,

        signupIsFetching: false,
        regSuccess: null,
        signUpErro: null
    },
    reducers: {
        signUpStart: (state) => {
            state.signupIsFetching = true;
            state.signUpErro = null
        },
        signUpSuccess: (state, action) => {
            state.signupIsFetching = false
            state.regSuccess = action.payload
            state.error = null
        },
        signupErr: (state, action) => {
            state.signupIsFetching = false
            state.signUpErro = action.payload.response.data
        },
        LoginStart: (state) => {
            state.isFetching = true;
            state.error = null
        },
        LoginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
            state.error = null
        },
        LoginErr: (state, action) => {
            state.isFetching = false
            state.error = action.payload.response.data
            state.currentUser = null
        },
        SignOut: (state, action) => {
            state.currentUser = null
            state.regSuccess = null
            state.error = null
            state.isFetching = false
        }
    }
})
export const { signUpStart, signUpSuccess, signupErr, LoginStart, LoginSuccess, LoginErr, SignOut } = RegistrationSlice.actions;
export default RegistrationSlice.reducer;

