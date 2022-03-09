import { Component } from "react"
import Score from "./Score"

export default class Student extends Component {
  render() {
    const renderedScores = this.props.scores.map((score, idx) => {
      return (
        <Score 
          key={`aerkdfego;iw45ht6[piohgfv'aSd;lf-${idx}`}
          score={score.score}
          date={score.date}
        />
      )
    })

    return (
      <div>
        <h1>{this.props.name}</h1>

        <p>{this.props.bio}</p>

        {renderedScores}
      </div>
    )
  }
}