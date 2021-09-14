import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS"
export const RECEIVE_TAG = "RECEIVE_ALL_TAG"

const recieveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
})

const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
})

export const fetchTags = () => dispatch (
  TagApiUtil.fetchTags()
  .then(
    res => dispatch(recieveAllTags(res))
  )
)

export const fetchTag = tag => dispatch (
  TagApiUtil.fetchTag(tag)
  .then(
    res => dispatch(receiveTag(res))
  )
)

export const createTag = tag => dispatch(
  TagApiUtil.createTag(tag)
  .then(
    res => dispatch(receiveTag(res))
  )
)