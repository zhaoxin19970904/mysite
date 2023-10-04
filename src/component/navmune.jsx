import React, { useEffect, useState } from 'react';
import '../App.css';

function WindmillNav() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 100);  // Adjust this value to control the rotation speed
    return () => clearInterval(interval);
  }, []);

  const radius = 85;  // Set the radius of the circle
  const itemCount = 5;  // Set the number of items
  const items = [];
  for (let i = 0; i < itemCount; i++) {
    const angle = ((360 / itemCount) * i + rotation) * (Math.PI / 180);
    const x = 50 + radius * Math.cos(angle) + '%';
    const y = 50 + radius * Math.sin(angle) + '%';
    items.push(
      <div className="item" style={{ left: x, top: y, transform: `translate(-50%, -50%) ` }} key={i}>
        <a href={`/${['about', 'contact', 'education', 'project', 'work'][i]}`} className="link">
          {['More / Skills', 'Contact', 'Education', 'Projects', 'Work / Reference'][i]}
        </a>
      </div>
    );
  }

  return (
    <div className='homePage'>
      <div className='homeleft'>
        <h1 className='welcome'>Wecome to my Page</h1>
        <br/>
        <h3>Name: Bob </h3>
        <h3>Legal Name: Xin Zhao</h3>
        <h3>Gender: Male</h3>
        <h3>Date of birth:1997-08-29</h3>
        <h3>Vocation: Web Developer</h3>
        <h3>E-mail: bobxin.zhao@gmail.com</h3>
        <h3>Phone: 647-878-7595</h3>
        <h3>Summary: </h3>
        <p>Detail-oriented and innovative Web Developer with a Bachelor’s in 
          Mathematics & Computer Science and an Associate of Science in Database 
          Application Developer, specializing in both front-end and back-end 
          development technologies and frameworks.</p>
        <h3>More Information: please click ===&gt; </h3>
        <a href='/about'>More</a>
      </div>
      <div className='homeright'>
        <img src="./img/mousewheel.gif" className='wheel img' alt='wheel'/>
        <div className="windmill-nav">
          {items}
        </div>
      </div>
    
    </div>
  );
}

export default WindmillNav;
