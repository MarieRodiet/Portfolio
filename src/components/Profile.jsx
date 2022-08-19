import profilePicture from '../assets/IMG/profile-picture.png'
export default function Profile() {
  return (
    <div className="profile" id="aboutme">
      <div className="profile-text">
        <h1 className="profile-text-name">Marie Moore</h1>
        <p className="profile-text-intro">
          Hello! I am a front-end web developper committed to building products
          that improve the world in a positive and meaningful way. I have
          experience with frontend web technologies and UX/UI Design. Please
          feel free to contact me directly via email or the social network of
          your choice. Thanks for visiting!
        </p>
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
