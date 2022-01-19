import * as CommentApiUtil from '../util/comment_api_util'

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
})

const removeComment = () => ({
  type: REMOVE_COMMENT
})

export const fetchComments = () => dispatch => (
  CommentApiUtil.fetchComments()
  .then(
    res => dispatch(receiveAllComments(res))
  )
)

export const fetchComment = (commentId) => dispatch => (
  CommentApiUtil.fetchComment(commentId)
  .then(
    res => dispatch(receiveComment(res))
  )
)

export const createComment = (comment) => dispatch =>(
  CommentApiUtil.createComment(comment) 
  .then(
    res => dispatch(receiveComment(res))
  )
)

export const updateComment = comment => dispatch => (
  CommentApiUtil.updateComment(comment)
  .then(
    res => dispatch(editComment(res))
  )
)

export const deleteComment = (id) => dispatch => (
  CommentApiUtil.deleteComment(id)
  .then(
    res => dispatch(removeComment(res))
  )
)