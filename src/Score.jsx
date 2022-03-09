import { Component } from "react"

export default class Score extends Component {
  render() {
    return (
      <div>
        <p>{this.props.date} : {this.props.score}</p>
      </div>
    )
  }
}