import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<header className="header" onClick={() => window.location.reload()}>
			<img className="header__img" src={logo} alt="Logo del header"></img>
			<h1 className="header__title">List cryptocurrencies</h1>
		</header>
	);
};

export default Header;
