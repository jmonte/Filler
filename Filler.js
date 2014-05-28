
var Filler = Filler || {};
(function( app , win ){

	var textTypes = {
		'firstName' : {
			'list' : [ "Charles",
					   "Francis",
					   "Scott",
					   "Robert",
					   "Louis",
					   "Bobby"
					  ]
		},
		'lastName' : {
			'list' : [ 	"Xavier",
					 	"Summers",
					 	"Drake",
					 	"Worthington",
					 	"McCoy",
					 	"Grey"]
		},
		'name' : {
			'format' : '{{firstName}} {{lastName}}'
		},
		'phone' : {
			'format' : '(%3i) %i-%4i'
		},
		'lorem' : {
			list :  [
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius diam id dapibus malesuada. Praesent et metus vitae leo consectetur faucibus. Maecenas sodales velit rhoncus volutpat dignissim. Quisque facilisis venenatis magna in sagittis. In hac habitasse platea dictumst. Morbi mattis egestas arcu non convallis. Morbi non libero eget purus luctus pharetra sit amet id risus. Etiam nulla libero, porta convallis orci eu, pulvinar aliquam odio. Nullam egestas libero neque. Duis suscipit lobortis metus, placerat aliquam orci sollicitudin nec. Nullam feugiat, nunc id convallis pharetra, dui nisi tincidunt ante, ut venenatis velit lectus quis mi. Vivamus ante justo, gravida a aliquam in, molestie eget lectus. Aliquam facilisis arcu sit amet justo pulvinar, eu imperdiet erat tincidunt.",
						"Morbi ac ultrices tellus. Maecenas mattis rhoncus risus sed cursus. Aenean ac accumsan lectus, vel pellentesque ante. Nam nec lectus id tortor ornare porta. Curabitur porta metus sed orci pellentesque auctor. Aenean imperdiet varius orci, a vestibulum ante. Mauris sed cursus sem, in fermentum erat. Vestibulum eget risus non magna egestas cursus. Praesent a felis volutpat, venenatis velit sit amet, dapibus nisl. Phasellus et justo sapien. Integer a nisl et arcu ultrices consequat. Nam ac mollis enim. Pellentesque vel tristique quam. Aliquam neque sapien, varius a egestas nec, dapibus at nisi. Nunc cursus, felis non cursus ullamcorper, turpis eros sollicitudin lectus, id condimentum sapien massa sed enim.",
						"Sed vel dictum tellus, ut iaculis neque. In eros erat, molestie non lorem congue, auctor mattis erat. Mauris interdum dictum orci nec aliquet. Integer eget enim eu sem vulputate placerat nec vel ante. Ut pharetra fermentum tristique. Vivamus rutrum tortor nisi, sed molestie metus malesuada in. Donec eu augue vehicula, tristique nisi ac, vestibulum lorem. Nullam adipiscing adipiscing nisi ut fringilla. Donec tincidunt elementum sapien sit amet aliquet. Donec mi purus, volutpat et nunc id, tristique porttitor eros. Vestibulum eget dignissim urna. Ut vel metus dolor. Donec interdum nulla vitae vehicula bibendum.",
						"Suspendisse pellentesque, est quis bibendum ullamcorper, nunc tortor blandit mauris, euismod consectetur justo turpis sit amet nulla. Nulla lobortis diam tellus, vitae dignissim nibh tincidunt tincidunt. Pellentesque iaculis vestibulum ultrices. Nulla sed adipiscing turpis. In auctor nisi eu risus porttitor consequat. Ut posuere mi ut tellus ultricies elementum. Vivamus in vehicula libero, et convallis quam. Aliquam fringilla pharetra felis. Mauris luctus lacinia mauris at dictum. Vivamus et metus ut erat congue suscipit eget vitae elit.",
						"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Proin vitae condimentum erat. Morbi semper ipsum dui, nec suscipit diam euismod sit amet. Suspendisse venenatis risus at orci porta egestas. Mauris commodo faucibus egestas. Phasellus sed leo placerat, elementum augue non, bibendum sapien. Ut fermentum, libero eget congue gravida, sapien metus ullamcorper metus, sit amet faucibus mi lectus at lorem. Proin volutpat consectetur eros egestas tempor. Sed et adipiscing enim. Sed id pharetra diam. Morbi velit nulla, malesuada non risus ultricies, ornare pellentesque lectus. Duis nunc purus, condimentum iaculis diam vel, fermentum cursus risus.",
						"Proin ut hendrerit ligula. Aenean sit amet lacus pretium, volutpat enim vel, rutrum lectus. Mauris ullamcorper orci sem, ut tempus dui lobortis vel. Sed eu luctus augue. Vestibulum imperdiet ornare nisi. Nam eleifend ligula et massa scelerisque euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in tempor massa. Vivamus porttitor diam eu diam dictum porta. Praesent viverra nisi ut libero venenatis mattis. Aenean rutrum lacinia dictum. Phasellus vestibulum turpis risus, rhoncus vulputate urna placerat quis. In hac habitasse platea dictumst. Morbi nec vehicula diam, nec laoreet neque.",
						"Suspendisse bibendum leo id consequat porta. Aliquam mattis blandit justo, nec tempus purus lacinia at. Etiam justo justo, molestie a laoreet eu, ornare vel magna. Pellentesque hendrerit dignissim ligula, eget viverra nisl aliquam sed. Aliquam erat volutpat. In ut ipsum lobortis, ornare elit vitae, pharetra augue. Cras a vestibulum justo, id tristique justo. Ut scelerisque pharetra massa ac luctus. Sed hendrerit, est eu consectetur lacinia, mauris dui sodales velit, id viverra nibh leo vel odio. Cras pretium, tortor ac vulputate malesuada, lectus urna fringilla velit, ac congue justo dolor vel tellus. Nulla tempus, ante at dignissim congue, ligula justo varius nisi, nec tincidunt diam mauris at risus. Phasellus malesuada malesuada dui, et lobortis justo.",
						"Praesent nisi purus, ullamcorper porttitor metus nec, varius ullamcorper tortor. Vivamus auctor sapien felis, sed scelerisque odio sagittis quis. Phasellus condimentum quam ac nisi pellentesque, in fringilla augue fermentum. Mauris pellentesque ut leo sed varius. Fusce placerat dapibus mi quis tincidunt. Donec luctus diam sem, vel adipiscing orci elementum et. Duis molestie, orci sed faucibus laoreet, risus lorem hendrerit nulla, eleifend vulputate lectus risus a neque. Nulla posuere ligula non orci faucibus hendrerit. Cras euismod commodo augue. Mauris semper tristique mauris, rutrum porttitor ligula ullamcorper vel. Maecenas sit amet leo mauris. Integer vel erat scelerisque, varius elit ut, consequat dolor. Fusce felis diam, ultricies eu rutrum sit amet, lacinia non dolor. Mauris sed ante aliquam dui cursus pellentesque. Vivamus aliquam, nibh vel rhoncus imperdiet, magna magna tempor ante, nec tristique elit justo sed sem. Proin vitae dui facilisis, vulputate eros sed, suscipit dolor.",
						"Quisque nisl eros, iaculis vitae mattis nec, pretium gravida nisi. Vivamus placerat aliquet vestibulum. Sed sed posuere arcu. Praesent lacinia in nunc sit amet commodo. Donec accumsan sollicitudin ligula, non vestibulum nunc scelerisque in. Aliquam feugiat auctor nisl, id pulvinar urna. Phasellus nec hendrerit ipsum. Fusce vitae lectus sagittis, facilisis ipsum congue, tincidunt libero. Vestibulum eu metus et turpis pharetra molestie non tincidunt arcu. Duis feugiat sed velit ac dignissim. Curabitur at velit nec eros dictum gravida. Duis sed elit et elit tristique lacinia ac sit amet arcu.",
						"Nunc commodo bibendum justo. Etiam varius, quam id congue consequat, neque mauris accumsan enim, non imperdiet lacus felis et est. Morbi eget dolor varius, fermentum metus pharetra, iaculis arcu. Aenean quam tortor, lobortis ac elementum eu, sodales sit amet lorem. Nunc feugiat, diam eu tristique laoreet, purus risus lobortis leo, et suscipit velit erat quis nulla. Duis non quam molestie nibh sodales consequat id ac nisi. Vestibulum mattis odio eu dolor tempor, faucibus cursus ante mollis. Maecenas et rhoncus augue. Nullam tempor, justo nec accumsan scelerisque, purus ligula dignissim dolor, quis feugiat ligula purus in magna. Sed non erat blandit, molestie libero ac, vestibulum lacus. Nulla tincidunt semper lectus et convallis. Fusce pharetra, sem nec posuere posuere, eros nibh interdum lectus, a ornare lorem enim eget tortor.",
						"Donec fermentum elementum ipsum non sagittis. In eleifend velit vel convallis posuere. Vivamus non egestas neque. Nunc in nibh interdum neque imperdiet feugiat nec at nisi. Mauris eu diam ornare, interdum mi at, condimentum diam. Vivamus vel quam urna. Ut eget leo ut purus ultricies iaculis. Vivamus hendrerit orci eu quam malesuada tincidunt. Cras in imperdiet ipsum. Suspendisse potenti. Morbi viverra vel neque ut convallis. Aliquam non dui tincidunt elit elementum consequat. Praesent pulvinar varius aliquam. Suspendisse tristique eget enim non volutpat. Nullam ac hendrerit nisi.",
						"Aliquam sapien odio, lobortis a justo et, euismod viverra elit. Praesent ultricies, erat et elementum imperdiet, magna sapien vulputate justo, sed iaculis arcu augue in nibh. Pellentesque vestibulum, nisl id facilisis fermentum, erat ante ullamcorper dolor, eu sagittis dolor ante ut nisi. Sed tempor ipsum sem, id tristique tellus ultricies eget. Etiam quis sem id mi consectetur molestie ac eget libero. Ut varius felis nunc, quis molestie velit pellentesque vitae. Praesent feugiat hendrerit magna, ac sollicitudin justo accumsan ut.",
						"Pellentesque sodales lorem a sagittis mollis. Praesent eget fermentum magna. Phasellus at orci condimentum, lacinia tortor nec, interdum nunc. Etiam quis mattis lorem. Cras blandit eros nibh, id tempus arcu blandit quis. Proin sit amet mollis erat, vitae mollis neque. Vivamus sit amet libero convallis, scelerisque turpis eget, bibendum erat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec congue ipsum, at vehicula arcu. Quisque lobortis magna diam, eget interdum diam dignissim eget. Aenean porta est libero, et congue diam rhoncus id. Suspendisse ante metus, posuere in ipsum pharetra, condimentum porttitor orci. Sed dapibus mauris non orci pretium, ac placerat quam sollicitudin. Nam consectetur sed justo a vestibulum. Ut eget diam pulvinar, hendrerit lectus at, venenatis lorem. Nunc at nulla sem.",
						"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent at enim vel dolor tempor dignissim. Donec ac sapien id lacus tempus fringilla at ac massa. Sed in elementum tellus. Integer neque massa, ultrices et lacinia eu, vehicula nec odio. Aliquam id venenatis turpis. Maecenas eu sem enim. Ut faucibus nisl urna, quis iaculis diam luctus at. Aliquam laoreet tempus gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
						"Ut tellus urna, imperdiet eget fringilla commodo, faucibus varius sapien. Morbi quis venenatis nulla. Etiam tristique ligula magna, a rhoncus sem posuere vitae. Mauris porta iaculis nibh, a ultrices leo molestie eget. Phasellus dapibus consectetur libero, at posuere mauris volutpat non. Fusce sed hendrerit libero. Morbi gravida mi sapien, et congue risus condimentum nec. Pellentesque sollicitudin facilisis velit non vulputate. Curabitur feugiat lorem in dui placerat, luctus aliquet urna ultrices. Phasellus blandit feugiat orci congue tincidunt. Quisque auctor a erat aliquam ornare. Morbi enim sapien, mattis ut mi non, vulputate eleifend metus.",
						"Duis fermentum eros nisi, vel posuere dui adipiscing vitae. Morbi rhoncus velit laoreet suscipit convallis. In vitae nisl sed elit accumsan lacinia. Nulla libero est, mollis id imperdiet quis, viverra porttitor mi. In hac habitasse platea dictumst. Sed eu eleifend massa. Nam quam libero, ultricies et eros non, egestas fermentum arcu.",
						"Sed metus nisl, sollicitudin quis euismod at, molestie quis elit. Praesent facilisis porttitor euismod. Mauris in lectus fermentum, pellentesque neque ut, dapibus ante. Donec id luctus lacus. Quisque mollis facilisis aliquam. Quisque in pretium velit, quis euismod tellus. Etiam iaculis leo eget tellus sollicitudin, et sagittis libero vestibulum. Suspendisse cursus magna et venenatis aliquam.",
						"Aliquam erat volutpat. Nulla non vestibulum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce posuere massa in elit varius, sed elementum dolor mollis. Sed pharetra congue vulputate. Aliquam in blandit magna. In dignissim volutpat turpis. Aliquam rhoncus, mauris ut tincidunt dignissim, urna erat dignissim ipsum, ac aliquet tortor felis ac felis. Nunc tempus ornare molestie. Donec mollis fringilla ultricies.",
						"Donec sit amet diam ut augue mattis volutpat quis nec erat. Vestibulum cursus velit velit, sed eleifend turpis mattis quis. Nulla ipsum nunc, semper at bibendum id, adipiscing quis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque nibh vitae venenatis bibendum. Suspendisse commodo pretium risus vel congue. Integer egestas arcu mauris, eu facilisis lacus blandit nec. Ut in scelerisque lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas lacinia purus vitae convallis pulvinar. Sed pharetra lorem ac pulvinar sodales. Proin in tempus massa. Fusce ut justo at purus dapibus rhoncus eget vitae erat. Aliquam erat volutpat.",
						"Pellentesque risus risus, facilisis vel egestas quis, pretium pharetra orci. Sed id eros justo. Phasellus pharetra suscipit arcu a ultrices. Donec blandit rutrum eleifend. Donec feugiat ante eu nisi congue, lacinia feugiat metus vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus ante risus, ultricies eu tellus ac, molestie imperdiet purus. Sed non ultrices sapien, quis pulvinar nisl. Fusce egestas pharetra suscipit. Morbi blandit orci at eleifend condimentum. Nunc rhoncus, diam in pretium gravida, mauris orci sollicitudin mi, vitae ultrices neque nulla a libero. Duis aliquam metus libero, eget gravida est porttitor at. Curabitur viverra elit purus, sagittis egestas elit fermentum vitae."
					],
			text : function( o ) {
				var sett = extend( this , o );
				var text = "";
				var numParagraphs = sett[0];
				var flags = sett[1];
				// console.log( sett );
				for( var i = 0 ; i < numParagraphs ; i++ ) {
					text+=  (!!flags?"<p>":"")  + this.list[Math.floor(Math.random()*this.list.length)] + (!!flags?"</p>":"");
				}
				return text;
			}
		}
	}


	var settings = {
		"attr" : "data-filler",
		"letters" : "abcdefghijklmnopqrstuvwxyz"
	};  // settings var





	function run( o ) {
		app.settings = extend(settings,o);
		var elements =  getFillerElements();

		for( var i = 0 ; i < elements.length ; i++  ) {
			var textElement = elements[i];

			var val = textElement.getAttribute(settings.attr);
			var args;
			var type;
			if( val != null) {
				// data-attr mode
				args = val.split('/');
				type = args[0];
				args.shift();
			} else {
				// css mode
				var regex = /\s?filler-([a-z0-9]+)\s?/i;
				var match =regex.exec(textElement.className);
				if( match[1] ) {
					type = match[1];
				}
			}

			// console.log( args );
			if( o!== undefined && o.type !== undefined ) {
				if( typeof o.type == "string" && type == o.type ) {
					var finalText = executeType(type , args);
					textElement.innerHTML = finalText;
					finalText = null;		
				}
			} else {
				var finalText = executeType(type , args);
				textElement.innerHTML = finalText;
				finalText = null;	
			}
			
			// if( settings.types[type] !== undefined  ) {

			// 	textElement.innerHTML = settings.types[type].text(args);
			// }
		}
	}


	function executeType( type , args ) {
		var finalText;
		var typeObj = textTypes[type];
		if( typeObj !== undefined ) {
			// check if text is not available
			if(  typeObj.text === undefined ) {
				// check if format is available
				if( typeObj.format !== undefined && typeObj.format ) {
					// follow the format!
					finalText = fillerFormatter( typeObj.format , typeObj );
					



				} else {
					// check if list is available
					if( typeObj.list !== undefined ) {
						finalText = typeObj.list[Math.floor(Math.random()*typeObj.list.length)];
					} else {
						// throw a warning
						console.warn('Invalid Filler definition :' + type);
					}
				}
			} else {
				// execute text
				finalText = typeObj.text( args );		
			}
		}
		return finalText;
	}

	bindReady(function() { 
		run();
	});


	app.define = function( name , args ) {
		// console.log( typeof args );
		if( typeof name == "string" ) {
			if( textTypes[name] === undefined ) {
				textTypes[name] = {};
			}
			if( typeof args == "function" ) {
				// assign function to text
				textTypes[name].text = args;
			} else if( typeof args == 'string') {
				textTypes[name].format = args;
			} else if ( typeof args == "object") {
				if( args.text !== undefined ) {
					textTypes[name].text = args.text;
				}
				if( args.format !== undefined ) {
					textTypes[name].format = args.format;
				}
				if( args.list !== undefined ) {
					textTypes[name].list = args.list;
				}
			} else  {
				console.warn("Invalid Filler Definition: "+ name);	
			}
		} else {
			console.warn("Invalid Filler Name: "+ name);
		}
	}


	app.get = function( name ) {
		return executeType( name );
	}


	function getFillerElements() {
		var elements = [];
		elements = elements.concat(getElementsByAttribute(settings.attr));
		for(var key in textTypes ) {
			elements = elements.concat( getElementWithClass('filler-'+ key) );
		}
		// console.log(elements);
		return elements;
	}


	function fillerFormatter( finalText , typeObj ) {
		// check for int
					
		finalText = finalText.replace(/%(\d)?i/g, function(match , num) { 
				var numText = "";
				if( num === "" ) num = 1;	// num not defined set it to 1
				for(var i = 0 ; i < num ; i++ ) {
					numText +=  Math.floor(Math.random()*9);
				}
				return numText;
			});

		// check for string
		finalText = finalText.replace(/%(\d)?s/g, function(match , num) { 
				var numText = "";
				if( num === "" ) num = 1;	// num not defined set it to 1
				for(var i = 0 ; i < num ; i++ ) {
					numText += settings.letters[Math.floor(Math.random()*settings.letters.length)];
				}
				return numText;
			});


		if( typeObj !== undefined ) {
			// change {{0}} from the items on the list
			finalText = finalText.replace(/\{\{([0-9]+)\}\}/gi , function( match , index){
				if( typeObj.list !== undefined ) {
					if( typeof typeObj.list[index] != "object" && !Array.isArray(typeObj.list[index])) {
						// get from the random value on the list
						return typeObj.list[Math.floor(Math.random()*typeObj.list.length)];
					} else {
						// get from the random value on the list[index]
						return typeObj.list[index][Math.floor(Math.random()*typeObj.list.length)];
					}
				} else {
					return match;
				}
			});
		}

		// check for {{strings}}
		var returnText = finalText.replace(/\{\{([a-z0-9]+)\}\}/gi , function( match , type){
			var text = executeType( type );
			if( text !== undefined ) {
				return text;
			} else {
				console.warn('Filler Definition Not Found:' + type);
				return match;
			}
		});

		return returnText;
	}


	// search by elements attribute
	function getElementsByAttribute(attribute, context) {
	    var nodeList = (context || document).getElementsByTagName('*');
	    var nodeArray = [];
	    for (var i = 0, node; node = nodeList[i]; i++) {
	        if ( node.getAttribute(attribute) ) nodeArray.push(node);
	    }
	    return nodeArray;
	}



	function extend( obj1 , obj2 ) {
		var obj = {};
		for( var i in obj1 ) {
			if( obj1.hasOwnProperty(i)) {
				obj[i] = obj1[i];
			}
		}
		for( var i in obj2 ) {
			if( obj2.hasOwnProperty(i)) {
				obj[i] = obj2[i];
			}
		}
		return obj;		
	}

	function paddingLeft (paddingValue , theString , length) {
	   return String(paddingValue + theString).slice(-length);
	}

	function bindReady(handler){

		var called = false

		function ready() { 
			if (called) return
			called = true
			handler()
		}

		function tryScroll(){
			if (called) return
			try {
				document.documentElement.doScroll("left")
				ready()
			} catch(e) {
				setTimeout(tryScroll, 10)
			}
		}

		if ( document.addEventListener ) { // native event
			document.addEventListener( "DOMContentLoaded", ready, false )
		} else if ( document.attachEvent ) {  // IE

			try {
				var isFrame = window.frameElement != null
			} catch(e) {}

			// IE, the document is not inside a frame
			if ( document.documentElement.doScroll && !isFrame ) {
				
				tryScroll()
			}

			// IE, the document is inside a frame
			document.attachEvent("onreadystatechange", function(){
				if ( document.readyState === "complete" ) {
					ready()
				}
			})
		}

		// Old browsers
	    if (window.addEventListener)
	        window.addEventListener('load', ready, false)
	    else if (window.attachEvent)
	        window.attachEvent('onload', ready)
	    else {
			var fn = window.onload // very old browser, copy old onload
			window.onload = function() { // replace by new onload and call the old one
				fn && fn()
				ready()
			}
	    }
	}


	function getElementWithClass(matchClass) {
		var elemList = [];
	    var elems = document.getElementsByTagName('*'), i;
	    for (i in elems) {
	        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
	            elemList.push(elems[i]);
	        }
	    }
	    return elemList;
	}


	Array.prototype.contains = function(k) {
    for(var p in this)
        if(this[p] === k)
            return true;
    return false;
}


})( Filler , window );


