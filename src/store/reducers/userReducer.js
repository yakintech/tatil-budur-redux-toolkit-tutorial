import { createAction, createReducer } from "@reduxjs/toolkit"



const initialState = {
    users: []
}


export const addNewUser = createAction("user/add")
export const deleteUser = createAction("user/delete")


export const userReducer = createReducer(initialState, (builder) => {

    //yeni user ekleme
    builder
        .addCase(addNewUser, (state, action) => {
            state.users.push(action.payload)
        })

    //user silme işlemi
    builder
        .addCase(deleteUser, (state, action) => {
            state.users = state.users.filter(q => q.id != action.payload)
        })
        
})