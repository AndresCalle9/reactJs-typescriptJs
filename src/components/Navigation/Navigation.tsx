import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img
            src={logo}
            alt='Logo'
            width='30'
            height='24'
            className='d-inline-block align-text-top'
          />{' '}
          React + TS
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/landing'>
                Landing
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/tasksApp'>
                Tasks App
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/dashboard'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/blogPage'>
                Blog Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
