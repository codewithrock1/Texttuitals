
import './App.css';
import NavBar from './commponents/NavBar';
import TextForm from './commponents/TextForm';
import React from 'react'
import { useState } from 'react';
import Alerts from './commponents/Alerts';
// import About from './commponents/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [darkMode,SetDarkMode]=useState("light")
const [alert,setAlert] = useState(null)

const myAlert=(message,type)=>{
setAlert({
  message:message,
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 1000);

}

  const ToggleBtn=()=>{
    if(darkMode==='light'){

      SetDarkMode("dark");
      document.body.style.backgroundColor="grey"
      myAlert("DARK MODE IS ENABLE","success")

    }
    else{
      SetDarkMode("light");
      document.body.style.backgroundColor="white "
      myAlert("LIGHT MODE IS ENABLE","success")



    }
  } 
   return (
  
     <div>
  <Alerts  alert={alert}/>
    <NavBar tittle="Text Tutils " mode={darkMode}
    ToggleBtn={ToggleBtn} contact="Contacts" />
<TextForm mode={darkMode}/>
</div>
);
}

export default App;
// {/* <Router> */}
// {/* <Switch> */}
//     {/* //       <Route path="/about" component={About}/>
//     // //  <Route path="/"> */}
                
//           {/* // </Route>
            
          
//     //     </Switch> */}
//     // </Router>
  
    
