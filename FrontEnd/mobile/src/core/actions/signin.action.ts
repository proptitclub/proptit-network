import { User, UserInfo } from './../types/user.types'
import { Dispatch } from 'redux'
import {
  SIGN_IN_PROGRESS,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SignInAction,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_PROGRESS,
} from '../types/signin.types'
import { signInService, authUserService } from '../../services'
import AsyncStorage from '@react-native-community/async-storage'
import { ImageFormData } from '../types'

export const signIn = (username: string, password: string) => {
  return async (dispatch: Dispatch<SignInAction>) => {
    dispatch({ type: SIGN_IN_PROGRESS })
    const authToken = await signInService.requestSignIn(username, password)
    const userData =
      authToken && (await signInService.getUserAfterAuth(authToken.access))
    if (userData) {
      dispatch({ type: SIGN_IN_SUCCESS, currentUser: userData, authToken })
    } else {
      dispatch({ type: SIGN_IN_ERROR })
    }
  }
}

export const autoSignIn = () => {
  return async (dispatch: Dispatch<SignInAction>) => {
    const tokenStr = await AsyncStorage.getItem('authToken')
    if (tokenStr) {
      const refreshToken = JSON.parse(tokenStr).refresh
      const authToken = await signInService.refreshToken(refreshToken)
      if (authToken) {
        const userData = await signInService.getUserAfterAuth(authToken.access)
        dispatch({ type: SIGN_IN_SUCCESS, currentUser: userData!, authToken })
      } else {
        dispatch({ type: SIGN_IN_ERROR })
      }
    } else {
      dispatch({ type: SIGN_IN_ERROR })
    }
  }
}

export const signOut = () => {
  return async (dispatch: Dispatch<SignInAction>) => {
    await AsyncStorage.multiRemove(['authToken', 'userData'])
    dispatch({ type: SIGN_OUT })
  }
}

export const updateUser = (userState: User, userData: UserInfo) => {
  return async (dispatch: Dispatch<SignInAction>) => {
    dispatch({ type: UPDATE_USER_PROGRESS })
    const status = await authUserService.updateUserInfo(userData)
    if (status === 'success') {
      const newUserData = { ...userState, userData }
      await AsyncStorage.setItem('userData', JSON.stringify(newUserData))
      dispatch({ type: UPDATE_USER_SUCCESS, currentUser: newUserData })
    } else {
      dispatch({ type: UPDATE_USER_FAILED })
    }
  }
}

export const updateAvatarUser = (userState: User, image: ImageFormData) => {
  return async (dispatch: Dispatch<SignInAction>) => {
    dispatch({ type: UPDATE_USER_PROGRESS })
    const userData = await authUserService.updateAvatar(image)
    if (userData) {
      const newUserData = { ...userState, ...userData }
      console.log(newUserData)
      await AsyncStorage.setItem('userData', JSON.stringify(newUserData))
      dispatch({ type: UPDATE_USER_SUCCESS, currentUser: newUserData })
    } else {
      dispatch({ type: UPDATE_USER_FAILED })
    }
  }
}