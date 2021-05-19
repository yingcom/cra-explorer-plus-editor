import { useState } from 'react'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import PropTypes from 'prop-types'
import TreeNode from './TreeNode'

function Tree (props) {
  const { posts, callback } = props

  const fields = Object.keys(posts)
  const keysMap = {}
  fields.map(el => {
    if (!keysMap.hasOwnProperty(el)) {
      keysMap[el] = false
    }
    return keysMap
  })

  const [isOpen, setIsOpen] = useState(keysMap)

  const onToggle = ({event, name}) => {
    return setIsOpen({
      ...isOpen,
      [name]: !isOpen[name]
    })
  }

  return (
    <div className='tree-wrapper'>
      { fields.map(name =>
        <div key={name}>
          <div className='tree-group'
            role='button'
            name={name}
            tabIndex={0}
            onClick={event => onToggle({event, name})}
            onKeyPress={event => {
              if (event.code === 'Enter' || event.code === 'Space') {
                return onToggle({event, name})
              }
            }}
          >
            { isOpen[name]
              ? <FaChevronDown className='tree-group-fa' />
              : <FaChevronRight className='tree-group-fa' />
            }
            <div className='tree-group-name'>{name}</div>
          </div>
          { isOpen[name] && <TreeNode leafNodes={posts[name]} callback={callback} /> }
        </div>
      )}
    </div>
  )
}

Tree.propTypes = {
  posts: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
}

export default Tree
