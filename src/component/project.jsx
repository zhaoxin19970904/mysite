import React from 'react';
import '../App.css';

function ProjectPage() {
  return (
    <div className='projectPage'>
        
      <div className='pright'>
        <div>
      <h1>1. Simple game backend:</h1>
        <br/>
        <p>In the final project of the basic programming course 
          in the university, we will be asked to make some back-end 
          simulators for puzzle games. For example: card games with 
          different rules, matrix games, games under mathematical models.</p>
        <br/>
        <p>I have written Bingo card game simulator using python, 
          java and c++ at the same time. The content requires 
          object-oriented coding thinking to separate a single card and 
          the simulator. A rule and a player are used to create the 
          simulator, and the card will be called by the simulator as 
          an interface. In this way, the implementation of the game 
          by back-end data is realized.</p>
        <br/>
        <img className='bingo' src='binggo.jpg' alt='bingo'/>
        <br/>
        </div>
        <div>
        <h1>2. Online merchant database design: </h1>
        <br/>
        <p>In response to the current development trend of increasing 
          platform merchants on the Internet, we designed and produced 
          a database that can record information with merchants and consumers 
          and view order status. We used Oracle to build a SQL database.</p>
        <br/>
        <p>The library is constructed from multiple different tables. 
          There are complex relationships between User, Item, shipment, 
          and history. There are one-to-one, one-to-many, and many-to-many 
          relationships to join different tables. The columns in the table also 
          have different information requirements, such as whether they are unique, 
          whether they can be empty, and the key definition of the columns 
          in the table. Each table has at least one primary key that is a unique 
          value that is not empty. Define foreign keys to facilitate establishing 
          relationships with other lists to select data.</p>

        <br/>
        <img className='sql1' src='sql1.jpg' alt='sql1'/>
        <img className='sql2' src='sql2.jpg' alt='sql2'/>
        <br/>
        </div>
        <div>
        <h1>3. Restaurant conversation waiter AI: </h1>
        <br/>
        <p>Training an artificial intelligence given a large amount 
          of information enables it to make judgments and respond 
          appropriately. Since I have worked in a restaurant before, 
          I have some understanding of the basic functions of a front 
          desk clerk. And this project can also be extended to 
          front-office services in every industry.</p>
        <br/>
        <p>I utilized the Department of Mechanical Services service 
          in Microsoft Azure for research and builds. Our robot can 
          solve most problems. When encountering an unsolvable problem, 
          it will suggest a different way of asking or direct manual service.</p>
        <br/>
        </div>
        <div>
        <h1>4. 3D racing game: </h1>
        <br/>
        <p>We made a simple racing model game. The car will get extra points 
          if it hits the box while driving on a track with a specified width 
          and length. Finally, the time after reaching 100 points will be 
          recorded and a ranking will be given to everyone.</p>
        <br/>
        <p>The game content is not complicated and we developed it using OpenGL. 
          To be honest this is not a good way to develop a game. We need a lot
           of math based on linear algebra to calculate terrain, perspective 
           and lighting. Changing parameters when the car is moving is also 
           very complex.</p>
        <br/>
        <img className='racing' src='racing.jpg' alt='racing'/>
        <br/>
        </div>
        <div>
        <h1>5. View recognition AI: </h1>
        <br/>
        <p>Image AI recognition is increasingly accepted by applications. 
          For example, animal and plant identification APP. We need a lot 
          of pictures and time for AI to understand and recognize the 
          characteristics of animals, and to make relatively accurate 
          judgments.</p>
        <br/>
        <p>This project still utilizes Microsoft Azure’s Department of 
          Mechanical Engineering platform. We also had a lot of interesting 
          things happen while working on this project. For example, most of 
          the animals we tested could be identified, but the Maine Coon cat 
          was judged to be a lion, and we specially trained the AI for this.</p>
        <br/>
        <img className='animal' src='./animal.jpg' alt='animal'/>
        <br/>
        </div>
        <div>
        <h1>6. Shopping Cart: </h1>
        <br/>
        <p>Combined with the prevalence of online shopping mentioned 
          in the previous project after covid-19. We have also developed 
          front-end frameworks for small companies. After entering the web page, 
          click on the shopping cart and we will jump to this page to see it. 
          The status of the item: name, id, quantity, price. There is also the 
          total price at the bottom.</p>
        <br/>
        <p>For this development, we used the react framework for the first 
          time instead of the simple html/css/js development model. We don’t
           pay much attention to the beauty of the page but pay more attention 
           to the transmission of information. In react, the subclass communicates 
           and changes information with the parent class, and uses ‘fetch’ to obtain 
           changes to the API data on the front end. All in all, it is an exploration 
           of front-end and back-end connections for data transmission.</p>
        <br/>
        <img className='shopping1' src='./shopping1.jpg' alt='shopping1'/>
        <img className='shopping2' src='./shopping2.jpg' alt='shopping2'/>
        <br/>
        </div>
        <div>
        <h1>7. Voice navigation system: </h1>
        <br/>
        <p>VUI is increasingly becoming an important part of our lives. 
          For example, Google, Microsoft and Apple are all working on developing 
          a combination of artificial intelligence and VUI. The main purpose of 
          our project is to provide safe interaction for drivers to temporarily 
          change destination navigation.</p>
        <br/>
        <p>This time we used react-speech-recognition and react-google-maps/api 
          in the react framework as libraries for audio input recognition and map 
          connection (need to be imported). This attempt is a step forward in 
          transmitting information in multiple fields and understanding how to use 
          voice for human-computer interaction.</p>
        <br/>
        <img className='voice' src='./voice.jpg' alt='voice'/>
        <br/>
        </div>
        <div>
        <h1>8. Mobile position sensor game: </h1>
        <br/>
        <p>A simple front-end game is developed to test mobile location
           sensing. We set up a box with a small ball inside, which simulates
            the center of gravity based on the position information sensed by
             the current screen. Give the ball a speed to start moving. When
              the ball touches the edge, it will bounce back. If it hits the
               target point, points will be added to the display board.</p>
        <br/>
        <p>This project was developed using the react framework. We called 
          the react-hook/window-size and react-hook/orientation libraries for 
          ball sensing. It is a novel attempt to make web applications have judgment 
          and location sensing on the mobile terminal. It is a good exploration to 
          provide users with a simpler UI method in the future.</p>
        <br/>
        <img className='sensor' src='./sensor.jpg' alt='sensor'/>
        <br/>
        </div>
        <div>
        <h1>9. Library System: </h1>
        <br/>
        <p>Create a library that can store book information. 
          We expanded the project and transformed it into a 
          book lending system. The administrator needs to create
           borrowing information, including the book's name, 
           author, borrower's name, time, and frequency. We 
           can delete the book when it is returned, and we 
           can change the time and notes when it is extended.</p>
        <br/>
        <p>The back-end system developed by the Springboot/Django 
          framework, the front-end still uses html/css/js 
          (we can also use react to grab the API). This is our 
          first attempt to use java/python for back-end development. 
          We use MongoDB as the database, which greatly simplifies 
          the data retrieval part.</p>
        <br/>
        <img className='library1' src='./library1.jpg' alt='library1'/>
        <img className='library3' src='./library3.jpg' alt='library3'/>
        <img className='library2' src='./library2.jpg' alt='library2'/>
        <br/>
        </div>
        <div>
        <h1>10. School System Simulator Project: </h1>
        <br/>
        <p>For a full stack project, we need to create a school simulation system. 
          In addition to the public page section we also have three private sections 
          for administrators, teachers and students. The personal part requires a 
          username and password to log in. We do not have the right to open registration.
           When you are allowed to attend this school, the school will send your personal 
           account information. Our administrators can delete, update, insert (add), and 
           select teachers, students, courses, and time schedules. After logging in, 
           teachers can view the courses being taught and the time, course information 
           and students. After logging in, students can only see the courses and course 
           information they are currently studying. Teachers and students have personal 
           homepages with personal details that can be changed. A second confirmation is 
           required when changing the password.</p>
        <br/>
        <p>The front-end part uses hbs/css/javascript for development. The backend is 
          developed using the Node.js environment. The database uses MongoDB. This project 
          is relatively comprehensive, with practice on front-end, back-end, database, 
          testing, network security, warehouse management, and network deployment. The 
          requirements for teamwork are also higher, and the time is tight and the content 
          is complex, so the project content still has imperfect parts.</p>
        <br/>
        <a href='https://cute-erin-fawn-kit.cyclic.app/' target="_blank" rel="noopener noreferrer">
          <p>link: https://cute-erin-fawn-kit.cyclic.app/</p>
          </a>
        <br/>
        <p>Example:</p>
        <p>admin:admin/admin</p>
        <p>teacher:t11/t11</p>
        <p>student：student/student</p>
        <p id='note'>Note: Please do not change the username and password 
          of the example so that others cannot use it. 
          Please do not create new users maliciously.</p>
        <br/>
        <img className='school1' src='./school1.jpg' alt='school1'/>
        <img className='school2' src='./school2.jpg' alt='school2'/>
        <img className='school3' src='./school3.jpg' alt='school3'/>
        <img className='school4' src='./school4.jpg' alt='school4'/>
        
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
export default ProjectPage;