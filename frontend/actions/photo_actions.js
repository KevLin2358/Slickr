import * as PhotoApiUtil from '../util/photo_api_util'

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const EDIT_PHOTO = "EDIT_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

const receieveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
})
const receievePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
})

const editPhoto = photo => ({
  type: EDIT_PHOTO,
  photo
})

const removePhoto = () => ({
  type: REMOVE_PHOTO
})

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos()
  .then(
    res => dispatch(receieveAllPhotos(res))
  )
)

export const fetchPhoto = photo => dispatch => (
  PhotoApiUtil.fetchPhoto(photo)
  .then(
    res => dispatch(receievePhoto(res))
  )
)

export const createPhoto = photo => dispatch => (
  PhotoApiUtil.createPhoto(photo)
  .then(
    res => dispatch(receievePhoto(res))
  )
)

export const updatePhoto = photo => dispatch => (
  PhotoApiUtil.updatePhoto(photo)
  .then(
    res => dispatch(editPhoto(res))
  )
)

export const deletePhoto = id => dispatch => (
  PhotoApiUtil.deletePhoto(id)
  .then(
    res => dispatch(removePhoto(res))
  )
)
