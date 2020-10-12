The browser extension was developed using `Javascript` and `Chrome Extensions API`.

It has two main files: `script.js` and `background.js`.

#### script.js

This script is responsible for monitoring changes in your news feed, and detecting which of the items are news.
I did this by selecting all news feed items that have a link, which of course, may contain non-political content. 

This is why we need to send the headline to the `suggestions` API, which will detect if the headline is related to politics or not.

As this is script doesn't have permission to run CORS requests, we need to send a message to the `background.js` script, which will then call the API.

#### background.js

After receiving a message with a headline, the `background.js` script calls the `/suggestions` endpoint. Finally, after receiving the response, it send the response back to the main script, which will then render the templates with the alternative news returned from the API.
