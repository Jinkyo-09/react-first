import React from 'react';

function Header() {
	const handler = (text) => {
		console.log(text);
	};

	return (
		<header>
			<h1 className='title'>LOGO</h1>
			<p onClick={() => handler('Hello')}>LINK</p>
		</header>
	);
}

export default Header;
