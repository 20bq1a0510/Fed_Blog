import React from 'react';

function Main() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}} align="center" id="main">HTML5 Geolocation</h2>
         <p lang='eng'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Geolocation is one of the best HTML5 API which is used to identify the user's geographic location for the web application.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This new feature of HTML5 allows you to navigate the latitude and longitude coordinates of the current website's visitor. These coordinates can be captured by JavaScript and send to the server which can show your current location on the website
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most of the geolocation services use Network routing addresses such as IP addresses, RFID, WIFI and MAC addresses or internal GPS devices to identify the user's location.
</p><br />
<div id="GObj">
<p><b>Geolocation object</b><br/>
 
<br/></p><p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Geolocation API is work with the navigation.geolocation object. Its read-only property returns a Geolocation object which identifies the location of the user and can generate a customized result based on user location.<br/>
  </p>
<p><b>Syntax:</b></p>
<p className='example' align="center">geo=navigator. geolocation;   
 </p>
</div><br/>

<div id="GMet">
  <p>
  <b>Geolocation Methods</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Geolocation API uses three methods of Geolocation interface which are given following:
  </p><p className='example' align="center">
    <table border="1" style={{border:"white"}}>
      <tr>
      <th>Methods</th>
      <th>Description</th>
      </tr>
      <tr>
        <td>getCurrentPosition()</td>
        <td>It identifies the device or the user's current location and returns a position object with data.
</td>
      </tr>
      <tr>
        <td>watchPosition()	</td>
        <td>Return a value whenever the device location changes.
</td>
      </tr>
      <tr>
        <td>clearWatch()	</td>
        <td>It cancels the previous watchPosition() call
</td>
      </tr>
    </table>
</p>
</div><br/>
<div id="GCP">
  <p><b> Getting the User's current position:</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To get the user's current location, getCurrentPosition() method of the navigator.geolocation object is used. This method accepts three parameters:
  <br/>
    <b>success:</b> A success callback function to get the location of the user<br/>
    <b>error: </b>An error callback function which takes "Position Error" object as input.<br/>
    <b>options:</b> It defines various options for getting the location.
  <br/>
 
  </p>

<p className='example'>
&lt;script&gt;<br/>  
  var x= document.getElementById("location");<br/>  
    function getlocation() <br/>  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(navigator.geolocation)&#10100;  <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;navigator.geolocation.getCurrentPosition(showPosition)  <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#10101;  <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; else  <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#10100;  <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("Sorry! your browser is not supporting")<br/>  
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#10101; &#10101;  <br/>
       
         function showPosition(position)&#10100; <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var x = "Your current location is (" + "Latitude: " + &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position.coords.latitude + ", " + "Longitude: " + &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; position.coords.longitude + ")";  <br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById("location").innerHTML = x; <br/> 
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#10101; <br/> 
     &lt;/script&gt;<br/><br/>
     <b>Output:</b><br/>  
     Your current location is (Latitude: 16.283775, Longitude: 80.451)
</p>
</div><br/>
<div id="HER">
  <p>
  <b>Handling Errors and Rejections: Using an Error callback function</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The second parameter of getCurrentPosition is an error Callback function. It is an optional parameter and used to handle errors and user rejection while getting the user's location.<br/>
  Following are the possible options for invoking the error call back function:<br/>
  Unknown random error Occurred<br/>
If the user has denied for sharing location<br/>
Location information is not available<br/>
Request for location is timed-out.
  </p><p className='example'>function showError(error) &#10100;<br/>  
        switch(error.code)&#10100; <br/> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; case error.PERMISSION_DENIED: <br/> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("User denied the request for Geolocation API."); <br/> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  <br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; case error.POSITION_UNAVAILABLE:  <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("USer location information is unavailable.");  <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  <br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; case error.TIMEOUT:  <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("The request to get user location timed out.");  <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case error.UNKNOWN_ERROR:  <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("An unknown error occurred.");  <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  <br/>
    &#10101;   <br/>
        &#10101; <br/><br/><br/>
<b>Output:</b><br/>
User denied the request for Geolocation API.  </p>
</div><br/>
<div id="DisLoc">
  <p><b>Displaying location on Google Map</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Till now, we have seen how to show your location using latitude and longitude values, but it is not sufficient. Hence we can also show the exact location on Google map with this API.<br/>Following example showing the location using Google Map.</p>
<p className='example'>&lt;script src="https://maps.google.com/maps/api/js?sensor=false"&gt; &lt;/script&gt;   
          <br/>
          &lt;script type="text/javascript"&gt; <br/>  
          function getlocation()&#10100;   <br/>
              if(navigator.geolocation)&#10100;  <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  navigator.geolocation.getCurrentPosition(showPos, showErr);   <br/>
              &#10101;  <br/>
              else&#10100;  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("Sorry! your Browser does not support Geolocation API")  <br/>
              &#10101;  <br/>
          &#10101;   <br/>
          //Showing Current Poistion on Google Map  <br/>
          function showPos(position)&#10100;   <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;latt = position.coords.latitude;   <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;long = position.coords.longitude;   <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var lattlong = new google.maps.LatLng(latt, long);<br/>   
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var myOptions = &#10100;   <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;center: lattlong,   <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zoom: 15,   <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mapTypeControl: true,  <br/> 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;navigationControlOptions: &#10100;stylegoogle.maps.NavigationControlStyle.SMALL&#10101;  <br/> 
              &#10101;   <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var maps = new google.maps.Map(document.getElementById("demo"), myOptions); <br/>  
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var markers =   <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new google.maps.Marker(&#10100;positionlattlong, map:maps, title:"You are here!"&#10101;);  <br/> 
          &#10101;   <br/>
    
          //Handling Error and Rejection  <br/>
               function showErr(error) &#10100;  
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;switch(error.code)&#10100;  <br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case error.PERMISSION_DENIED:  <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("User denied the request for Geolocation API."); <br/> 
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  <br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case error.POSITION_UNAVAILABLE:  <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("USer location information is unavailable."); <br/> 
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case error.TIMEOUT:  <br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("The request to get user location timed out.");  <br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  <br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case error.UNKNOWN_ERROR:  <br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("An unknown error occurred."); <br/> 
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  <br/>
             &#10101;  <br/>
          &#10101;<br/>        &lt;/script&gt;<br/><br/><br/>
<b>Output:</b><br/>
It will show your location in google maps.   
</p>
</div><br/><div id="LocProp">
  <p><b> Location properties</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The getCurrentPosition() method of Geolocation API returns callback methods which retrieve the user location information. This callback method returns a Position Object which contains all location information and specifies different properties. It always returns latitude and longitude properties, but the following table describes some other properties of Position object.<br/>
 </p>
 <p className='example' align="center">
    <table border="1" style={{border:"white"}}>
      <tr>
      <th>Properties</th>
      <th>Description</th>
      </tr>
      <tr>
        <td>coords.latitude	</td>
        <td>It returns latitude of user location as a decimal number.

</td>
      </tr>
      <tr>
        <td>coords.longitude	</td>
        <td>It returns longitude of user location as a decimal number.
</td>
      </tr>
      <tr>
        <td>coords.altitude		</td>
        <td>It returns altitude in meters above the sea level (Only if available).
</td>
      </tr>
      <tr>
        <td>coords.accuracy		</td>
        <td>It returns the accuracy of the user's position.
</td>
      </tr>
      <tr>
        <td>coords.altitudeAccuracy			</td>
        <td>It returns the altitude accuracy of user location. (If available)
</td>
      </tr>
      <tr>
        <td>coords.heading	</td>
        <td>It returns headings as degree clockwise from North. (If available)
</td>
      </tr>
      <tr>
        <td>coords.speed		</td>
        <td>It returns the speed in meter per seconds. (If available).
</td>
      </tr>
      <tr>
        <td>timestamp		</td>
        <td>It returns data or time of response. (If available).
</td>
      </tr>
    </table>
</p>

</div>
<div id="WatCL">
  <p><b>Watching the current location:</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If we want to know the user location while he is moving and want accurate location at every changed position, then it can be achieved by using watchPosition() callback function.<br/>
  This function has all three parameters which getCurrentPosition() contains.
  <p className='example' align="center">
  var id = navigator.geolocation.watchPosition(success[, error[, options]])  
</p><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The watchPosition() method returns an ID that can be used to uniquely identifying the user?s position, and this ID can also be used with clearWatch() method to stop watching the location.<br/>
<p className='example' align="center">
navigator.geolocation.clearWatch(id);  
</p>  
 </p>


</div>

        </div>
        <div className='blog-card'>
          <div className='content-blog'>
             <div className='opt'><a href='#'>Home </a></div>
             
             <div className='opt'><a href='#main'>HTML5 Geolocation </a></div>
             <div className='options'>
             <div><a href='#GObj'>1.Geolocation object</a></div>
             <div><a href='#GMet'>2.Geolocation Methods</a></div>
             <div> <a href="#GCP">3.Getting the User's current position</a></div>
             <div> <a href="#HER">4.Handling Errors and Rejections: Using an Error callback function</a></div>
             <div> <a href="#DisLoc">5.Displaying location on Google Map</a></div>
             <div> <a href="#LocProp">6.Location properties</a></div>
             <div> <a href="#WatCL">7.Watching the current location:</a></div>
             </div>
             
            
          </div>
          
        </div>

    </div>
  )
}

export default Main;