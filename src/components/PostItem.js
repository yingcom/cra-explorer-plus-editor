import moment from 'moment'
import PropTypes from 'prop-types'

function PostItem (props) {
  const { show, post } = props
  if (!show) return null

  return (
    <div className='post-wrapper'>
      <div className='post-row'>
          <span className='post-col-0'>Post ID</span>
          <span className='post-col-1'>{post.id}</span>
      </div>
      <div className='post-row'>
          <span className='post-col-0'>Time</span>
          <span className='post-col-1'>{moment.unix(post.time).format("YYYY-MM-DD hh:mm:ss")}</span>
      </div>
      <div className='post-row'> 
        <span className='post-col-0'>Author</span>
        <span className='post-col-1'>{post.author}</span>
      </div>
      <div className='post-row'>
        <span className='post-col-0'>Location</span>
        <span className='post-col-1'>{post.location}</span>
      </div>
      <div className='post-row'>
          <span className='post-col-0'>Text</span>
          <span className='post-col-1'>{post.text}</span>
        </div>
    </div>
  )
}

PostItem.propTypes = {
  show: PropTypes.bool.isRequired,
  post: PropTypes.object.isRequired
}

PostItem.defaultProps = {
  show: false,
  post: {}
}

export default PostItem
