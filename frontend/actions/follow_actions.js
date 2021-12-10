import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";


const receiveAllFollows = follows => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows
})

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})

const removeFollow = followId => ({
  type: REMOVE_FOLLOW, 
  followId
})

export const fetchFollows= () => dispatch => (
  FollowApiUtil.fetchFollows()
  .then(
    res => dispatch(receiveAllFollows(res))
  )
)

export const createFollow = follow => dispatch =>(
  FollowApiUtil.createFollow(follow)
  .then(
    res => dispatch(receiveFollow(res))
  )
)

export const deleteFollow = id => dispatch => (
  FollowApiUtil.deleteFollow(id)
  .then(
    res => dispatch(removeFollow(res))
  )
)