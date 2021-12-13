import React from "react";

const CryptoRow = ({ coin, index }) => (
	<tr>
		<td className="table__info">{index}</td>
		<td className="table__info">
			<img src={coin.image} alt={coin.image} />
			<span>{coin.name}</span>
			<b>{coin.symbol}</b>
		</td>
		<td className="table__info">
			<b>$ </b>
			{coin.current_price}
		</td>
		<td
			className={
				coin.price_change_percentage_24h > 0
					? "table__info green"
					: "table__info red"
			}
		>
			{coin.price_change_percentage_24h} <b>%</b>
		</td>
		<td className="table__info">{coin.total_volume}</td>
	</tr>
);

export default CryptoRow;
