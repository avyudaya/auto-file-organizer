import Navbar from './components/Navbar'
import { Box } from '@chakra-ui/react'
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react'
import { CLIENT_ID, API_KEY, DISCOVERY_DOCS, SCOPES } from './config'
import { gapi } from "gapi-script";

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    handleClientLoad()
  }, []);

  const initClient = () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) { }
      );
  };

  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      setUser(gapi.auth2.getAuthInstance().currentUser)
      localStorage.setItem('gapi.auth2.currentUser', JSON.stringify(gapi.auth2.getAuthInstance().currentUser));
    }
    else {
      // prompt user to sign in
      handleAuthClick();
    }
  };

  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
  };

  const handleSignOutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut().then(() => setUser(null))
  }

  return (
    <Box maxW='5xl' p='4' margin='auto'>
      <Navbar user={user} signOut={handleSignOutClick}/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home user={user} handleSignIn={handleClientLoad}/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}