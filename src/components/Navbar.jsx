import logo from '../assets/images/logo.svg';

function Navbar() {
	return (
		<>
			<nav className='container navbar'>
				<img src={logo} className='logo' />
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
