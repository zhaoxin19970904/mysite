import React from 'react';
import '../App.css';

function WorkPage() {
  return (
    <div className='workPage'>
        <div className='wleft'><a href='/home'>&lt; Home</a>
      <br/>
      <br/>
      <a href='/about'>&lt; About Me</a>
      <br/>
      <br/>
      <a href='/education'>&lt; Education</a>
      <br/>
      <br/>
      <a href='/project'>&lt; Projects</a>
      <br/>
      <br/>
      <a href='/work'>&lt; Contact</a>
      </div>
        <div className='wright'>
          <h1>Work Experience:</h1>
          <h2>Sictec Group Inc.</h2>
          <h2> Markham, ON	12/2022 to Present </h2>
          <h2>Junior Web Developer</h2>
          <h3>Key Responsibilities:</h3>
          <p>•	Orchestrate testing protocols aimed at identifying system flaws.<br/>
              •	Engineer maintainable software aligned with business goals and client demands.<br/>
              •	Collaborate on feature development using React.js to augment site UX.<br/>
              •	Utilize NodeJS and SQL technologies to design and oversee databases.<br/>
            •	Maintain Focus on rapid and accurate job completion to enhance team effectiveness.<br/>
          </p>
          <h3>Key Accomplishments:</h3>
          <p>•	Achieved improvement in website speed by optimizing performance and load times.<br/>
            •	Elevated customer engagement through the successful implementation of a feedback feature in React.js.<br/>
            •	Amplified operational efficiency by contributing to team projects with speed and precision.<br/>
          </p>
          <br/>
          <h1>Reference: </h1>
          <h2>Java Database Connectivity at the Seneca Collage:</h2>
          <p>Dilli Sharma<br/>
              Professor of Computer Science<br/>
              Relation: Was one of my professors in the Database Development Program<br/>
              Email: dilli.sharma@senecacollege.ca
            </p>
          <h2>Junior Web Developer at Sictec Group Inc. :</h2>
          <p>Laurie Wu<br/>
            General Manager<br/>
            Relation: General Manager and Team leader<br/>
            Email: lauriewu@sictec.com
          </p>

        </div>

    </div>
  );
}
export default WorkPage;