import { useNavigate } from 'react-router-dom';
import '../styles/Member.scss';

function Member() {
  let navigate = useNavigate();

  const members = [
    {
      name: 'Vu Duc Tuan',
    },
    {
      name: 'Nguyen Thi Uyen Nhi',
    },
    {
      name: 'Nguyen Duc Trung Nguyen',
    },
    {
      name: 'Nguyen Duc Trung Nguyen',
    },
    {
      name: 'Nguyen Duc Trung Nguyen',
    },
    {
      name: 'Nguyen Duc Trung Nguyen',
    },
    {
      name: 'Vu Duc Tuan',
    },
    {
      name: 'Vu Duc Tuan',
    },
    {
      name: 'Vu Duc Tuan',
    }
  ];

  function handleOnClick(member: any) {
    navigate('/memberdetail');
  }

  return ( 
    <div style={{height: '100vh'}}>
      <div className="title">❤️ Members ❤️</div>
      <div className="wrapper-member grid">
        {members.map((member, index) => (
          <div key={index} style={{cursor: 'pointer'}} onClick={() => handleOnClick(member)}>
            <img src="dragon-folder.png" alt="icon" style={{margin: 'auto'}}/>
            <div className='member'>❤️ {member.name} ❤️</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Member;