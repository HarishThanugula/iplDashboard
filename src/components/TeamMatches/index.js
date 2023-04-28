import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    teamMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchTeamMatchData()
  }

  fetchTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchesData: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(recentMatch => ({
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        matchStatus: recentMatch.match_status,
        result: recentMatch.result,
        id: recentMatch.id,
      })),
    }
    this.setState({teamMatches: updateData, isLoading: false})
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Rings" color="#1e293b" height={50} width={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {teamMatches} = this.state
    const {teamBannerUrl, latestMatchesData, recentMatches} = teamMatches
    return (
      <div className="team-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchesData} />
        <ul className="match-card-details">
          {recentMatches.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="teamMatch-container">
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
