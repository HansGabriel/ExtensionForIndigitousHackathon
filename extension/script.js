// var _TEMPLATES = {
// 	alert : '<div data-testid="post_message" class="_5pbx userContent _3576" style="padding-bottom: 20px;padding-top: 10px;background: #fbeab6;margin-left: -12px;margin-right: -12px;margin-top: 0px;padding: 10px;"><p>The above post contains may be biased. Here is an alternative view of the topic.</p></div>',
// 	// suggestion : '<div class="clearfix _2r3x"> <div class="lfloat _ohe"> <span class="_3m6-"> <div class="_63yw"> <div class="_6ks"> <a href="$LINK$" aria-describedby="u_fetchstream_2_9" tabindex="-1" target="_blank" rel="noopener nofollow" data-lynx-mode="async"> <div class="_6l- __c_"> <div class="uiScaledImageContainer _6m5 fbStoryAttachmentImage" style="width: 100%;height: 120px;background: url(\'$IMAGE$\');background-repeat: no-repeat;background-size: auto;background-position: center;background-repeat: no-repeat;background-size: cover;"> </div> </div> </a> </div> </div> <div class="_3ekx _29_4"> <div class="_6m3 _--6"> <div class="_59tj _2iau"> <div> <div class="_6lz _6mb _1t62 ellipsis">$DOMAIN$</div> <div class=""></div> </div> </div> <div class="_3n1k"> <div class="mbs _6m6 _2cnj _5s6c"><a href="$LINK$" rel="noopener nofollow" target="_blank" data-lynx-mode="async">$TITLE$</a></div> <div class="_6m7 _3bt9"></div> </div> </div> <a href="$LINK$" aria-describedby="u_fetchstream_2_5" rel="noopener nofollow" tabindex="-1" target="_blank" class="_52c6" > <div class="accessible_elem" id="u_fetchstream_2_5">$DESCRIPTION$</div> </a> </div> </span> </div> <div class="_42ef"><span class="_3c21"></span></div> </div>',
// 	suggestion : '<div class="l9j0dhe7 jxk88fls rops0bsn n851cfcs"> <div class="l9j0dhe7"> <div class="b3i9ofy5 l9j0dhe7"><div class="j83agx80 soycq5t1 ni8dbmo4 stjgntxs l9j0dhe7"><a href="$LINK$" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 datstx6m k4urcfbm"><div class="bp9cbjyn tqsryivl j83agx80 cbu4d94t ni8dbmo4 stjgntxs l9j0dhe7 k4urcfbm"><div style="max-width: 100%; min-width: 500px; width: calc((100vh + -325px) * 1.91571);"><div class="do00u71z ni8dbmo4 stjgntxs l9j0dhe7" style="padding-top: 52.2%;"><div class="pmk7jnqg kr520xx4" style="height: 100%; left: 0%; width: calc(100%);"><img height="261" width="500" src="$IMAGE$" class="i09qtzwb n7fi1qx3 datstx6m pmk7jnqg j9ispegn kr520xx4 k4urcfbm bixrwtb6"> </div></div></div></div></a></div></div></div></div> <div class="stjgntxs ni8dbmo4"><div class="l9j0dhe7"><a href="$LINK$" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 p8dawk7l headlined-checked"><div class="b3i9ofy5 s1tcr66n l9j0dhe7 p8dawk7l"><div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd bp9cbjyn owycx6da btwxx1t3 b5q2rw42 lq239pai f10w8fjw hv4rvrfc dati1w0a pybr56ya"><div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz rj1gh0hx buofh1pr g5gj957u p8fzw8mz pcp91wgn"><div class="bi6gxh9e sqxagodl"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb iv3no6db e9vueds3 j5wam9gi knj5qynh m9osqain"><span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5 ojkyduve">$DOMAIN$</span></span></div><div class="enqfppq2 muag1w35 ni8dbmo4 stjgntxs e5nlhep0 ecm0bbzt rq0escxv a5q79mjw r9c01rrb"><div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg"><div class="qzhwtbm6 knvmm38d"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db a5q79mjw g1cxx5fr lrazzd5p oo9gr5id hzawbc8m"><span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ojkyduve" style="-webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box;"><span dir="auto">$TITLE$</span></span></span></div></div></div></div></div></div></a></div></div>',
// 	leftContent : '<div class="_6m2 _1zpr clearfix _dcs _4_w4 _41u- _59ap _2bf7 _64lx _3eqz _20pq _3eqw _2rk1 _359m _3n1j" style="width: 497px;display: inline-block;margin-right: 0px;border-right: 1px solid #ccc;">$CONTENT$</div>',
	
// }

// var _HEADLINE_CLASS = 'headlined-checked';

// function sendMessage(message, cb){
// 	if(typeof chrome.app.isInstalled!=='undefined'){
//    		chrome.runtime.sendMessage(message, cb)
// 	}
// }

// function hasSuggestions(response) {
// 	if (!response.success) {
// 		return false;
// 	}

// 	if (response.suggestions == null || response.suggestions.length == 0) {
// 		return false;
// 	}	
// 	return true;
// }

// function replaceVariables(template, variables) {
// 	if (typeof variables != 'undefined') {
// 		for ( var key in variables) {
// 			template = template.replace(new RegExp('\\$'+key.toUpperCase()+ '\\$', "gi"),variables[key]);
// 		}	
// 	}

// 	return template	
// }
// function convertTemplateToDOM(template, variables) {
// 	template = replaceVariables(template, variables);	
// 	return new DOMParser().parseFromString(template, 'text/html').body.firstChild;

// }
// function renderSuggestions(parent, suggestions) {

// 	var alert = convertTemplateToDOM(_TEMPLATES.alert);
// 	var suggestion1 =  replaceVariables(_TEMPLATES.suggestion, suggestions[0]);
	

// 	var leftContent = convertTemplateToDOM(_TEMPLATES.leftContent,{content : suggestion1})
	

// 	parent.appendChild(alert);
// 	parent.appendChild(leftContent);
	
// }

// function getNewsHeadlines() {
// 	document.querySelectorAll('.du4w35lb.k4urcfbm.l9j0dhe7.sjgh65i0').forEach(function(e){	
// 		var headlineElement = e.querySelector('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.a8c37x1j.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.p8dawk7l');
		
// 	    if (typeof headlineElement === 'undefined' || headlineElement == null) {
// 	    	return;
// 	    }

// 	    if (headlineElement.classList.contains(_HEADLINE_CLASS)) {
// 	    	return;
// 	    }	    

// 		headlineElement.classList.toggle(_HEADLINE_CLASS);
		
// 		console.log(headlineElement)
// 		var p = headlineElement.parentElement.parentElement.parentElement
// 		console.log(p)
// 		var x = e.querySelector('span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.rrkovp55.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.a5q79mjw.g1cxx5fr.lrazzd5p.oo9gr5id.hzawbc8m')
// 		var y = x.querySelector('span.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ojkyduve')
// 		var headline = y.textContent
// 		console.log(headline)

// 	    sendMessage({action:'suggestions', headline:headline}, function(response) {	    	
// 	    	if (!hasSuggestions(response)) {
// 	    		return;
// 	    	}		
// 	    	renderSuggestions(p, response.suggestions);
// 	    });
// 	})
// };

// setInterval(function(){
// 	getNewsHeadlines();
// },500)

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded(){
	var link = document.createElement('link');
	link.rel = "stylesheet"
	link.href = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
	link.integrity = "sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
	link.crossOrigin  = "anonymous"
	var script = document.createElement('script');
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"
	script.integrity = "sha512-dqw6X88iGgZlTsONxZK9ePmJEFrmHwpuMrsUChjAw1mRUhUITE5QU9pkcSox+ynfLhL15Sv2al5A0LVyDCmtUw=="
	script.crossOrigin = "anonymous"
	document.head.appendChild(link);
	document.head.appendChild(script);
}

var _TEMPLATES = {
	alert : '<div data-testid="post_message" class="_5pbx userContent _3576" style="padding-bottom: 20px;padding-top: 10px;background: #fbeab6;margin-left: -12px;margin-right: -12px;margin-top: 0px;padding: 10px;"><p>The above post contains may be biased. Here is an alternative view of the topic.</p></div>',
	// suggestion : '<div class="clearfix _2r3x"> <div class="lfloat _ohe"> <span class="_3m6-"> <div class="_63yw"> <div class="_6ks"> <a href="$LINK$" aria-describedby="u_fetchstream_2_9" tabindex="-1" target="_blank" rel="noopener nofollow" data-lynx-mode="async"> <div class="_6l- __c_"> <div class="uiScaledImageContainer _6m5 fbStoryAttachmentImage" style="width: 100%;height: 120px;background: url(\'$IMAGE$\');background-repeat: no-repeat;background-size: auto;background-position: center;background-repeat: no-repeat;background-size: cover;"> </div> </div> </a> </div> </div> <div class="_3ekx _29_4"> <div class="_6m3 _--6"> <div class="_59tj _2iau"> <div> <div class="_6lz _6mb _1t62 ellipsis">$DOMAIN$</div> <div class=""></div> </div> </div> <div class="_3n1k"> <div class="mbs _6m6 _2cnj _5s6c"><a href="$LINK$" rel="noopener nofollow" target="_blank" data-lynx-mode="async">$TITLE$</a></div> <div class="_6m7 _3bt9"></div> </div> </div> <a href="$LINK$" aria-describedby="u_fetchstream_2_5" rel="noopener nofollow" tabindex="-1" target="_blank" class="_52c6" > <div class="accessible_elem" id="u_fetchstream_2_5">$DESCRIPTION$</div> </a> </div> </span> </div> <div class="_42ef"><span class="_3c21"></span></div> </div>',
	suggestion : '<div class="l9j0dhe7 jxk88fls rops0bsn n851cfcs"> <div class="l9j0dhe7"> <div class="b3i9ofy5 l9j0dhe7"><div class="j83agx80 soycq5t1 ni8dbmo4 stjgntxs l9j0dhe7"><a href="$LINK$" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 datstx6m k4urcfbm"><div class="bp9cbjyn tqsryivl j83agx80 cbu4d94t ni8dbmo4 stjgntxs l9j0dhe7 k4urcfbm"><div style="max-width: 100%; min-width: 500px; width: calc((100vh + -325px) * 1.91571);"><div class="do00u71z ni8dbmo4 stjgntxs l9j0dhe7" style="padding-top: 52.2%;"><div class="pmk7jnqg kr520xx4" style="height: 100%; left: 0%; width: calc(100%);"><img height="261" width="500" src="$IMAGE$" class="i09qtzwb n7fi1qx3 datstx6m pmk7jnqg j9ispegn kr520xx4 k4urcfbm bixrwtb6"> </div></div></div></div></a></div></div></div></div> <div class="stjgntxs ni8dbmo4"><div class="l9j0dhe7"><a href="$LINK$" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 p8dawk7l headlined-checked"><div class="b3i9ofy5 s1tcr66n l9j0dhe7 p8dawk7l"><div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd bp9cbjyn owycx6da btwxx1t3 b5q2rw42 lq239pai f10w8fjw hv4rvrfc dati1w0a pybr56ya"><div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz rj1gh0hx buofh1pr g5gj957u p8fzw8mz pcp91wgn"><div class="bi6gxh9e sqxagodl"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb iv3no6db e9vueds3 j5wam9gi knj5qynh m9osqain"><span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5 ojkyduve">$DOMAIN$</span></span></div><div class="enqfppq2 muag1w35 ni8dbmo4 stjgntxs e5nlhep0 ecm0bbzt rq0escxv a5q79mjw r9c01rrb"><div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg"><div class="qzhwtbm6 knvmm38d"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db a5q79mjw g1cxx5fr lrazzd5p oo9gr5id hzawbc8m"><span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ojkyduve" style="-webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box;"><span dir="auto">$TITLE$</span></span></span></div></div></div></div></div></div></a></div></div>',
	leftContent : '<div class="_6m2 _1zpr clearfix _dcs _4_w4 _41u- _59ap _2bf7 _64lx _3eqz _20pq _3eqw _2rk1 _359m _3n1j" style="width: 497px;display: inline-block;margin-right: 0px;border-right: 1px solid #ccc;">$CONTENT$</div>',
	hoverable: '<button id="article_header_1" class="ui large basic teal circular icon button"><i class="balance scale icon"></i> <span style="color: orange; padding-left: 5px"> !</span></button>',
	card: '<div id="1_article_header_popup" class="ui fluid"><div class="ui three column divided grid"><div class="ui center aligned column"><br><i class="huge teal balance scale icon"></i><br><br><span style="font-weight: 600; font-size: 1.2em">Truthfool V1.0.0</span><div style="text-align: left; font-size: 0.8em; margin: 1em 1em;"><b> Truthfool </b> description here.</div></div><div class="ui center aligned column" style="background-color: dimgrey; color: lightgrey"><br><i class="yellow huge bug icon" style="color: white"></i><br><br><span style="font-weight: 600; font-size: 1.2em">Oops!</span><div style="text-align: left; font-size: 0.8em; margin: 1em 1em;"><span>This section is reserved for an articles <b> Credibility Score</b>. In the interest of time this was no longer implemented.</span></div></div><div class="ui column"><!article 1><div class="ui segment" style="font-size:0.9em; line-height: 1.5em;"><div style="text-align: left"><a href="https://www.rappler.com/nation/lord-allan-velasco-officially-new-house-representatives-speaker-october-13-2020" style="cursor: pointer"> "Its official: Lord Allan Velasco is new Speaker of the House" </a></div><div style="text-align: right; color: grey">- Rappler.com</div></div><div class="ui segment" style="font-size:0.9em; line-height: 1.5em"><div style="text-align:left"><a href="https://www.cnnphilippines.com/news/2020/10/13/Lord-Allan-Velasco-formally-elected-House-speaker.html" style="cursor: pointer"> "House ratifies Velascos election as Speaker" </a></div><div style="text-align: right; color: grey">- cnnphilippines.com</div></div><div class="ui segment" style="font-size:0.9em; line-height: 1.5em"><div style="text-align:left"><a href="https://www.gmanetwork.com/news/news/nation/759615/house-ratifies-election-of-velasco-as-speaker/story/" style="cursor: pointer"> "House ratifies election of Velasco as Speaker" </a></div><div style="text-align: right; color: grey">- gmanetwork.com</div></div></div></div></div>'
	// card: '<div id="1_article_header_popup" class="ui fluid">Hello</div>'
}

var _HEADLINE_CLASS = 'headlined-checked';

function sendMessage(message, cb){
	if(typeof chrome.app.isInstalled!=='undefined'){
   		chrome.runtime.sendMessage(message, cb)
	}
}

function hasSuggestions(response) {
	if (!response.success) {
		return false;
	}

	if (response.suggestions == null || response.suggestions.length == 0) {
		return false;
	}	
	return true;
}

function replaceVariables(template, variables) {
	if (typeof variables != 'undefined') {
		for ( var key in variables) {
			template = template.replace(new RegExp('\\$'+key.toUpperCase()+ '\\$', "gi"),variables[key]);
		}	
	}

	return template	
}
function convertTemplateToDOM(template, variables) {
	template = replaceVariables(template, variables);	
	return new DOMParser().parseFromString(template, 'text/html').body.firstChild;

}

function renderSuggestions(parent, suggestions) {
	var button = convertTemplateToDOM(_TEMPLATES.hoverable);
	var card = convertTemplateToDOM(_TEMPLATES.card);
	parent.appendChild(button);
	parent.appendChild(card);
	console.log(card)
	// document.getElementById("1_article_header_popup").innerHTML  = "visible";

}

function getNewsHeadlines() {
	document.querySelectorAll('.du4w35lb.k4urcfbm.l9j0dhe7.sjgh65i0').forEach(function(e){	
		var headlineElement = e.querySelector('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.a8c37x1j.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.p8dawk7l');
		
	    if (typeof headlineElement === 'undefined' || headlineElement == null) {
	    	return;
	    }

	    if (headlineElement.classList.contains(_HEADLINE_CLASS)) {
	    	return;
	    }	    

		headlineElement.classList.toggle(_HEADLINE_CLASS);
	
		var p = headlineElement.parentElement.parentElement.parentElement
		var x = e.querySelector('span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.rrkovp55.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.a5q79mjw.g1cxx5fr.lrazzd5p.oo9gr5id.hzawbc8m')
		var y = x.querySelector('span.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ojkyduve')
		var headline = y.textContent

	    // sendMessage({action:'suggestions', headline:headline}, function(response) {	    	
	    // 	if (!hasSuggestions(response)) {
	    // 		return;
	    // 	}		
	    // 	renderSuggestions(p, response.suggestions);
		// });

		var response = {
			'domain': 'domain',
			'id': '1',
			'image': 'image',
			'link': 'link',
			'similarity': 'similarity',  
			'stance': 'stance',
			'title' : 'title',
		}
		
		renderSuggestions(p, response)
	})
};

setInterval(function(){
	getNewsHeadlines();
},500)
