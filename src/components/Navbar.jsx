import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
<div className=' border-b-2 border-cyan-500'>
<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container  mx-auto px-2 md:px-0 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              <svg width="30" height="30" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M127 111.944C127 115.481 124.95 116.334 122.465 113.83L88.0829 79.4453C85.3649 76.4 83.7655 72.5194 83.5481 68.4433V6.43977C83.5553 4.73404 84.2361 3.10022 85.4422 1.89408C86.6482 0.68793 88.2819 0.00716203 89.9875 0H120.515C122.223 0.00477402 123.859 0.684462 125.067 1.89087C126.275 3.09727 126.957 4.73247 126.964 6.43977L127 111.944ZM13.1778 4.55317C10.6746 2.04981 11.5181 0.0181026 15.0643 0.0181026H64.9012C66.6075 0.0228894 68.2426 0.702918 69.4492 1.90958C70.6558 3.11624 71.3358 4.75146 71.3406 6.45793V56.3436C71.3406 59.89 69.2909 60.7336 66.8058 58.2303L13.1778 4.55317ZM113.849 122.465C116.352 124.968 115.509 127 111.963 127H62.1261C60.4197 126.995 58.7846 126.315 57.578 125.109C56.3715 123.902 55.6914 122.267 55.6866 120.56V70.6745C55.6866 67.1371 57.7363 66.2846 60.2214 68.7879L113.849 122.465ZM0.036092 15.0836C0.036092 11.5372 2.07673 10.6937 4.57084 13.197L38.9535 47.582C41.6726 50.623 43.2724 54.5011 43.4882 58.5749V120.56C43.4834 122.267 42.8034 123.902 41.5968 125.109C40.3902 126.315 38.7551 126.995 37.0488 127H6.43921C4.73213 126.998 3.09561 126.318 1.88852 125.111C0.681428 123.904 0.00239928 122.267 0 120.56L0.036092 15.0836Z" fill="#ffffff"/>
</svg>

            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Rules</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>
  )
}

export default Navbar