import spacy

def get_nouns(text):
	nlp = spacy.load("en_core_web_sm")
	text = (text)
	doc = nlp(text)
	arr = [chunk.text for chunk in doc.noun_chunks]
	return " ".join(arr)
