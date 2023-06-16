import { useNavigate } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  let navigate = useNavigate();

  function handleOnClick() {
    navigate('/');
  }

  return (
    <div className="header">
      <img src="dragon.png" alt="logo" className='logo' onClick={handleOnClick}/>
      <div style={{display: 'flex'}}>
        <img src="noti.png" alt="notification" className='notification'/>
        <img src="option.png" alt="option" className='option'/>
      </div>
    </div>
  );
}

export default Header;