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

	return result

print(get_news('Steve Bannon key Trumps rise border-wall supporters news'))