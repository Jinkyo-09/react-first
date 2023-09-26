import { useEffect } from 'react';
import { useState } from 'react';
//useEffect : 컴포넌트의 생성, 변화, 소멸의 특정 상태마다 원하느느 이벤트 연결 가능
//useEffect(실행할 함수, 의존성 배열)

//의존성배열이 비어있는 상태에서 함수 안쪽에 구문을 입력하면 컴포넌트 마운트시 한번만 실행
//실사용 사례 : 팝업 생성시 스크롤바 제거
//실사용 사례 : 특정 컴포넌트가 마운트 되었을 때에만 스크롤 이벤트 연결
//실사용 사례 : 무거운 외부 데이터를 fetching할 때

//의존성배열이 비어있는 상태에서 리턴되는 함수 안쪽에 구문을 입력하면 컴포넌트 언마운트시 한번만 실행
//실사용 사례 : 팝업 제거시 스크롤바 생성
//실사용 사례 : 특정컴포넌트가 언마운트 되었을때 스크롤 이벤트 제거

//의존성배열에 특정 스테이트를 담아두고 함수 안쪽에 구문을 입력하면 해당 스테이트값이 변경될때마다 실행
//실사용 사례 : 특정 이벤트가 발생해서 새로운 데이터를 fetching할 때마다 로딩바 출력

function Popup() {
	const [num, setnum] = useState(0);
	console.log('팝업재호출');

	useEffect(() => {
		//컴포넌트 mount시 한번만 실행
		console.log('팝업 생성');
		console.log('무거운 유튜브 데이터 fetching');

		return () => {
			//컴포넌트 unmount시 한번만 실행
			console.log('팝업 소멸');
		};
	}, []);

	useEffect(() => {
		console.log('팝업의 num 상태변화');
	}, [num]);

	return (
		<aside>
			<h1>{num}</h1>
			<button onClick={() => setnum(num - 1)}>minus</button>
			<button onClick={() => setnum(num + 1)}>plus</button>
		</aside>
	);
}

export default Popup;
