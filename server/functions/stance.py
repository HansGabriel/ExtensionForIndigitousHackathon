from wit import Wit
client = Wit("RMFPOSOO7USJCGV6OVOEFAURW7E3DUUW")

def get_traits(message):
	traits = client.message(message)["traits"]
	print(traits)
	return traits

def news_stance(text):
	stance = "right"
	traits = get_traits(text)
	if 'wit$sentiment' in traits:
		political_stance = traits['wit$sentiment'][0]
		if political_stance["value"] == "positive":
			stance = "right"
		elif political_stance["value"] == "negative":
			stance = "left"
		elif political_stance["value"] == "neutral"  and political_stance["confidence"] > 0.6:
			stance = "right"
		else:
			stance = "center"
		return stance
	stance = "center"

	return stance
