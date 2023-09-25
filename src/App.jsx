import { useState } from 'react';
import List from './components/List';
import Footer from './components/footer';
import Header from './components/header.jsx';
import Popup from './components/popup';
import './style.scss';

function App() {
	const [colors, setcolors] = useState(['pink', 'lightblue', 'yellowgreen']);
	const colors2 = [...colors];
	colors2[0] = 'hotpink';

	return (
		<>
			{colors.map((color, idx) => (
				<button style={{ backgroundColor: color }} key={idx}>
					{color}
				</button>
			))}
			<button onClick={() => setcolors(colors2)}>색상 변경</button>
		</>
	);
}

export default App;
