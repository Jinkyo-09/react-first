import List from './components/List';
import Footer from './components/footer';
import Header from './components/header.jsx';
import Popup from './components/popup';
import './style.scss';

//원시형 자료 : 메모리, 값 자체가 callstack에서 생성된 다음 저장
//원시형자료는 변수값을 다른 변수에 복사했을때 값 자체가 복사되는 deep copy(완전복사) => 복사된 값을 변경해도 원본은 그대로 유지(불변성 유지, immutable)
//참조형 자료 : 메모리(callstack), 배열이나 객체 등 값 자체(heap memory)에 생성
//callstack에 있는 메모리에는 배열의 값 자체가 담기는게 아니 힙메모리에 있는 값의 위치값이 담김
//참조링크가 담겨있는 변수를 새로운 변수에 옮겨담으면 값이 복사되는 것이 아닌 참조 링크만 복사됨
//결국 같은 값을 가리키고 있는 두개의 링크만 복사
//복사된 링크의 값을 바꾸면 결국 원본값이 훼손(얕은 복사, shallow copy) (불변성 유지 안됨)

//내가 이해한 것
//원시형 자료 복사 : 값이 담긴 상자가 두개가 됨
//참조형 자료 복사 : 값이 담긴 상자를 보여주는 카메라가 두개가 됨

//리액트 개발시 불변성이 중요한 이유
//리액트는 원본이 있어야 복사본을 통해서 차이점을 비교분석
//리액트 안에서 배열이나, 객체같은 참조형 자료는 무조건 deep copy를 해서 데이터를 변경 해야함

function App() {
	let student = {
		name: 'David',
		age: 20,
	};

	let newStudent = { ...student };
	newStudent.name = 'Andy';
	console.log(newStudent);
	console.log(student);

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
