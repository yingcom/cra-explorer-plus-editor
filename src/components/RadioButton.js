import PropTypes from 'prop-types'

function RadioButton (props) {
  const { group, callback } = props
  const fields = ['week', 'author', 'location']

  const RadioButtonEventHandler = (event) => {
    const { value } = event.target
    return callback(value)
  }

  return (
    <div className='button-wrapper'>
      { fields.map((field, index) => (
        <label
            key={field}
            htmlFor={`sid-${index}`}
            className='button-label'>
          <input
            type='radio'
            name='fields'
            id={`sid-${index}`}
            checked={field === group}
            value={field}
            onChange={RadioButtonEventHandler}
          />
          <span className='button-text'>{field}</span>
        </label>
      ))}
    </div>
  )
}

RadioButton.propTypes = {
  group: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}

export default RadioButton