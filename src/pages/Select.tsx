import { useNavigate } from 'react-router-dom';
import '../styles/Select.scss';

const classList = [
  {
    className: "12A",
    size: 36
  },
  {
    className: "12B",
    size: 36
  },
  {
    className: "12C",
    size: 36
  },
  {
    className: "12D",
    size: 36
  },
  {
    className: "12E",
    size: 36
  },
  {
    className: "12E",
    size: 36
  },
  {
    className: "12F",
    size: 36
  }
]
function Select() {
  let navigate = useNavigate();

  function handleOnClick(item: any) {
    console.log('clicked', item);
    
    navigate('/');
  } 

  return (
    <div>
      <div style={{fontSize: "2em"}}>Choose your class</div>
      <div className="flex grid grid-cols-3 justify-items-center">
        {classList.map((item, index) => (
          <div key={index} style={{display: 'flex', cursor: 'pointer'}} onClick={() => handleOnClick(item)}>
            <img src="folder.png" alt="folder" />
            <div className='folder-name'>{item.className}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select;