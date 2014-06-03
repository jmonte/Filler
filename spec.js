beforeEach(function() {
	jasmine.addMatchers({
		toBeInTheList : function( util, customEqualityTesters ) {
			return {
				compare: function( actual , list) {
					var result = {};
					result.pass = list.contains(actual);
					return result;						
				}
			}
		}
	});
});

describe("New Definition" , function() {
	var name = 'furniture';
	var list = ['table' , 'chair' , 'lamp' , 'bed'];
	var format = '%i {{0}}';

	beforeEach(function() {
		Filler.undefine(name);
	}); 


	it("With No Argument" , function() {
		Filler.define(name);
		expect(Filler.text(name)).toBeUndefined();
		expect(Filler.get(name).text).toBeUndefined;
		expect(Filler.get(name).format).toBeUndefined();
		expect(Filler.get(name).list).toBeUndefined();
	});

	it("With a Function" , function() {
		Filler.define(name , function() {
				return list[0];
		});
		expect(Filler.text(name)).toEqual(list[0]);
		expect(typeof Filler.get(name).text).toEqual('function');
		expect(Filler.get(name).format).toBeUndefined();
		expect(Filler.get(name).list).toBeUndefined();
	});

	it("With a Function but No return value" , function() {
		Filler.define(name , function() {
			var i = 0 ; list.length;
		});
		expect(Filler.text(name)).toBeUndefined();
		expect(typeof Filler.get(name).text).toEqual('function');
		expect(Filler.get(name).format).toBeUndefined();
		expect(Filler.get(name).list).toBeUndefined();
	});

	it("With a format String" , function() {
		Filler.define(name , format);
		expect(Filler.text(name)).toMatch(/^(\d) \{\{0\}\}$/);
		expect(Filler.get(name).text).toBeUndefined();
		expect(typeof Filler.get(name).format).toEqual('string');
		expect(Filler.get(name).list).toBeUndefined();
	});


	it("With an Empty Format String" , function() {
		Filler.define(name , '');
		expect(Filler.text(name)).toBeUndefined();
		expect(Filler.get(name).text).toBeUndefined();
		expect(typeof Filler.get(name).format).toEqual('string');
		expect(Filler.get(name).list).toBeUndefined();
	});


	it("With a Populated array" , function() {
		Filler.define(name , list);
		expect(Filler.text(name)).toBeInTheList(list);
		expect(Filler.get(name).text).toBeUndefined();
		expect(Filler.get(name).format).toBeUndefined();
		expect(typeof Filler.get(name).list).toEqual('object');
	});


	it("With an Empty array" , function() {
		Filler.define(name , []);
		expect(Filler.text(name)).toBeUndefined();
		expect(Filler.get(name).text).toBeUndefined();
		expect(Filler.get(name).format).toBeUndefined();
		expect(typeof Filler.get(name).list).toEqual('object');
	});

	it("With an Object" , function() {
		Filler.define(name , {
			'list' : list,
			'format' : format
		});
		expect(Filler.text(name)).toMatch(/^(\d) [a-z]+$/);
		expect(Filler.get(name).text).toBeUndefined();
		expect(typeof Filler.get(name).format).toEqual('string');
		expect(typeof Filler.get(name).list).toEqual('object');
	});

	it("With a NULL Object" , function() {
		Filler.define(name , null);
		expect(Filler.text(name)).toEqual(undefined);
		expect(typeof Filler.get(name)).toEqual('object');
		expect(Filler.get(name).text).toBeUndefined();
		expect(Filler.get(name).format).toBeUndefined();
		expect(Filler.get(name).list).toBeUndefined();
	});

});


describe('Text Results' , function() {


	beforeEach(function() {
		Filler.undefine('countName');
	});


	it("String List" , function() {
		expect(Filler.text('firstName')).toBeInTheList( Filler.get('firstName').list );
	});

	it("String Following Format" , function() {
		Filler.define('countName' , {
			format : '%i {{0}}'
		});
		expect(Filler.text('countName')).toMatch(/^\d{1} .+$/);
	});


	it("String With Definition on Format" , function() {
		Filler.define('countName' , {
			format : '%3i {{firstName}}'
		});
		expect(Filler.text('countName')).toMatch(/^\d{3} .+$/);
	});

	it("String With Incorrect Format" , function() {
		Filler.define('countName' , {
			format : '%i {{1}}'
		});
		expect(Filler.text('countName')).toMatch(/^\d{1} \{\{1\}\}$/);
	});

	it("Integer No Size" , function() {
		Filler.define('num' , {
			'format'  : '%i'			
		});
		expect(Filler.text('num')).toMatch(/^\d{1}$/);
	});

	it("Integer With Size" , function() {
		Filler.define('num' , {
			'format'  : '%8i'			
		});
		expect(Filler.text('num')).toMatch(/^\d{8}$/);
	});

	it("Letter No Size",function() {
		Filler.define('letter' , {
			'format'  : '%s'			
		});
		expect(Filler.text('letter')).toMatch(/^.{1}$/);
	});

	it("Letter With Size",function() {
		Filler.define('letter' , {
			'format'  : '%5s'			
		});
		expect(Filler.text('letter')).toMatch(/^[a-z]{5}$/);
	});

	// it("",function() {

	// });


});