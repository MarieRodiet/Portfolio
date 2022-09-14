import { PropTypes } from 'prop-types'
import profilePicture from '../assets/IMG/profile-picture.png'
import { profile } from '../data/profile'

export default function Profile({ isEnglish }) {
  return (
    <div className="profile" id="aboutme">
      <div className="profile-text">
        <h1 className="profile-text-name">{profile.name}</h1>
        {isEnglish ? (
          <p className="profile-text-intro">{profile.an}</p>
        ) : (
          <p className="profile-text-intro">{profile.fr}</p>
        )}
      </div>
      <div className="profile-imgContainer">
        <img
          className="profile-imgContainer-picture"
          src={profilePicture}
          alt="Marie Moore profile"
        />
      </div>
    </div>
  )
}
Profile.propTypes = {
  isEnglish: PropTypes.bool,
}
