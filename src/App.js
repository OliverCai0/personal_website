import logo from './logo.svg';
import './App.css';
import './stylesheets/Animations.css'
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [page, setPage] = useState(1);

  return (<div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
    <img style={{height: '35vh',
                 objectFit: 'cover'
                  }} 
         alt={'Background'} 
         src={require('./background1.jpg')}/>
    <div style={{
      position: 'absolute',
      top: '17.5vh',
      justifyContent: 'center',
      display: 'flex',
      width: '100%'
    }}>
      <img src={require('./face.PNG')} 
           alt={'Oliver Cai'}
           style={{
            width: '35vh',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius:'50%'
           }}
          />
    </div>
    <div style={{
      backgroundColor: 'black',
      flex: 1
    }}>
      <div style={{height: '20vh'}}></div>
      <div style={{backgroundColor: 'black', 
                  //  position: 'absolute', 
                  //  top: '55.5vh', 
                   justifyContent: 'center',
                   display: 'flex',
                   width: '100%'}}>
        <Navbar page={page} setPage={setPage}></Navbar>
      </div>
      <CSSTransition in={page===1}
        timeout={300}
        classNames="alert"
        unmountOnExit>
        <div style={{width: '100%'}}><Bio></Bio></div>
      </CSSTransition>
      <CSSTransition in={page===2}
        timeout={300}
        classNames="alert"
        unmountOnExit>
        <div style={{width: '100%'}}><Projects></Projects></div>
      </CSSTransition>
      {/* {page === 1 && <div style={{width: '100%'}}><Bio></Bio></div>} */}
      {/* {page === 2 && <Projects></Projects>} */}
    </div>
    </div>
  );
}

export default App;
