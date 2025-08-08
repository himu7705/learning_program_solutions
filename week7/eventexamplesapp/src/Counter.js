import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
    this.sayHello()
  }

  sayHello = () => {
    alert('Hello! You clicked Increment button.')
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  sayWelcome = (message) => {
    alert(message)
  }

  handleSyntheticEvent = (event) => {
    alert('I was clicked')
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button><br />
        <button onClick={this.decrement}>Decrement</button><br />
        <button onClick={() => this.sayWelcome('Welcome!')}>Say welcome</button><br />
        <button onClick={this.handleSyntheticEvent}>Click on me</button><br /><br />
      </div>
    )
  }
}

export default Counter
