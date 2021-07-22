import moment from 'moment'

const calcWeek = arr => arr.map(el => ({
  ...el,
  week: `${moment.unix(el.time).format('wo')} week`
}))

const groupBy = (arr, label) => {
  if (!Array.isArray(arr) || typeof label !== 'string') {
    throw Error('TypeError from function groupBy() in DataTransformer.js')
  }
  return arr.reduce((store, current) => {
    const key = current[label]
    if (!store.hasOwnProperty(key)) {
      store[key] = []
    }
    store[key].push(current)
    return store
  }, {})
}

const DataTransformer = (data, groupName) => {
  return groupBy(calcWeek(data), groupName) // { group1: [{}, {}, {}], group2: [{}] }
}

export default DataTransformer
