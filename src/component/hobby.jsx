import React from 'react';
import '../App.css';

function HobbyPage() {
  return (
    <div className='aboutPage'>
      <div className='aright'>

      <h1>1. Video Games :</h1>
      <h3>League of Legends </h3>
        <h3>Total War: WARHAMMER</h3>
        <h3>Might and Magic of Hroe</h3>
        <h3>Overwatch</h3>
        <h3>Diablo</h3>
        <h3>Word of Warcraft</h3>
        <h3>Don't Starve</h3>
        <p>
        I am a game fan, but I prefer fantasy-themed strategy games. 
        I hate FPS games the most because I get a little dizzy with 3D. 
         am more interested in the background story and characters of 
         the game than the graphics and gameplay of the game. I don't 
         like to waste too much time on rankings, so in-game achievements 
         are not my pursuit.
        </p>
        <div className='games'>
            <table>
                <tr>
            <td><img className='game1' src='./game1.jpg' alt='game1'/></td>
            <td><img className='game2' src='./game2.jpg' alt='game2'/></td>
            <td><img className='game3' src='./game3.jpg' alt='game3'/></td>
            </tr>
            <tr>
            <td><img className='game4' src='./game4.jpg' alt='game4'/></td>
            <td><img className='game5' src='./game5.jpg' alt='game5'/></td>
            <td><img className='game6' src='./game6.jpg' alt='game6'/></td>
            </tr>
            </table>
        </div>

        <h1>2. Warhammer Chess :</h1>

        <p>
        Because I came into contact with Warhammer-like RTS games, 
        I learned about the background story of Warhammer and became 
        interested in the races and factions in it. So I will buy some 
        related novels and war games. It's more like model painting than 
        a battle chess game. After purchasing the model, we need to 
        assemble and paint it ourselves (this is a long and boring process).
        </p>

        <div className='warhammerp'>
        <img className='w1' src='./warhammer1.jpg' alt='warhammer1'/>
        <img className='w2' src='./warhammer2.jpg' alt='warhammer2'/>
        <img className='w3' src='./warhammer3.jpg' alt='warhammer3'/>
        <img className='w4' src='./warhammer4.jpg' alt='warhammer4'/>
        <img className='w5' src='./warhammer5.jpg' alt='warhammer5'/>
        <img className='w6' src='./warhammer6.jpg' alt='warhammer6'/>
        </div>


        <h1>3. Light fitness enthusiast :</h1>

        <p>I will start fitness in April 2023 and ask a coach to make a plan. 
            The goal is to become a muscular man. Curls, bench press, flyes, 
            lateral raises and some cardio.</p>

        <h1>4. Movie List :</h1>
        <h3>Batman Dark Knight</h3>
        <h3>Joker</h3>
        <h3>Hobbit</h3>
        <h3>Lord of Rings</h3>
        <h3>Pirate of caribbean</h3>


        <p>I have a lot of favorite movies, especially fantasy ones with grand settings. 
            I am also a DC lover. Not only do I love watching DC movies, I also like TV 
            series such as Gotham. Pirates of the Caribbean and Lord of the Rings are classic 
            IPs that had a profound impact on me as a child. I also really admire the sequel 
            The Hobbit. There are also horror game-changing movies such as Resident Evil and 
            Silent Hill.</p>

        <div className='movie'>
            <img className='m1' src='./movie1.jpg' alt='movie1'/>
            <img className='m2' src='./movie2.jpg' alt='movie2'/>
            <img className='m3' src='./movie3.jpg' alt='movie3'/>
            <img className='m4' src='./movie4.jpg' alt='movie4'/>
            <img className='m5' src='./movie5.jpg' alt='movie5'/>
        </div>


      </div>
    </div>
  );
}

export default HobbyPage;