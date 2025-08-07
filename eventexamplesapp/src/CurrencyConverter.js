import React, { Component } from 'react'

class CurrencyConverter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: '',
      currency: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { amount, currency } = this.state
    if (currency.toLowerCase() === 'euro') {
      const result = parseFloat(amount) * 80 
      alert(`Converting to Euro Amount is ${result}`)
    } else {
      alert('Unsupported currency or empty input')
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Currency:
            <input
              type="text"
              name="currency"
              value={this.state.currency}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default CurrencyConverter
