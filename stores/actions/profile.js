import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axios";

export const getProfile = createAsyncThunk('profile/getProfile', async (id)=>{
    const result = {}
    try {
      const { data } = await axios.get(`/user/profile/${id}`)
      return data
    } catch (error) {
      result.message = error.response.data?.message;
      return result
    }
  })