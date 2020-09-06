import { Dispatch } from 'redux'
import { NewsfeedAction, Post } from '../types/newfeed.types'
import { GroupAction, LOAD_GROUP_SUCCESS } from '../types/group.types'

export const getGroups = (userID: string) => {
  return (dispatch: Dispatch<GroupAction>) => {
    dispatch({
      type: LOAD_GROUP_SUCCESS,
      groups: [{ name: 'Chung' }, { name: 'D17' }, { name: 'Android' }],
    })
  }
}
