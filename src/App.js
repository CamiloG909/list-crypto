import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import TableCryptos from "./components/TableCryptos";
import Header from "./components/Header";

function App() {
	const [cryptos, setCryptos] = useState([]);
	const [search, setSearch] = useState("");

	const getData = async () => {
		let data = await axios.get(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		);
		setCryptos(data.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Fragment>
			<Header />
			<div className="input-search-container">
				<input
					className="input-search"
					type="text"
					placeholder="Search a coin"
					onChange={(e) => setSearch(e.target.value)}
				></input>
			</div>
			<TableCryptos data={cryptos} search={search} />
		</Fragment>
	);
}

export default App;
