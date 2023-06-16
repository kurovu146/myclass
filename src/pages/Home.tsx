import { useNavigate } from "react-router-dom";
import '../styles/Home.scss';

function Home() {
  let navigate = useNavigate();

  const classes = {
    name: '12A'
  };

  function handleOnClick(value: any) {
    navigate('/' + value);
  }
  
  return (
    <div className="home">
      <div className="title text-center">
        ❤️ {classes.name} ❤️
      </div>
      <div className="content">
        <div className="left-content">
          <div className="item" onClick={() => handleOnClick('members')}>Members</div>
          <div className="item" onClick={() => handleOnClick('events')}>Events</div>
        </div>
        <div className="center-content">Content</div>
        <div className="right-content">
          <div className="item" onClick={() => handleOnClick('yours')}>Yours</div>
          <div className="item" onClick={() => handleOnClick('fund')}>Fund</div>
        </div>
      </div>
    </div>
  );
}

export default Home;