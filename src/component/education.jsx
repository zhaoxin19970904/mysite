import React from 'react';
import '../App.css';

function EducationPage() {
  return (
    <div className='educationPage'>
        <div className='elefttop'><a href='/home'>&lt; Home</a>
      <br/>
      <br/>
      <a href='/about'>&lt; About Me</a>
      <br/>
      <br/>
      <a href='/education'>&lt; Contact</a>
      <br/>
      <br/>
      <a href='/project'>&lt; Projects</a>
      <br/>
      <br/>
      <a href='/work'>&lt; Work and Reference</a>
      </div>
        <div className='eright'>

      <h1>Education Background:</h1>
      <h3>Bachelor of Science in Mathematics & Computer Science</h3>
      <h3>2021 | McMaster University - Hamilton, ON</h3>
      <br/>
      <img className='degree' src='./degree.jpg' alt='degree' />
      <br/>
      <h4>Mathematics: </h4>
      <p> Calculus | linear algebra | Statistics | Number Theory | R-code</p>
      <h4>Computer science: </h4>
      <p> Python | Java | C/C++ | Linux system | 
        Object-Oriented Programming | Algorithms | Discrete Math | OpenGL(C++) 
        | Human Computer Interfaces | Machine Learning | HTML5 | CSS3 | JavaScript | React.js
        </p>
        <br/>
      <p>
      Learned fundamental (Python, Java and C/C++) code and syntax. 
      Ability to optimize code by combining mathematical concepts, algorithms 
      and discrete mathematics. Have a basic understanding of front-end and 
      back-end database development and game development engines. Have a certain 
      expansion and understanding of new technologies in the field of modern 
      computer science.
      </p>
      <h3>Associate of Science, Database Application Developer</h3>
      <h3>2023 | Seneca College of Applied Arts & Technology, ON</h3>
      <br/>
      <img className='certificate' src='./certificate.jpg' alt='certificate' />
      <h4>Core Course: </h4> 
        <p>Database Design | Cloud Compute | Version Control | Advance Java | 
        SQL Adimstration and Management |
         Connectivity of Web Application | Web Programming (Node.js) | React.js | Accessing Big Data |
          Security in Database and Web Applications | Data Warehouse </p>
          <br/>
      <p>Successfully acquired advanced knowledge and skills in 
        various programming languages such as Java, Python, and SQL, 
        enabling the design, development, testing, and maintenance of a 
        range of database applications and solutions. Successfully acquired 
        advanced knowledge and skills in various programming languages, 
        enabling the design, development, testing, and maintenance of a range 
        of database applications and solutions. Cultivated strong analytical 
        skills, allowing for effective assessment and optimization of software 
        and database performance, integration, and security, thereby facilitating 
        the development of high-quality, user-friendly, and secure application 
        solutions. Secured comprehensive skills in front-end and back-end web 
        development technologies.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     </div>
    </div>
  );
}
export default EducationPage;