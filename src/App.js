import './App.css'
import { useState } from 'react'
import mockdata from './data/mockdata.json'
import DataTransformer from './components/DataTransformer'
import RadioButton from './components/RadioButton'
import Tree from './components/Tree'
import PostItem from './components/PostItem'
import PostEditor from './components/PostEditor'

function App() {
  const [group, setGroup] = useState('week')
  const [post, setPost] = useState({})
  const [show, setShow] = useState(false)
  const [dataset, setDataset] = useState(mockdata)

  const onRadioButtonClick = (value) => setGroup(value)

  const onLeafNodeSelect = ({treeNode, showNode}) => {
    setPost(treeNode)
    setShow(showNode)
  }

  const onLiveEdit = (treeNode) => {
    setPost(treeNode)
    const synced = syncData(mockdata, treeNode)
    return setDataset(synced)
  }

  const syncData = (mockdata, treeNode) => {
    if (!!treeNode && JSON.stringify(treeNode) !== JSON.stringify({})){
      const index = treeNode.id - 1
      mockdata[index] = treeNode
      return mockdata
    }
    return mockdata
  }

  return (
    <div id='app'>
      <div className='panel-wrapper-left'>
        <RadioButton callback={onRadioButtonClick} group={group} />
        <Tree posts={DataTransformer(dataset, group)} callback={onLeafNodeSelect} />
      </div>

      <div className='panel-wrapper-right'>
        <PostItem show={show} post={post} />
        <PostEditor show={show} post={post} callback={onLiveEdit} />
      </div>
    </div>
  )
}

export default App
