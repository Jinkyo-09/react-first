import List from './components/List';
import Footer from './components/footer';
import Header from './components/header.jsx';
import Popup from './components/popup';
import './style.scss';

function App() {
	let arr = ['reading', 'game', 'sleep'];
	let newarr = arr;
	newarr[0] = 'movie';
	console.log(newarr);
	console.log(arr);

	let isPop = true;
	let isFooter = true;
	return (
		<>
			<Header />
			{isFooter && <Footer />}
			{isPop ? <Popup /> : null}
			<List />
		</>
	);
}

export default App;

/*
SSR vs CSR

SSR - Server SIde Rendering
- 페이지 이동시마다 일일이 서버쪽에 html파일을 요청해서 가져오는 방식
- 장점 : 초기 로딩 속도가 빠름, 검색엔진 최적와 (seo좋음)
- 단점 : 페이지 이동시마다 일일이 서버쪽에 파일을 요청해야하므로 페이지 깜빡거림 현상이 있음

CSR - Client SIde Rendering
- 초기에 빈 html파일을 서버쪽에서 가져오고 화면에 출력된 모든 데이터를 자바스크립트로 청크단위의 모든 데이터파일을 가져온 후 빈 html 파일에 동적으로 출력
- 장점 : 한번에 서브 페이지를 포함한 모든 파일을 불러오기 때문에 페이지 이동시마다 파일을 요청할 필요가 없기 때문에 페이지 전환이 자연스러움
- 단점 : 모든페이지에 대한 데이터를 한번에 가져오기 때문에 초기 로딩속도가 ssr방식에 비해 늦는다(딱히 엄청나게 늦는건 아님), 검색엔진 최적화 X


real DOM (실제돔)
- HTML 태그를 이용해서 구조를 만들면 브라우저가 이를 해석해서 실제 돔 형태로 객체를 만들고 화면에 렌더링


Virtual DOM(가상돔)
- 브라우저에의해 real dom으로 변경되기 전 자바스크립트에 의해서 메모리상으로 가상의 DOM을 만들어서 기존의 DOM구조와 차이점을 분석하고 바뀐부분을 다시 렌더링


JSX
- 리엑트에서 DOM을 효율적으로 생성하기 위한 HTML의 규칙성을 따라한 java script 돔 제작 방식



컴퍼넌트 생성시 주의점
- 무조건 JSX를 리턴
- 함수 이름은 대문자로 시각
- export로 내보내야지 다른 컴포넌트에서 불러올수 있음
- 하나의 컴퍼넌트 함수는 단위 JSX를 리턴 가능
- 복수개의 JSX를 리턴하고 싶을 때는 wrappin element로 묶어서 그룹화한뒤 리턴

- 중첩된 엘리먼트 노드를 생성하지 않고 복수개의 JSX를 리턴하고 싶을 때는 <></> Fragment로 감싸줌
*/
