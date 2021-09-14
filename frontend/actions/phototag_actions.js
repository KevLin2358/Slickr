import * as PhototagApiUtil from '../util/phototag_api_util'

export const RECEIVE_ALL_PHOTOTAGS = "RECEIVE_ALL_PHOTOTAGS"

const receivePhototags = tags => ({
  type: RECEIVE_ALL_PHOTOTAGS,
  tags
});

export const fetchPhototags = tag_id => dispatch =>(
  PhototagApiUtil.fetchPhototags(tag_id)
  .then(
    res => dispatch(receivePhototags(res))
  )
)

export const createPhototag = phototag => dispatch =>(
  PhototagApiUtil.createPhototag(phototag)
  .then(
    res => dispatch(receivePhototags(res.tag_id))
  )
)