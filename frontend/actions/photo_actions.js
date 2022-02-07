import * as PhotoApiUtil from '../util/photo_api_util'

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const EDIT_PHOTO = "EDIT_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const REMOVE_PHOTO_ERRORS = 'REMOVE_PHOTO_ERRORS';


const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
})
const receivePhoto = photo => ({
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

export const receivePhotoErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
})

export const removePhotoErrors = () => ({
  type: REMOVE_PHOTO_ERRORS
})

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos()
  .then(
    res => dispatch(receiveAllPhotos(res))
  )
)

export const fetchPhoto = photo => dispatch => (
  PhotoApiUtil.fetchPhoto(photo)
  .then(
    res => dispatch(receivePhoto(res))
  )
)

export const createPhoto = photo => dispatch => (
  PhotoApiUtil.createPhoto(photo)
  .then(
    res => dispatch(receivePhoto(res)),
    errors => dispatch(receivePhotoErrors(errors.responseJSON))

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
