/*----------
#prototype.js
#about:
#created:
#author:
----------*/

//----------
//variable declarations
//----------

//----------
//function and class declarations

class ScoreComponent {
  getAsHTMLElement () {
    var output  = document.createElement("div");
    var icon = document.createElement("i");
    var label = document.createElement("p");
    var text = document.createElement("span");

    $(icon).addClass(this.icon);
    $(output).addClass("ui segment ScoreComponent");

    $(label).html(this.label + "<br><br>");
    $(text).html(this.text);

    $(label).append(text);
    $(output).append(icon);
    $(output).append(label);

    return output;
  }

  //defaults
  setDefaultSite () {
    this.icon = "large columns icon";
    this.label = "Site Quality";
    this.text = "medium";
  }

  setDefaultSource() {
    this.icon = "large globe icon";
    this.label = "Sources Quality";
    this.text = "medium";
  }

  setDefaultAuthor() {
    this.icon = "large university icon";
    this.label = "Author Info";
    this.text = "medium";
  }

  //constructor
  constructor (icon, label, text) {
    this.icon = icon;
    this.label = label;
    this.text = text;
  }
}

class CredibilityScore {
  getAsHTMLElement () {
    var output = document.createElement('div');
    var c1 = document.createElement('div');
    var c2 = document.createElement('div');
    var scoreContainer = document.createElement('div');
    var score = document.createElement('h1');
    var percent = document.createElement('span');
    var text = document.createElement('p');
    var comp1 = ""
    var comp2 = ""
    var comp3 = ""

    $(score).addClass("ui yellow header")
    $(scoreContainer).addClass("ui basic center aligned segment")
    $(output).addClass("ui center aligned column CredibilityScore");

    $(score).append(this.score);
    $(percent).append('%');
    $(text).append('Credibility Score');

    $(score).append(percent);
    $(scoreContainer).append(score);
    $(scoreContainer).append(text)

    if (this.components == null) {
      comp1 = new ScoreComponent
      comp1.setDefaultSite()
      comp1 = comp1.getAsHTMLElement()

      comp2 = new ScoreComponent
      comp2.setDefaultSource()
      comp2 = comp2.getAsHTMLElement()

      comp3 = new ScoreComponent
      comp3.setDefaultAuthor()
      comp3 = comp3.getAsHTMLElement()
    }
    //else; else statement not implemented

    $(c1).append(scoreContainer);
    $(c1).append(comp1);
    $(c2).append(comp2);
    $(c2).append(comp3);
    $(output).append(c1);
    $(output).append(c2);

    return output;
  }

  constructor (score,components) {
    this.score = score;
    this.components = components;
  }
}

class ProgramDescription {
  getAsHTMLElement () {
    var output = document.createElement("div");
    var icon = document.createElement("i");
    var version = document.createElement("span");
    var description = document.createElement("div");

    $(icon).addClass("huge teal balance scale icon");
    $(output).addClass("ui center aligned column ProgramDescription")

    if (this.description == null) {
      this.setDefaultDescription()
    }
    if (this.version == null) {
      this.setDefaultVersion()
    }

    $(version).append(this.version)
    $(description).append(this.description)

    $(output).append("<br>");
    $(output).append(icon);
    $(output).append("<br><br>");
    $(output).append(version);
    $(output).append(description);

    return output
  }

  setDefaultDescription () {
    this.description = "<b>Truthfool</b> description here."
  }
  setDefaultVersion () {
    this.version = "Truthfool V1.0.0"
  }

  constructor (description, version) {
    this.description = description
    this.version = version
  }
}

class Article {
  getAsHTMLElement () {
    var output = document.createElement("div");
    var article = document.createElement("div");
    var date = document.createElement("div");
    var link = document.createElement("a");
    var linkc = document.createElement("div");
    var author = document.createElement("div");

    $(output).addClass("Article")
    $(article).addClass("ui segment")

    $(link).append("\"");
    $(link).append(this.headline)
    $(link).append("\"");
    $(link).attr("href", this.href);
    $(author).append("-")
    $(author).append(this.author);
    $(date).append(this.date);

    $(linkc).append(link);
    $(article).append(linkc);
    $(article).append(author);
    $(output).append(article);

    if (this.date != null) {
      $(output).append(date)
    }

    return output;
  }

  constructor (headline, href, author, date) {
    this.headline = headline;
    this.href = href;
    this.author = author;
    this.date = date;
  }
}

class ArticleContainer {
  getAsHTMLElement() {
    var output = document.createElement("div");

    $(output).addClass("ui column ArticleContainer");

    for (var i = 0; i < this.articles.length; i++) {
      var article = this.articles[i]
      article = new Article(article.headline, article.href, article.author, article.date)
      article = article.getAsHTMLElement()
      $(output).append(article)
    }

    return output
  }

  constructor (articles) {
    this.articles = articles;
  }
}

class MainArticlePopup {
  getAsHTMLElement() {
    var output = document.createElement("div")
    var container = document.createElement("div")
    $(output).addClass("ui fluid popup")
    $(output).attr("id",this.id)
    $(container).addClass("ui three column divided grid")

    var programDescription = new ProgramDescription(this.pInfo.description, this.pInfo.version)
    programDescription = programDescription.getAsHTMLElement()

    var credibilityScore = new CredibilityScore(this.sInfo.score, this.sInfo.components)
    credibilityScore = credibilityScore.getAsHTMLElement()

    var articleContainer = new ArticleContainer(this.aInfo)
    articleContainer = articleContainer.getAsHTMLElement()
    $(articleContainer).css("max-height","300px")

    $(container).append(programDescription);
    $(container).append(credibilityScore);
    $(container).append(articleContainer);
    $(output).append(container);

    return output;
  }


  constructor (id, pInfo, sInfo, aInfo) {
    this.id = id
    this.pInfo = pInfo
    this.sInfo = sInfo
    this.aInfo = aInfo
  }
}

class KeywordDefinition {
  getAsHTMLElement() {
    var output = document.createElement("div");
    var image = document.createElement("img");
    var sourceText = document.createElement("i");
    var source = document.createElement("a");
    var text = document.createElement("div")

    $(output).addClass("column KeywordDefinition")
    $(image).addClass("ui image")

    $(image).attr("src",this.imgSource)
    $(source).append(this.source)
    $(source).attr("href",this.href)
    $(text).append(this.text)
    $(sourceText).append("Taken from: ")

    $(output).append(image)
    $(output).append(text)
    $(output).append("<br><br>")
    $(output).append(sourceText)
    $(output).append(source)

    return output
  }

  constructor (imgSource, text, source, href) {
    this.imgSource = imgSource
    this.text = text
    this.source = source
    this.href = href
  }
}

class KeywordPopup {
  getAsHTMLElement () {
    var output = document.createElement("div")
    $(output).addClass("ui popup");
    var container = document.createElement("div")
    $(container).addClass("ui two column divided grid")
    $(container).css("min-width","450px")
    $(output).attr("id",this.id)

    var keywordDefinition = new KeywordDefinition (this.dInfo.imgSource, this.dInfo.text, this.dInfo.source, this.dInfo.href)
    keywordDefinition = keywordDefinition.getAsHTMLElement()
    $(container).append(keywordDefinition)

    var articleContainer = new ArticleContainer(this.aInfo)
    articleContainer = articleContainer.getAsHTMLElement()
    $(articleContainer).css("max-height","550px")
    $(container).append(articleContainer)

    $(output).append(container)

    return output
  }

  constructor (id, dInfo, aInfo) {
    this.id = id
    this.dInfo = dInfo
    this.aInfo = aInfo
  }
}

class SpecialKeywordDefinition {
  getAsHTMLElement () {
    var output = document.createElement("div")
    var header = document.createElement("p")
    var text = document.createElement("p")
    var outro = document.createElement("p")
    var cta = document.createElement("p")

    $(output).addClass("column SpecialKeywordDefinition")

    var icon = document.createElement("i")
    $(icon).addClass(this.icon)
    var hey = document.createElement("span")
    $(hey).append("Hey!")
    $(header).append(icon)
    $(header).append("<br>")
    $(header).append(hey)

    $(text).append(this.text)

    $(outro).append("Hey, we hope everything's ok... <b> but maybe you're going through this? </b>")

    $(cta).append("Maybe we can go through it together?")
    var i = document.createElement("i")
    $(i).addClass("yellow arrow right icon")
    $(cta).append(i)

    $(output).append(header)
    $(output).append("<br>")
    $(output).append(text)
    $(output).append("<br>")
    $(output).append(outro)
    $(output).append("<br>")
    $(output).append(cta)

    return output
  }


  constructor (icon,text) {
    this.icon = icon
    this.text = text
  }
}

class Community {
  getAsHTMLElement () {
    var output = document.createElement("a")
    var icon = document.createElement("i")

    $(output).addClass("ui basic label");
    $(icon).addClass(this.icon)
    $(output).attr("href",this.href)
    $(output).append(icon)
    $(output).append(this.name)

    return output
  }

  constructor (icon,name,href) {
    this.icon = icon
    this.name = name
    this.href = href
  }
}

class Contact {
  getAsHTMLElement() {
    var output = document.createElement('div')
    var link = document.createElement('a')
    var source = document.createElement('i')

    $(link).attr("href",this.href)
    $(link).append(this.name)
    $(source).append(this.source)

    $(output).append(link)
    $(output).append("<br>")
    $(output).append(source)

    return output
  }

  constructor (name,source,href) {
    this.name = name
    this.source = source
    this.href = href
  }
}

class SpecialKeywordRecommendation {
  getAsHTMLElement() {
    var output = document.createElement('div')

    var communities = document.createElement('div')
    var communityHeader = document.createElement('div')

    var contacts = document.createElement('div')
    var contactHeader = document.createElement('div')

    var articles = document.createElement('div')
    var articleHeader = document.createElement('div')

    $(output).addClass("column SpecialRecommendation")
    $(communityHeader).addClass("ui horizontal divider")
    $(communityHeader).append("Communities")
    $(contactHeader).addClass("ui horizontal divider")
    $(contactHeader).append("Talk to Someone")
    $(articleHeader).addClass("ui horizontal divider")
    $(articleHeader).append("articles")

    if (this.cmInfo == null) {
      this.cmInfo = [
        {icon:"large blue facebook icon",
         name:"ADS Philippines",
         href:"https://web.facebook.com/ADSPpage/?_rdc=1&_rdr"},
         {icon:"large blue facebook icon",
          name:"MentalHealthPH",
          href:"https://web.facebook.com/mentalhealthph?_rdc=1&_rdr"}
      ]
    }
    if (this.cnInfo == null) {
      this.cnInfo = [
        {name:"Students Against Depression",
         source:"studentsagainstdepression.org",
         href:"https://www.studentsagainstdepression.org/"},
        {name:"Silakbo",
         source:"silakbo.ph",
         href:"http://www.silakbo.ph/help/"},
        {name:"Philippine Association of Christian Counselors",
         source:"philacc.org",
         href:"http://www.philacc.org/?fbclid=IwAR3nZnsWtzjNlm5VspXQHWGf_KMsndVbknRVmiwt_1cjtBwpAqj6REczPbw"},
        {name:"In-Touch",
         source:"in-touch.org",
         href:"https://www.in-touch.org/"}
      ]
    }
    if (this.aInfo == null) {
      this.aInfo = [
        {headline:"To the Depressed Christian",
         href:"https://www.cru.org/us/en/blog/life-and-relationships/emotions/to-the-depressed-christian.html",
         author: "cru.org",
         date:null
        }
      ]
    }

    for (var i = 0; i < this.cmInfo.length ; i++) {
      var community = new Community(this.cmInfo[i].icon, this.cmInfo[i].name, this.cmInfo[i].href)
      community = community.getAsHTMLElement()
      $(communities).append(community)
    }

    var contactsContainer = document.createElement("div")
    for (var i = 0; i < this.cnInfo.length ; i++) {
      var contact = new Contact(this.cnInfo[i].name, this.cnInfo[i].source, this.cnInfo[i].href)
      contact = contact.getAsHTMLElement()
      if (i%2 == 0) {
        $(contact).children().first().addClass("ui grey left pointing label")
      }
      else {
        $(contact).children().first().addClass("ui teal right pointing label")
      }
      $(contactsContainer).append(contact)
    }
    $(contacts).append(contactsContainer)
    for (var i = 0; i < this.aInfo.length ; i++) {
      var article = new Article(this.aInfo[i].headline, this.aInfo[i].href, this.aInfo[i].author, this.aInfo[i].date)
      article = article.getAsHTMLElement()
      $(articles).append(article)
    }

    $(communities).prepend(communityHeader)
    $(contacts).prepend(contactHeader)
    $(articles).prepend(articleHeader)

    $(output).append(communities)
    $(output).append(contacts)
    $(output).append(articles)

    console.log(output);
    return output
  }

  constructor(cmInfo, cnInfo, aInfo) {
    this.cmInfo = cmInfo
    this.cnInfo = cnInfo
    this.aInfo = aInfo
  }
}

class SpecialKeywordPopup {
  getAsHTMLElement() {
    var output = document.createElement("div")
    var container = document.createElement("div")

    $(output).addClass("ui popup")
    $(container).addClass("ui two column divided grid")
    $(container).css("min-width","500px")
    $(output).attr("id",this.id)

    var definition = new SpecialKeywordDefinition (this.defInfo.icon, this.defInfo.text)
    definition = definition.getAsHTMLElement()

    var recommendation = new SpecialKeywordRecommendation(this.rInfo.cmInfo, this.rInfo.cnInfo, this.rInfo.aInfo)
    recommendation = recommendation.getAsHTMLElement()

    $(container).append(definition)
    $(container).append(recommendation)
    $(output).append(container)

    return output
  }
  constructor(id, defInfo, rInfo) {
    this.id = id
    this.defInfo = defInfo
    this.rInfo = rInfo
  }
}
//----------

//----------
//document ready
$(function() {
  //popup functions to be replaced with a factory model.
  $("#1").popup({
    popup: '#1-popup',
    hoverable: true,
    position: 'right center',
    prefer: 'opposite',
    lastResort: true
  });
  $("#2").popup({
    popup: '#2-popup',
    hoverable: true,
    position: 'right center',
    prefer: 'opposite',
    lastResort: true,
  });
  $("#3").popup({
    popup: '#3-popup',
    hoverable: true,
    position: 'right center',
    prefer: 'opposite',
    lastResort: true,
  });
  $("#article_header_1").popup({
    popup: '#1_article_header_popup',
    position: 'right center',
    lastResort: true,
    hoverable: true,
    prefer: 'opposite',
  });

  //dynamic popup samples
  var test2 = new SpecialKeywordPopup("3-popup",{icon:"circular teal street view icon",text:"<b>Keyword</b><script> console.log('eyy')</script> definition here. Depression is where lorem ipsum dolor amet. The quick brown fox jumped over the lazy dogs. The shortest distance between two points is a straight line. Alternating interior angles are congruent. The sum fo all the angles inside a triangle are 180."},{cmInfo:null,cnInfo:null,aInfo:null});
  test2 = test2.getAsHTMLElement()
  $("body").append(test2)

  var test1 = new KeywordPopup("1-popup",{imgSource:"../Assets/1_popup_image.jpg",text:"<b> Manila </b>, officially the City of Manila, is the capital of the Philippines and a highly urbanized city. It is the most densely populated city proper in the world as of 2019.",source:"wikipedia.org",href:"https://en.wikipedia.org/wiki/Manila"},[{headline:"arvin",href:"something",author:"something else",date:"today"},{headline:"arvin",href:"something",author:"something else",date:"today"},{headline:"chelubai",href:"something",author:"something else",date:null},{headline:"Joshua",href:"something",author:"something else",date:"4 days ago"},{headline:"Faisal",href:"something",author:"something else",date:"10 days ago"}])
  test1 = test1.getAsHTMLElement()
  $("body").append(test1)

  var test = new MainArticlePopup("1_article_header_popup",{description:null,version:null},{score:"20",components:null},[{headline:"arvin",href:"something",author:"something else",date:"today"},{headline:"chelubai",href:"something",author:"something else",date:null},{headline:"Joshua",href:"something",author:"something else",date:"4 days ago"},{headline:"Faisal",href:"something",author:"something else",date:"10 days ago"}])
  test = test.getAsHTMLElement()
  $("body").append(test)
});
