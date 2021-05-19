import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function PostEditor (props) {
  const { show, post, callback } = props

  const [inputs, setInputs] = useState({
    author: '',
    location: ''
  })

  useEffect(() => {
    return setInputs({
      author: post.author,
      location: post.location
    })
  }, [post])

  const onEdit = (event) => {
    const name = event.target.name
    const value = event.target.value
    post[name] = value
    return setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    for (let p in inputs) {
      inputs[p] = inputs[p].trim()
    }
    return callback({
      ...post,
      ...inputs
    })
  }

  if (!show) return null

  return (
    <form className='editor-wrapper'>
      <div className='editor-header'>Live Editor (Reset to the original data by refreshing the browser.)</div>
        <label htmlFor='edit-author' className='editor-row'>
          <span className='editor-col-0'>Author</span>
          <input className='editor-col-1'
            type="text"
            name="author"
            id='edit-author'
            value={post.author}
            onChange={event => onEdit(event)} />
        </label>
        <label htmlFor='edit-location' className='editor-row'>
          <span className='editor-col-0'>Location</span>
          <input className='editor-col-1'
            type="text"
            name="location"
            id='edit-location'
            value={post.location}
            onChange={event => onEdit(event)} />
        </label>
        <span className='editor-row'>
          <button className='editor-btn'
            type='submit'
            tabIndex={0}
            onClick={event => onSubmit(event)}
            onKeyPress={event => {
              if (event.code === 'Enter' || event.code === 'Space') {
                return onSubmit(event)
              }
            }}
          >
            <span>Update</span>
          </button>
        </span>
    </form>
  )
}

PostEditor.propTypes = {
  show: PropTypes.bool.isRequired,
  post: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
}

PostEditor.defaultProps = {
  show: false,
  post: {}
}

export default PostEditor