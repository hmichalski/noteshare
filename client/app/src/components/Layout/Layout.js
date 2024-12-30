import React from 'react';
import { Outlet, Link  } from 'react-router-dom';
import './Layout.css';

function Layout() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='layout'>
      <header>
          <a href="https://pja.edu.pl/"><img src="/pjatk.png" alt="pjatk-logo"></img></a>
          <div>
            <h2>Technologie internetu - Projekt zaliczeniowy</h2>
            <p>gr. WIs I.5 A_BD 18c, sem. 24/25 zimowy</p>
          </div>

        <div className='buttons-wrapper'>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/notes">Notes</Link>
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