import { useEffect } from 'react';
import { useState } from 'react';

function Popup() {
	const [num, setnum] = useState(0);

	useEffect(() => {
		//컴포넌트 mount시 한번만 실행
		console.log('팝업 생성');

		return () => {
			//컴포넌트 unmount시 한번만 실행
			console.log('팝업 소멸');
		};
	}, []);

	return (
		<aside>
			<h1>{num}</h1>
			<button onClick={() => setnum(num - 1)}>minus</button>
			<button onClick={() => setnum(num + 1)}>plus</button>
		</aside>
	);
}

export default Popup;
