var api = {
	query : '',
	getRanneh(){
		var url = `https://customers-test.ranneh.com/api/v1/search?q=${this.query}`;
		var options = {
        "method": "GET",
        "contentType": "application/json",
    }; 
		
		return fetch(url,options).then((res) => res.json());
	}
}

module.exports = api;