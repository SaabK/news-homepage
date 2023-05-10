import headlinesCoverDesktop from '../assets/images/image-web-3-desktop.jpg';
import headlinesCoverMobile from '../assets/images/image-web-3-mobile.jpg';
import retroPCs from '../assets/images/image-retro-pcs.jpg';
import topLaptops from '../assets/images/image-top-laptops.jpg';
import gamingGrowth from '../assets/images/image-gaming-growth.jpg';

function Home() {
	return (
		<>
			<section className='headlines-section'>
				<img
					src={headlinesCoverDesktop}
					className='headlines-cover grid-item'
				/>
				<img src={headlinesCoverMobile} className='headlines-cover-mobile' />
				<div className='new-blogs grid-item'>
					<h1>New</h1>
					<div>
						<h2 className='title'>Hydrogen VS Electric Cars</h2>
						<p className='body'>Will hydrogen-fueled cars ever catch to EVs?</p>
					</div>
					<hr />
					<div>
						<h2 className='title'>Hydrogen VS Electric Cars</h2>
						<p className='body'>
							Will hydrogen-fueled cars ever catch to EVs? Will Smit Finds Out.
						</p>
					</div>
					<hr />
					<div>
						<h2 className='title'>Hydrogen VS Electric Cars</h2>
						<p className='body'>
							Will hydrogen-fueled cars ever catch to EVs? The Ottoman Empire
							Just Collapsed and Here&apos;s how you can benefit
						</p>
					</div>
				</div>
				<div className='question grid-item'>The Bright Future of Web 3.0?</div>
				<div className='answer grid-item'>
					<p>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button className='btn-primary'>READ MORE</button>
				</div>
			</section>

			<section className='trending-section'>
				<div className='card'>
					<img src={retroPCs} className='card-image' />
					<div className='card-info'>
						<h2 className='card-number'>01</h2>
						<h4 className='card-title'>Reviving Retro PCs</h4>
						<p className='card-desc'>
							What happens when old PCs are given modern upgrades?
						</p>
					</div>
				</div>
				<div className='card'>
					<img src={topLaptops} className='card-image' />
					<div className='card-info'>
						<h2 className='card-number'>02</h2>
						<h4 className='card-title'>Top 10 Laptops of 2022</h4>
						<p className='card-desc'>
							Our best picks for various needs and budgets.
						</p>
					</div>
				</div>
				<div className='card'>
					<img src={gamingGrowth} className='card-image' />
					<div className='card-info'>
						<h2 className='card-number'>03</h2>
						<h4 className='card-title'>The Growth of Gaming</h4>
						<p className='card-desc'>
							How the pandemic has sparked fresh opportunities.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
