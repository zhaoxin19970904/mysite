import React from 'react';
import '../App.css';

function AboutPage() {
  return (
    <div className='aboutPage'>
      
      
      <div className='aright'>
      <div className='photob'>
      <img className='photo' src='./img/photo.jpg' alt="photo1" />
      </div>
      <h1>More Informantion: </h1>
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
        <p> Leveraging extensive education and professional experience to create 
          and optimize user-friendly, high-performance websites and web applications. 
          7 years of coding experience studying and working in multiple languages and 
          practical projects. Proficient in a range of programming languages and technologies, 
          including HTML5, CSS3, and JavaScript, with a deep understanding of various 
          development tools and platforms. Exhibiting strong analytical and problem-solving 
          skills to assess and optimize software and database performance, integration, and 
          security, ensuring the delivery of high-quality, secure application solutions. 
          Adept at collaborating with cross-functional teams and clients to align software 
          solutions with business goals and user needs, demonstrating commitment to 
          elevating user experience and customer engagement through innovative feature 
          development / implementation. Passionate about acquiring and applying advanced 
          networking technologies through continuous learning, demonstrating proficiency 
          in both broad-based and specialized knowledge areas. Self-motivated and committed 
          to personal development, with a focus on mastering network technology and sharing 
          acquired insights and knowledge through informal teaching and practical application. </p>
      
      <h1>Skills: </h1>
      <h3>Platform: </h3><p> Azure/AWS Deployment</p>
      <h3>Front-end development: </h3> <p>HTML5, CSS3, JavaScript (ES6), jQuery, React.js, Vue3 </p>
      <h3>Back-end development: </h3> <p>NodeJS, ExpressJS, SpringBoot(Java), Django(Python) </p> 
      <h3>Version Control: </h3> <p> Git, GitHub, RESTful APIs and Web Services</p>
      <a href='./Xin-Zhao-Resume.pdf' download="Resume-of-Bob"><h1>Download My Resume</h1></a>
      </div>
    </div>
  );
}

export default AboutPage;