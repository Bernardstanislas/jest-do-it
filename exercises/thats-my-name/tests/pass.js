const React = require('react')
const PropTypes = require('prop-types')

class Person extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      age: this.props.age
    }
  }

  componentDidMount () {
    setTimeout(() => this.setState({
      age: this.state.age + 1
    }, () => {
      this.props.onAgeChange(this.state.age)
    }), 10)
  }

  render () {
    const {name} = this.props
    const {age} = this.state

    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
      </div>
    )
  }
}

Person.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onAgeChange: PropTypes.func
}

module.exports = Person
