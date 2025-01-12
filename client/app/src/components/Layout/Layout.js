import React from 'react';
import { Outlet, Link  } from 'react-router-dom';
import './Layout.css';

function Layout() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='layout'>
      <header>
          <a href="https://pja.edu.pl/"><img src="/pjatk.png" alt="PJAIT logo "></img></a>
          <div>
            <h2>Internet technologies - Final project</h2>
            <p>gr. WIs I.5 A_BD 18c, sem. 24/25 winter</p>
          </div>
        <div className='buttons-wrapper'>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/noteshare">Noteshare</Link>
          </button>
          <button>
            <a href="https://github.com/hmichalski/noteshare" target="_blank" rel="noreferrer">
                <img src="source-code.png" alt="Source code"/>
            </a>            
          </button>
          <button id="github-button">
            <a href="https://github.com/hmichalski" target="_blank" rel="noreferrer">
              <img src="github.png" alt="Github"/>
            </a>
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Hubert Michalski &copy; {currentYear} <br/> s28546</p>
      </footer>
    </div>
  );
}

export default Layout;