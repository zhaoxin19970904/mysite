import React from 'react';
import '../App.css';

function ContactPage() {
  return (
    <div className='contactPage'>
      

        <div class="contact" id ="contact">
        <div class="comb1">

            <h1 className='contactget'>Get In Touch</h1>
        </div>
                <div class="comb2">
        <div class="left">

            <div class="bottom-right">
                <div class="email">
                    <p id="ct2">Email:</p>
                    <p>bobxin.zhao@gmail.com</p>
                </div>
                
                <div class="tel">
                    <p id="ct3">Tel:</p>
                    <p>647-878-7595</p>
                </div>
                <div class="Hours" id="Hours">
                    <li id="ct4">Working Hours:</li>
                    <p id="hour1" >Monday - Friday: 9am - 5pm</p>
                    <p id="hour2" >Saturday - Sunday: off</p>
        
                </div>
            </div>
        </div>
        <div class="right">
            <div class="righttop">
                <p>LET'S TALK</p>
            </div>
            <div class="form1">
                <form action="https://formsubmit.co/bobxin.zhao@gmail.com" method="POST" class="form2">
                    <div class="comb3">
                        <label for="name" id="ct5">Name:*&nbsp;&nbsp;<br/></label>
                        <input type="text" id="name" name="name" /><br/>
                        <label for="school" id="ct6">&nbsp;School/Companybsp;&nbsp; <br/></label>
                        <input type="text" id="school" name="school" /><br/>
                    </div>
                    <div class="comb3">
                        <label for="email" id="ct7">Email:*&nbsp;&nbsp;<br/></label>
                        <input type="text" id="email" name="email" /><br/>
                        <label for="phone1" id="ct8">&nbsp;Phone:&nbsp;&nbsp;<br/> </label>
                        <input type="text" id="phone1" name="phone" /><br/>
                    </div>
                    <br/>

                    <label for="subject" id="ct9">Tell us more....*<br/></label><br/>
                    <textarea id="subject" name="subject"
                    style={{height: '200px',width: '80%',borderRadius: '5px'}}
></textarea>
                    <div class="comb6">
                        <input type="submit" value="Submit" class="submit" />
                    </div>
                    
                  </form>
                
                  
                  
            </div>
    </div>
    </div>
        
    </div>
   
    </div>
  );
}
export default ContactPage;