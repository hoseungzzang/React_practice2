import { createSlice } from '@reduxjs/toolkit'

//useState와 같은 용도
let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
      userUpdate(state){
        console.log(state)
        return 'john Kim'
      },
      func(){

      }
    }
})

export let {userUpdate} = user.actions
export default user