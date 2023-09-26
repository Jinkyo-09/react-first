import { useState } from 'react';
import List from './components/List';
import Footer from './components/footer';
import Header from './components/header.jsx';
import Popup from './components/popup';
import './style.scss';

function App() {
	const [isPopup, setisPopup] = useState(false);

	return (
		<>
			<button onClick={() => setisPopup(true)}>팝업 열기</button>
			<button onClick={() => setisPopup(false)}>팝업 닫기</button>
			{isPopup && <Popup />}
		</>
	);
}

export default App;
