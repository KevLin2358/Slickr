export const fetchPhotos = () => (
  $.ajax({
    url: `/api/photos`,
    method: `GET`
  })
)

export const fetchPhoto = photoId => (
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: `GET`
  })
)


export const createPhoto = photo => {
  return(
    $.ajax({
      url: `/api/users/${photo.get("photo[uploader_id]")}/photos`,
      method: `POST`,
      data: photo,
      contentType: false,
      processData: false
    })
  )
}

export const updatePhoto = photo => (
  $.ajax({
    url: `/api/photos/${photo.id}`,
    method: `PATCH`,
    data: photo
  })
)

export const deletePhoto = photoId => (
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: `DELETE`
  })
)