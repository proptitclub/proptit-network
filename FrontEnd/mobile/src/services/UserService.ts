import BaseService from './BaseService'
import { User } from '../core'
import Axios from 'axios'
import { convertToUserType } from '../configs/Function'

class UserService extends BaseService<User> {
  constructor() {
    super()
    this.baseURL += 'auth/users/me/'
  }

  getUserById(id: number): Promise<User> {
    return Axios.get(this.baseURL.slice(0, -3) + `${id}/`)
      .then((res) => {
        const user = convertToUserType(res.data)
        return user
      })
      .catch((err) => {
        console.log(err)
        throw err
      })
  }
}

export const userService = new UserService()
