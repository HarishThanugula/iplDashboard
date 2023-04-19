import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsList: [],
  }

  componentDidMount() {
    this.fetchDashBoardData()
  }

  fetchDashBoardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchData = await response.json()

    const updatedData = fetchData.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImgUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedData})
  }

  render() {
    const {teamsList} = this.state

    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="main-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="teamCard-container">
          {teamsList.map(eachTeam => (
            <TeamCard eachTeamDetails={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
