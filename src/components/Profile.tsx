import '../styles/Profile.scss';

function Profile({ member }: any) {

  return (
    <div className="profile">
      <div style={{ display: 'flex' }}>
        <div className='wrapper'>

          <div className="avatar">
            <img src={member.link} alt="avatar" />
          </div>

          <div className='description'>
            <div className='main-info'>
              <div style={{ fontWeight: 'bold', paddingRight: '8px' }}>Name: </div> {member.name}
            </div>
            <div className='main-info'>
              <div style={{ fontWeight: 'bold', paddingRight: '8px' }}>Nickname: </div> {member.nickname}
            </div>
            <div>
              <div style={{ fontWeight: 'bold', paddingRight: '8px' }}>Description: </div> {member.description}
            </div>
          </div>

        </div>

        <div className='edit'>
          <img src="edit.gif" alt="edit" />
        </div>
      </div>

      <div className='sub-info'>
        <div>Birthday</div>
        <hr/>
        <div>Phone</div>
        <div>Major</div>
        <div>Pets</div>
        <div>Other</div>
      </div>
    </div>
  );
}

export default Profile;