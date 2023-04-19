import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {name, teamImgUrl, id} = eachTeamDetails

  return (
    <Link to={`/team-matches/${id}`} className="">
      <li className="team-card">
        <img src={teamImgUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
