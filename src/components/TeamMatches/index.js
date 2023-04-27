import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
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
        result: data.latestMatchesData.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(recentMatches => ({
        competingTeam: recentMatches.competing_team,
        competingTeamLogo: recentMatches.competing_team_logo,
        matchStatus: recentMatches.match_status,
        result: recentMatches.result,
      })),
    }
    this.setState({teamMatches: updateData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatches} = this.state
    console.log(teamMatches)
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="teamMatch-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#1e293b" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
