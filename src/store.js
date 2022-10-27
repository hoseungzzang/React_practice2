import { configureStore, createSlice } from '@reduxjs/toolkit'

//useState와 같은 용도
let user = createSlice({
    name : 'user',
    initialState : 'kim'
})

let cartData = createSlice({

        name : 'cartData',
        initialState : [{id : 0, name : 'White and Black', count : 2},{id : 2, name : 'Grey Yordan', count : 1}]
        
    
      
    })


export default configureStore({
  reducer: { 
    //reducer 붙여줘야함.
    user : user.reducer,
    cartData : cartData.reducer
  }
}) 