import React from 'react';

function Header() {
	/*
	여러줄 주석
	*/
	const text = 'Variable';
	const cl = 'title';

	return (
		//한줄 주석
		<header>
			{/* jsx 안쪽에 주석 넣기 */}
			<h1 className={cl}>{text}</h1>
			<p>LINK</p>
		</header>
	);
}

export default Header;
