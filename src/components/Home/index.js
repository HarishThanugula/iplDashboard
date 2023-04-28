import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoader: true,
  }

  componentDidMount() {
    this.fetchDashBoardData()
  }

  fetchDashBoardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchData = await response.json()
    console.log(fetchData)

    const updatedData = fetchData.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImgUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedData, isLoader: false})
  }

  render() {
    const {teamsList, isLoader} = this.state

    return (
      <div className="bg-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="main-logo"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
          </div>
        )}
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
