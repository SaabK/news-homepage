import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<main className='container'>
				<Home />
			</main>
		</>
	);
}

export default App;
