import headlinesCoverDesktop from '../assets/images/image-web-3-desktop.jpg';

function Home() {
	return (
		<>
			<section className='headlines-section'>
				<img
					src={headlinesCoverDesktop}
					className='headlines-cover grid-item'
				/>
				<div className='new-blogs grid-item'>
					<h1>New</h1>
					<div>
						<h2 className='title'>Hydrogen VS Electric Cars</h2>
						<p className='body'>Will hydrogen-fueled cars ever catch to EVs?</p>
					</div>
					<hr />
					<div>
						<h2 className='title'>Hydrogen VS Electric Cars</h2>
						<p className='body'>Will hydrogen-fueled cars ever catch to EVs?</p>
					</div>
					<hr />
					<div>
						<h2 className='title'>Hydrogen VS Electric Cars</h2>
						<p className='body'>Will hydrogen-fueled cars ever catch to EVs?</p>
					</div>
				</div>
				<div className='question grid-item'>The Bright Future of Web 3.0?</div>
				<div className='answer grid-item'>
					We dive into the next evolution of the web that claims to put the
					power of the platforms back into the hands of the people. But is it
					really fulfilling its promise?
					<button className='btn-primary'>Read More</button>
				</div>
			</section>
		</>
	);
}

export default Home;
