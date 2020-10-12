from flask import Flask, jsonify, render_template, request
from wit import Wit
import uuid
from flask_cors import CORS
from functions.stance import news_stance
from functions.news import get_news
from functions.keywords import get_keywords
from functions.summarize import summarize
from functions.similarity import text_similarity
from functions.scrape import scrape_img
from functions.nouns import get_nouns

app = Flask(__name__)
client = Wit("RMFPOSOO7USJCGV6OVOEFAURW7E3DUUW")
CORS(app)
app.config["DEBUG"] = True

def get_traits(message):
	traits = client.message(message)["traits"]
	print(traits)
	return traits

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/suggestions', methods=['GET'])
def suggestions():
	headline = request.args.get('headline')
	# headline = "News article sample"

	response = {
		'headline': headline,
		'suggestions': ''
	}
	stance = "central"
	arr = []

	stance = news_stance(headline)
	summarized = summarize(headline)
	# summarized = get_nouns(headline)
	if stance == "right":
		summarized = summarized + " bad news"
	elif stance == "left":
		summarized = summarized + " good positive advantage benefit"
	title, link, domain = get_news(summarized)
	similarity = text_similarity(headline, summarized)
	img = scrape_img(link)

	source = {
		'domain': domain,
		'id': uuid.uuid4(),
		'image': img,
		'link': link,
		'similarity': similarity,  
		'stance': stance,
		'title' : title,
	}
	arr.append(source)
	response['suggestions'] = arr
	return response


@app.route('/is_political', methods=['GET'])
def is_news_political():
	political = False
	political_trait = get_traits(request.args.get('headline'))["Political"][0]
	# political_trait = get_traits("Bill Clinton and Sally Yates dress down Trump: Key moments from Night 2 of the Dem convention")["Political"][0]
	print(political_trait)
	if political_trait["value"] == "political":
		political = True 
	response = {
		'political' : political
	}
	return jsonify(response)

@app.route('/political_stance', methods=['GET'])
def political_stance():
	stance = "right"
	traits = get_traits(request.args.get('headline'))
	# traits = get_traits("Philippines expected to end GCQ")
	if 'wit$sentiment' in traits:
		political_stance = traits['wit$sentiment'][0]
		if political_stance["value"] == "positive":
			stance = "right"
		elif political_stance["value"] == "negative":
			stance = "left"
		elif political_stance["value"] == "neutral"  and political_stance["confidence"] > 0.6:
			stance = "right"
		else:
			stance = "central"
		response = {
			'stance' : stance
		}
		return jsonify(response)
	stance = "central"
	response = {
		'stance' : stance
	}
	return jsonify(response)

if __name__ == "__main__":
    app.run(host='0.0.0.0')

