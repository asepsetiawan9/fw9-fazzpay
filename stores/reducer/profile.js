import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../actions/profile';

const initialState = {
    value:[],
    balance:{},
    email:'',
    data:{},
    successmsg:''
  }

export const profile = createSlice({
    name:'profile',
    initialState,
    reducers:{
      balance:(state,action)=>{
        state.balance=action.payload
      },
      loginemail:(state,action)=>{
        state.email=action.payload
      }
    },
    extraReducers:(build)=>{
      build.addCase(getProfile.pending,(state)=>{
        state.value=null
      })
      build.addCase(getProfile.fulfilled,(state,action)=>{
        state.value=action.payload
      })
    }
  })
  