import {Dispatch} from 'redux';
import {
  LOAD_NEWFEED_SUCCESS,
  NewFeedAction,
  NewFeed
} from '../types/newfeed.types';

export const getNewFeeds = (groupID: String) => {
  return (dispatch: Dispatch<NewFeedAction>) => {
    var list: NewFeed[] = [];
    list.push({content: "Hello World"});
    list.push({content: "Hello I'm Cong Khanh"});
    dispatch({type: LOAD_NEWFEED_SUCCESS, newfeeds: list});
  }
}