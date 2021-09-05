export const login = user => (
  $.ajax({
    url: `/api/sessions`,
    method: `POST`,
    data: {user}
  })
)

export const signup = user => (
  $.ajax({
    url: `/api/users`,
    method: `POST`,
    data: {user}
  })
)

export const logout = userId => (
  $.ajax({
    url: `/api/sessions/${userId}`,
    method: `DELETE`
  })
)