import React from 'react'
import BaseService from './BaseService'
import { Comment } from '../core'
import Axios from 'axios'
import { convertToCommentsArray } from '../configs/Function'

class CommentService extends BaseService<Comment> {
  constructor() {
    super()
    this.baseURL += 'comments/'
  }

  getByPostId(postId: number): Promise<Comment[]> {
    return Axios.get(this.baseURL + `?post_id=${postId}`)
      .then((res) => {
        const comments = convertToCommentsArray(res.data)
        return comments
      })
      .catch((err) => {
        console.log(err)
        return []
      })
  }

  addComment(postId: number, content: string): Promise<string> {
    const data = { post_id: postId, content: content }
    return Axios.post(this.baseURL, data)
      .then((res) => {
        return 'success'
      })
      .catch((err) => {
        console.log(err)
        return 'error'
      })
  }
}

export const commentService = new CommentService()
