import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axios";

export const getHistory = createAsyncThunk('/transaction/history?page=1&limit=10', async (token)=>{
    const result = {};
    try {
      const { data } = await axios({headers: {'Authorization': `Bearer ${token}`}}).get('/transaction/history?page=1&limit=10');
      return data;
    } 
    catch (error) {
      result.message = error.response.data?.message;
      return result;
    }
  });