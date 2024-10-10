import { useState, useEffect} from "react";
import axios from "axios";

function Crypto()
{
	const [info, setInfo] = useState([]);
	const [coin, setCoin] = useState("");
	const hCoin = (event) => { setCoin(event.target.value); }

	useEffect( () => {
		let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR";
		axios.get(url)
		.then(res => setInfo(res.data))
		.catch(err => alert("issue " + err));
	}, []);

	let finfo = info.filter(c => c.name.toLowerCase().includes(coin.toLowerCase()) );

	return(
	<>
	<center>
		<h1> Crypto App by Adwait Shastri </h1>

		<form>
		<input type="text"	placeholder="enter coin name " onChange={hCoin }/>
		</form>
		<br/>
		<table border="5">
			<tr>
				<th> Name </th>
				<th> Symbol </th>
				<th> Icon </th>
				<th> Price </th>
				<th> Price Change </th>
				<th> All Time High </th>
				<th> All Time Low </th>
			</tr>
		
		{
			finfo.map( (e) => (
			<>
				<tr>
					<th> { e.name } </th>
					<th> { e.symbol } </th>
					<th> <img src={ e.image } /> </th>
					<th> ₹ { e.current_price } </th>
					<th> ₹ { e.price_change_24h.toFixed(2) } </th>
					<th> ₹ { e.ath } </th>
					<th> ₹ { e.atl } </th>
				</tr>
			</>
		))
		
		}

		</table>
	</center>
	</>
	);
}
export default Crypto;			