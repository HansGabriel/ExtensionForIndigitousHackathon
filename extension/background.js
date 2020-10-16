var _API_URL = 'http://localhost:5000';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {	
    if (request.action == "suggestions") {
    	getSuggestions(request.headline, function(response) {
    		sendResponse(response);
    	})
    }
    return true
});

function getSuggestions(headline, cb) {
	jQuery.get(_API_URL + '/suggestions?headline='+headline, function(data) {
		cb({
			success: true,
			suggestions: data.suggestions
		})
	})
	.fail(function() {    
		cb({
			success: false,
			suggestions: []
		})
  	})
}

chrome.runtime.onMessage.addListener(receiver);

window.word = 'Highlight a text a definition will appear here';

function receiver(request, sender, sendResponse) {
	if (request.action == "definition") {
		text = request.text;
		console.log(text)
		jQuery.get(_API_URL + '/definition?text='+text, function(data) {
			console.log(data.Noun[0])
			word = data.Noun[0]
		})
		.fail(function() {    
			console.log(1)
			word = ""
		  })
    }
}