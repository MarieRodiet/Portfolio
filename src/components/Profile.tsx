import profilePicture from '../assets/IMG/profile-picture.png'
import { profile } from '../data/profile'

type Props = {
  isEnglish: boolean
}
export default function Profile({ isEnglish }: Props) {
  return (
    <div className="profile" id="aboutme">
      <div className="profile-text">
        <h1 className="profile-text-name">{profile.name}</h1>
        {isEnglish ? (
          <div className="profile-text-intro">
            <p>Hi !</p>
            <p>
              {' '}
              {profile.anArray.map((item, index) => (
                <p className="pt-15" key={index}>
                  {item}
                </p>
              ))}
            </p>
          </div>
        ) : (
          <div className="profile-text-intro">
            <p>Bonjour !</p>
            <p>
              {' '}
              {profile.frArray.map((item, index) => (
                <p className="pt-15" key={index}>
                  {item}
                </p>
              ))}
            </p>
          </div>
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
