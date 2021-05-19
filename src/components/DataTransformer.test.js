import DataTransformer from './DataTransformer.js'

const testdata = [{
  "id": 101,
  "location": "San Francisco",
  "time": "1552657573",
  "author": "Happy User",
  "text": "Proper PDF conversion ensures that every element of your document remains just as you left it."
},
{
  "id": 102,
  "location": "San Francisco",
  "time": "1552571173",
  "author": "Happy User",
  "text": "The modern workplace is increasingly digital, and workflows are constantly evolving. "
},
{
  "id": 104,
  "location": "Sydney",
  "time": "1552563973",
  "author": "Happy Developer",
  "text": "An expectation of digital efficiency has become the norm in our daily lives"
}]

test('tranform dataset', () => {
  const received = DataTransformer(testdata, 'author')
  const predicted = {
    'Happy User': [
      {
        id: 101,
        location: 'San Francisco',
        time: '1552657573',
        author: 'Happy User',
        text: 'Proper PDF conversion ensures that every element of your document remains just as you left it.',
        week: '11th week'
      },
      {
        id: 102,
        location: 'San Francisco',
        time: '1552571173',
        author: 'Happy User',
        text: 'The modern workplace is increasingly digital, and workflows are constantly evolving. ',
        week: '11th week'
      }
    ],
    'Happy Developer': [
      {
        id: 104,
        location: 'Sydney',
        time: '1552563973',
        author: 'Happy Developer',
        text: 'An expectation of digital efficiency has become the norm in our daily lives',
        week: '11th week'
      }
    ]
  }

  expect(received).toEqual(predicted)

  const keys = Object.keys(received)
  expect(keys).toContain("Happy User")
  expect(keys).toContain("Happy Developer")
  // expect(keys).toEqual(expect.arrayContaining(['Happy User', 'Happy Developer']))
})