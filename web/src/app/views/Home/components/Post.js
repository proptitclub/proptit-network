import React from 'react'
import styled from 'styled-components'

import { Comment } from 'tabler-react'

import { Icon, Card, CardBody, CardFooter } from 'ui'
import { TickPoll } from '../../../../packages/ui/components/Post/TickPoll/TickPoll'

export const Post = ({
  id,
  children,
  content,
  avatarUrl,
  img = '',
  imgAlt = '',
  name,
  username,
  avatarImg = '',
  iconHref,
  postHref,
  profileHref = '',
  comments,
  likeCount,
  commentCount,
  type,
  listPoll = []
}) => {
  return (
    <Card>
      <div className='d-flex pt-5 mt-auto pl-5'>
        <div className='avatar avatar-md mr-3' style={{ overflow: 'hidden' }}>
          <img src={avatarImg} />
        </div>
        <div>
          <a href={profileHref} className='text-default'>
            {name}
          </a>
          <small className='d-block text-muted'>
            <strong>{username}</strong>
          </small>
          <div className='d-flex flex-column pt-5 pb-5'>
            {/* <h4>
          <a href={postHref}>{title}</a>
        </h4> */}
            {/* <div className='text-muted'>{content}</div> */}
            <Span>{content}</Span>
          </div>

          <div className="tickPoll">
            {type === 1 && <TickPoll listPoll={listPoll} postId={id} />}
          </div>

          <ImageWrapper>
            <Img className='card-img-top' src={img} alt={imgAlt} />
          </ImageWrapper>
          <CardBottom className='d-flex ml-auto text-muted pt-2 pb-5'>
            <div className='icon d-none d-md-inline-block ml-3'>
              <Icon prefix='fe' name={'heart'} /> {likeCount}
            </div>
            <div className='icon d-none d-md-inline-block ml-3'>
              <Icon prefix='fa' name={'comment-o'} /> {commentCount}
            </div>
            <div className='icon d-none d-md-inline-block ml-3'>
              <Icon prefix='fe' name={'external-link'} />
            </div>
          </CardBottom>

          {/* <div className='pb-5'></div> */}
        </div>
      </div>
      {commentCount > 0 && (
        <CardFooter>
          <Comment.List>
            {comments.map(({ name, date, text, avatarURL, replies }) => (
              <Comment
                avatarURL={avatarURL}
                name={name}
                date={date}
                text={text}
                replies={
                  replies && (
                    <React.Fragment>
                      {replies.map(({ name, avatarURL, text, date }) => (
                        <Comment.Reply
                          name={name}
                          avatarURL={avatarURL}
                          text={text}
                          date={date}
                        />
                      ))}
                    </React.Fragment>
                  )
                }
              />
            ))}
          </Comment.List>
        </CardFooter>
      )}
    </Card>
  )
}

const Span = styled.span`
  max-width: 550px;
`

const Img = styled.img`
  max-width: 550px;
  max-height: 550px;
`

const ImageWrapper = styled.div`
  margin: auto;
`

const CardBottom = styled.div`
  justify-content: space-evenly;
`
