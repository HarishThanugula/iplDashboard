import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <li className="matchCard-container">
      <div>
        <img src={competingTeamLogo} alt={competingTeam} className="image" />
        <p className="name">{competingTeam}</p>
      </div>
      <p className="result">{result}</p>
      <p className="result-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
