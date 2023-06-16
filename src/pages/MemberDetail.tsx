import { useState } from "react";
import Photo from "../components/Photo";
import Profile from "../components/Profile";
import '../styles/MemberDetail.scss';

function MemberDetail() {
  const [status, setStatus] = useState('Profile');

  const tabs = [
    'Profile',
    'Photos',
  ]

  const member = {
    name: 'Vu Duc Tuan',
    nickname: 'Kuro',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse aliquid, enim est repudiandae dolor hic nihil suscipit sit laboriosam iure tenetur vitae? Esse neque accusamus inventore eaque. Eius, quae.',
    link: 'summon.jpeg'
  }

  function handleOnClick(value: any) {
    setStatus(value);
  }

  const css = 'cursor-pointer p-1 hover:bg-red-600 border border-red-600';

  return (
    <div style={{width: '100vw'}}>
      <div className="title">❤️ Member Detail ❤️</div>

      <div className="tab">
        {tabs.map((item, index) => (
          <div key={index} className={`${status === item ? 'bg-red-600' : ''} ${css}`} onClick={() => handleOnClick(item)}>{item}</div>
        ))}
      </div>

      {(status === 'Profile' ? <Profile member={member} /> : <Photo />)}
    </div>
  );
}

export default MemberDetail;