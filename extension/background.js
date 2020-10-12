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