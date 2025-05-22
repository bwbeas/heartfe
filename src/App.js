import './App.css';
import React, { useState } from 'react';
import Entry from './Entry';
import berryImg from './berry.jpg';

const PasswordProtectedPage = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const correctPassword = "matru";

  const handleLogin = () => {
      if (password === correctPassword) {
          setIsLoggedIn(true);
      } else {
          setErrorMessage('invalid word. who even are you?');
      }
  };

  if (!isLoggedIn) {
      return (
          <div style={{
        backgroundImage: `url(${berryImg})`,
        paddingTop: '5%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        paddingBottom: '100%'
      }}>
              <div >
                  <div >
                      <h1 >enter code to get in</h1>
                     
                  </div>
                  <input style={{ backgroundImage: 'none',
    backgroundColor: 'black',
    color: 'white'}}
                      type="password"
                      placeholder="type password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      
                      onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                              handleLogin();
                          }
                      }}
                  />
                  <button style={{
                    backgroundImage: 'none',
    backgroundColor: 'black',
    color: 'white', cursor: 'pointer'
  }}
                      onClick={handleLogin}
                      
                  >
                      Unlock
                  </button>
                  {errorMessage && (
                      <div >
                          <h2 >{errorMessage}</h2>
                          
                      </div>
                  )}
              </div>
          </div>
      );
  }

  return (
      <div >
          <div >
             
              <Entry />
          </div>
      </div>
  );
};

function App() {
  return (
    <div className="App">
      <PasswordProtectedPage />
    </div>
  );
}

export default App;
