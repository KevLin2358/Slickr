export const fetchPhototags = tagId => (
  $.ajax({
    url:`/api/phototags`,
    method: 'GET',
    data: {tag_id: tagId}
  })
)

export const createPhototag = phototag => {
  return(
    $.ajax({
      url: `/api/phototags`,
      method: `POST`,
      data: {phototag}
    })
  )
}