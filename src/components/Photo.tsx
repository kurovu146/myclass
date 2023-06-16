import { useState } from "react";

function Photo() {
  const photos = [
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/f667b4f0-3b1c-4ecd-802d-8713ed53ea95Brown%20Wood%20Minimalist%20Profile%20LinkedIn%20Banner.png?alt=media&token=c99adc44-7c08-4494-881a-5ca3a2484c58'},
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/f667b4f0-3b1c-4ecd-802d-8713ed53ea95Brown%20Wood%20Minimalist%20Profile%20LinkedIn%20Banner.png?alt=media&token=c99adc44-7c08-4494-881a-5ca3a2484c58'},
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/f667b4f0-3b1c-4ecd-802d-8713ed53ea95Brown%20Wood%20Minimalist%20Profile%20LinkedIn%20Banner.png?alt=media&token=c99adc44-7c08-4494-881a-5ca3a2484c58'},
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/f667b4f0-3b1c-4ecd-802d-8713ed53ea95Brown%20Wood%20Minimalist%20Profile%20LinkedIn%20Banner.png?alt=media&token=c99adc44-7c08-4494-881a-5ca3a2484c58'},
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/f667b4f0-3b1c-4ecd-802d-8713ed53ea95Brown%20Wood%20Minimalist%20Profile%20LinkedIn%20Banner.png?alt=media&token=c99adc44-7c08-4494-881a-5ca3a2484c58'},
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/f667b4f0-3b1c-4ecd-802d-8713ed53ea95Brown%20Wood%20Minimalist%20Profile%20LinkedIn%20Banner.png?alt=media&token=c99adc44-7c08-4494-881a-5ca3a2484c58'},
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/f667b4f0-3b1c-4ecd-802d-8713ed53ea95Brown%20Wood%20Minimalist%20Profile%20LinkedIn%20Banner.png?alt=media&token=c99adc44-7c08-4494-881a-5ca3a2484c58'},
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/avatar.jpeg?alt=media&token=d115eb9f-3edb-4c37-a49b-831b899f27e2'},
    {link: 'https://firebasestorage.googleapis.com/v0/b/free-to-earn-80166.appspot.com/o/f667b4f0-3b1c-4ecd-802d-8713ed53ea95Brown%20Wood%20Minimalist%20Profile%20LinkedIn%20Banner.png?alt=media&token=c99adc44-7c08-4494-881a-5ca3a2484c58'},
  ];

  const [isOpened, setIsOpen] = useState(false);
  const [selectedPhoto, selectePhoto] = useState({ link: ''});

  function handleOnClick(photo: any) {
    setIsOpen(!isOpened)
    selectePhoto(photo)
  }

  return ( 
    <div>
      <div className={` bg-white fixed top-10 left-0 right-0 bottom-0 ${isOpened ? 'z-50' : '-z-10'}`}>
        <button onClick={() => handleOnClick('cut')}>[ X ]</button>
        <img src={selectedPhoto.link} />
      </div>
      <div className="flex grid grid-cols-4 justify-items-center">
        {photos.map((photo, index) => (
          <div key={index} style={{cursor: 'pointer'}} onClick={() => handleOnClick(photo)}>
            <img src={photo.link} alt="icon" style={{margin: 'auto'}}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photo;