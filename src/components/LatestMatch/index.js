import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails
    return (
      <div className="match-container">
        <div className="match-details">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="detail">{venue}</p>
          <p className="detail">{result}</p>
        </div>
        <div>
          <div className="img-container">
            <img
              src={competingTeamLogo}
              alt={competingTeam}
              className="team-logo"
            />
          </div>
        </div>
        <div className="about-container">
          <p className="heading">First Innings</p>
          <p className="details">{firstInnings}</p>
          <p className="heading">Second Innings</p>
          <p className="details">{secondInnings}</p>
          <p className="heading">Man Of The Match</p>
          <p className="details">{manOfTheMatch}</p>
          <p className="heading">Umpires</p>
          <p className="details">{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
