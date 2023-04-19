import './index.css'
import {Loader} from 'react-loader-spinner'
import {Component} from 'react'

class TeamMatches extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.fetchTeamMatchData()
  }

  fetchTeamMatchData = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    console.log(params)
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="teamMatch-container">
        {isLoading ? (
          <div data-testId="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderMatchesView()
        )}
      </div>
    )
  }
}

export default TeamMatches
