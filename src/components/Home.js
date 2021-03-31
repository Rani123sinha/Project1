import React from 'react';
import './Home.css';

const Home = () => <div className="column">

    <div className="column-left">
        <input type="button" name="button1" value="DashBoard" />
        <br /><br /><br />
        <input type="button" onClick={() => {
            //load ./Site in .column-right
            document.getElementsByClassName("column-right")[0].src ="./Site";
           

        }} name="button2" value="Site" />
        <br /><br /><br />
        <input type="button" onClick={() => {
            document.getElementsByClassName("column-right")[0].src = "./Logs";

        }} name = "button3" value = "Logs" />
        <br /><br /><br />
        <input type="button" name="button4" value="Upgrades" />
        <br /><br /><br />
        <input type="button" name="button5" value="Alerts" />
        <br /><br /><br />
        <input type="button" name="button6" value="Analysis" />
        <br /><br /><br />
        <input type="button" name="button7" value="Service Alerts" />
        <br /><br /><br />
        <input type="button" name="button8" value="Switch Mode" />
        <br />
        <br />

    </div>

  
    <iframe  class="column-right" src="./default">
        
    </iframe>
   

</div>

export default Home;