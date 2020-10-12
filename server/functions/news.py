# -*- coding: utf-8 -*-
from GoogleNews import GoogleNews
from urllib.parse import urlparse

def get_domain(s):
	parsed_uri = urlparse(s)
	result = '{uri.netloc}'.format(uri=parsed_uri)
	return result


def get_news(text):
	googlenews = GoogleNews()
	googlenews.search(text)
	googlenews.clear()
	googlenews.getpage(2)
	result = googlenews.result()
	for index in result[0]:
		# print(index, '\n', result[0][index])
		if index == "title":
			title = result[0][index]
		elif index == "link":
			link = result[0][index]
			domain = get_domain(link)
		else:
			continue

	return title, link, domain
