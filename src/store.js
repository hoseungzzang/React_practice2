import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


let cartData = createSlice({

        name : 'cartData',
        initialState : [
          {id : 0, name : 'White and Black', count : 2}
          ,{id : 2, name : 'Grey Yordan', count : 1}
        ],
        reducers : {
          plusCnt(state ,action){
            let i = state.find(state=> state.id == action.payload)
            i.count++;
          },
          plusThing(state,action){
            console.log(action.payload)
            let arr = {
              id : action.payload.id,
              name : action.payload.title,
              count : 1  
            };
            state.push(arr);
          }
        }
        
    
      
    })


  export let {plusCnt,plusThing} = cartData.actions


  
let search = createSlice({
  name : 'search',
  initialState : JSON.parse(localStorage.getItem('item')) == null?[]:[JSON.parse(localStorage.getItem('item'))],
  reducers : {
    setItem(state,action){
      console.log(action.payload);
      state.push(action.payload);
      console.log(state);
    }
  }
})
export let {setItem} = search.actions
export default configureStore({
  reducer: { 
    //reducer 붙여줘야함.
    user : user.reducer,
    cartData : cartData.reducer,
    search : search.reducer
  }
}) 