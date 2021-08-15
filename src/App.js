import React, { useEffect, useState } from "react";
import {} from "./utils/wallet";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Newuser from "./pages/newuser";
import Olduser from "./pages/olduser";
import './App.css'



function App() {
 
  return (
    <div className="App">
      <Router>
        <div>
          <h1>PAYSOL</h1>
          {/* <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" className={classes.title}  noWrap>
                PaySol
              </Typography>
              <Button color="inherit">DEVNET</Button>
            </Toolbar>
          </AppBar> */}
          <Route exact path="/" component={Landingpage} />
          <Route path="/newuser" component={Newuser} />
          <Route path="/olduser" component={Olduser} />
         
        </div>
      </Router>
    </div>
  );
}

export default App;
