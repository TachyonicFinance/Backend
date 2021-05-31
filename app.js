const express = require('express')
const app = express()
const Web3 = require('web3')
const port = 3000


app.get('/', (req, res)=>{
	let latestResult;
	var provider = 'https://mainnet.infura.io/v3/5137707d0eae4768a99d4b33c3bab0d0';
	var web3Provider = new Web3.providers.HttpProvider(provider);
	var web3 = new Web3(web3Provider);
	web3.eth.getBlockNumber().then((result) => {
		console.log(result)
		return res.send(result.toString())

	})
		.catch(()=>{

			console.log('This is an error')
			return res.send("Nothing was found")

		})


})

app.listen(port, ()=>{

	console.log(`The app is listening on ${port}`)

})


