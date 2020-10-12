from rake_nltk import Rake
from nltk.corpus import stopwords 
r = Rake() # Uses stopwords for english from NLTK, and all puntuation characters.Please note that "hello" is not included in the list of stopwords.

def get_keywords(text):
	a=r.extract_keywords_from_text(text)
	b=r.get_ranked_phrases()
	c=r.get_ranked_phrases_with_scores()
	print(b)
	print(c)
	return b
