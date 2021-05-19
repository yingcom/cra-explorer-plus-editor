import PropTypes from 'prop-types'

function TreeNode (props) {
  const { leafNodes, callback } = props
  return (
    <div className='node-wrapper'>
      { leafNodes.map((node, index) =>
        <div key={index} className='node-item'
          role='button'
          tabIndex={0}
          onClick={ event => callback({treeNode: node, showNode: true})}
          onKeyPress={event => {
            if (event.code === 'Enter' || event.code === 'Space') {
              return callback({treeNode: node, showNode: true})
            }}
          }
        >
          <span>Post {node.id}</span>
        </div>
      )}
    </div>
  )
}

TreeNode.propTypes = {
  leafNodes: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired
}

export default TreeNode
