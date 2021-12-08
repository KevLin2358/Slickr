export const fetchComments = () => (
  $.ajax({
    url: `/api/comments`,
    method: `GET`
  })
)

export const fetchComment = commentId => (
  $.ajax({
    url: `/api/comment/${commentId}`,
    method: `GET`
  })
)

export const createComment = comment => {
  return(
    $.ajax({
      url: `/api/comments`,
      method: `POST`,
      data: {comment}
    })
  )
}

export const deleteComment = id => (
  $.ajax({
    url: `/api/comments/${id}`,
    method: `DELETE`
  })
)