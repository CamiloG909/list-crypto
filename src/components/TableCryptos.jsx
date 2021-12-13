import React from "react";
import CryptoRow from "./CryptoRow";

const titles = ["#", "Coin", "Price", "Price change", "24h volume"];

const TableCryptos = ({ data, search }) => {
	const coins = data.filter(
		(coin) =>
			coin.name.toLowerCase().includes(search.toLowerCase()) |
			coin.symbol.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<table className="table">
			<thead>
				<tr>
					{titles.map((title, index) => (
						<td className="table__title" key={index}>
							{title}
						</td>
					))}
				</tr>
			</thead>
			<tbody>
				{coins.map((coin, index) => (
					<CryptoRow coin={coin} key={coin.id} index={index + 1} />
				))}
			</tbody>
		</table>
	);
};

export default TableCryptos;
