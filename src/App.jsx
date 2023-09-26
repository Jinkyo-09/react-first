import { useState } from 'react';
import List from './components/List';
import Footer from './components/footer';
import Header from './components/header.jsx';
import Popup from './components/popup';
import './style.scss';

function App() {
	console.log('re-render');
	const [Num, setNum] = useState(0);

	return (
		<>
			<button onClick={() => setNum(Num - 1)}>PREV</button>
			<button onClick={() => setNum(Num + 1)}>NEXT</button>

			<article style={{ transform: `rotate(${45 * Num}deg)` }}></article>
		</>
	);
}

export default App;

/*
	stsate : 해당 값이 변경되면 무조건 컴포넌트 재랜더링, 이전 렌더링 사이클의 값이 유지됨
	변수 : 컴포넌트 안에 값을 만듦, 컴포넌트가 재랜더링 될때마다 값이 계속 초기화됨
	useRef : useRef를 통해서 참조객체를 만들고 해당 참조객체에 저장되어있는 값은 컴포넌트가 재랜더링 되더라도 값이 유지됨
	(단 useRef의 값이 변경되더라도 컴포넌트가 재랜더링되지 않음)

	useRef 실사용 사례1 : 모션 작업을 할때 특정 스타일값이 변경되더라도 컴포넌트를 불필요하게 재호출하고 싶지 않을떄
	useRef 실사용 사례2 : 가상돔 요소를 실제적으로 선택해서 가져와야 할때
*/
