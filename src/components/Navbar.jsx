import logo from '../assets/images/logo.svg';
import hamburgerOpen from '../assets/images/icon-menu.svg';
import hamburgerClose from '../assets/images/icon-menu-close.svg';

import { useState } from 'react';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<nav className='container navbar'>
				<img src={logo} className='logo' />
				<button className='btn-menu' onClick={handleMenu}>
					<img
						src={menuOpen ? hamburgerClose : hamburgerOpen}
						className='hamburger-menu'
					/>
				</button>
				{menuOpen && (
					<>
						<div className='background'></div>
						<nav className='navbar-mobile'>
							<ul className='nav-links-mobile'>
								<li>
									<a className='nav-link-mobile' href='#'>
										Home
									</a>
								</li>
								<li>
									<a className='nav-link-mobile' href='#new'>
										New
									</a>
								</li>
								<li>
									<a className='nav-link-mobile' href='#popular'>
										Popular
									</a>
								</li>
								<li>
									<a className='nav-link-mobile' href='#trending'>
										Trending
									</a>
								</li>
								<li>
									<a className='nav-link-mobile' href='#categories'>
										Categories
									</a>
								</li>
							</ul>
						</nav>
					</>
				)}
				<ul className='nav-links'>
					<li>
						<a className='nav-link' href='#'>
							Home
						</a>
					</li>
					<li>
						<a className='nav-link' href='#new'>
							New
						</a>
					</li>
					<li>
						<a className='nav-link' href='#popular'>
							Popular
						</a>
					</li>
					<li>
						<a className='nav-link' href='#trending'>
							Trending
						</a>
					</li>
					<li>
						<a className='nav-link last' href='#categories'>
							Categories
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
