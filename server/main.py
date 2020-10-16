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
from PyDictionary import PyDictionary
#pip install -U spacy

app = Flask(__name__)
client = Wit("RMFPOSOO7USJCGV6OVOEFAURW7E3DUUW")
CORS(app)
app.config["DEBUG"] = True
dictionary=PyDictionary()

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

	source = {
		'domain': domain,
		'id': uuid.uuid4(),
		'image': "img",
		'link': link,
		'similarity': similarity,  
		'stance': stance,
		'title' : title,
	}
	arr.append(source)
	response['suggestions'] = arr
	return response

@app.route('/definition', methods=['GET'])
def definition():
	text = request.args.get('text')
	return dictionary.meaning(text)



if __name__ == "__main__":
    app.run(host='0.0.0.0')

