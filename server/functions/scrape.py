from urllib.request import urlopen
from bs4 import BeautifulSoup
import re

# html = urlopen('https://en.wikipedia.org/wiki/Peter_Jeffrey_(RAAF_officer)')
def scrape_img(url):
	try: 
		html = urlopen(url)
		bs = BeautifulSoup(html, 'html.parser')
		images = bs.find_all('img', {'src':re.compile('.jpg')})
		img = images[0]['src']
		return img
	except:
		return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
