import * as PhotoApiUtil from '../util/photo_api_util'

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

const receieveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
})
const receievePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
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