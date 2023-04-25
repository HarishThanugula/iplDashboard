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

  fetchTeamMatchData = () => {
    console.log(this.props)
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
