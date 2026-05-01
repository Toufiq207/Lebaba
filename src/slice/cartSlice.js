import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cart: (state,action) => {


// console.log(state.value);

let alldata=state.value.find(item=>item.name===action.payload.name)

if(alldata){
    alldata.quantity+=1
}else{
state.value.push({...action.payload,quantity:1})
}
// console.log( action.payload.name)


    },
    increment: (state,action) => {

state.value.map(item=>{
  if(item.name==action.payload.name){
    item.quantity+=1
  }
})
// console.log(action.payload);



    },
    decrement: (state,action) => {

state.value.map(item=>{
  if(item.name==action.payload.name){

    if(item.quantity>1){
    item.quantity-=1
    }
  }
})
// console.log(action.payload);



    },
    removeItem: (state,action) => {

state.value.map((item,index)=>{
 if(item.name==action.payload.name){

    state.value.splice(index,1)
    
  }
})

    },
    removeAll: (state,action) => {
      state.value=[]



    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const {cart,increment, decrement, removeItem,   removeAll} = cartSlice.actions

export default cartSlice.reducer