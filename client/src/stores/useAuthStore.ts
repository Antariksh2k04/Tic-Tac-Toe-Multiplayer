import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'


export const useAuthStore = create((set,get)=>({
    authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    
  }
}))