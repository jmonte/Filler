describe("New Definition" , function() {
	var name = 'furniture';
	var list = ['table' , 'chair' , 'lamp' , 'bed'];
	var format = '%i {{0}}';

	beforeEach(function() {

		jasmine.addMatchers({
			toBeInTheList : function( util, customEqualityTesters ) {

				return {
					compare: function( actual , list) {
						var result = {};
						result.pass = false;
						for( var i = 0 ; i < list.length ; i++ ) {
							if( actual.contains(list[i])) {
								result.pass = true;
								break;
							}
						}

						return result;						
					}



				}

			}
		});


		Filler.types[name] = undefined;
	});


	it("With No Argument" , function() {
		Filler.define(name);
		expect(Filler.text(name)).toBeUndefined();
		expect(Filler.defined(name).text).toBeUndefined;
		expect(Filler.defined(name).format).toBeUndefined();
		expect(Filler.defined(name).list).toBeUndefined();
	});

	it("With a Function" , function() {
		Filler.define(name , function() {
				return list[0];
		});
		expect(Filler.text(name)).toEqual(list[0]);
		expect(typeof Filler.defined(name).text).toEqual('function');
		expect(Filler.defined(name).format).toBeUndefined();
		expect(Filler.defined(name).list).toBeUndefined();
	});

	it("With a Function but No return value" , function() {
		Filler.define(name , function() {
			var i = 0 ; list.length;
		});
		expect(Filler.text(name)).toBeUndefined();
		expect(typeof Filler.defined(name).text).toEqual('function');
		expect(Filler.defined(name).format).toBeUndefined();
		expect(Filler.defined(name).list).toBeUndefined();
	});

	it("With a format String" , function() {
		Filler.define(name , format);
		expect(Filler.text(name)).toMatch(/(\d) \{\{0\}\}/);
		expect(Filler.defined(name).text).toBeUndefined();
		expect(typeof Filler.defined(name).format).toEqual('string');
		expect(Filler.defined(name).list).toBeUndefined();
	});


	it("With an Empty Format String" , function() {
		Filler.define(name , '');
		expect(Filler.text(name)).toBeUndefined();
		expect(Filler.defined(name).text).toBeUndefined();
		expect(typeof Filler.defined(name).format).toEqual('string');
		expect(Filler.defined(name).list).toBeUndefined();
	});


	it("With a Populated array" , function() {
		Filler.define(name , list);
		expect(Filler.text(name)).toBeInTheList(list);
		expect(Filler.defined(name).text).toBeUndefined();
		expect(Filler.defined(name).format).toBeUndefined();
		expect(typeof Filler.defined(name).list).toEqual('object');
	});


	it("With an Empty array" , function() {
		Filler.define(name , []);
		expect(Filler.text(name)).toBeUndefined();
		expect(Filler.defined(name).text).toBeUndefined();
		expect(Filler.defined(name).format).toBeUndefined();
		expect(typeof Filler.defined(name).list).toEqual('object');
	});

	it("With an Object" , function() {
		Filler.define(name , {
			'list' : list,
			'format' : format
		});
		expect(Filler.text(name)).toMatch(/(\d) [a-z]+/);
		expect(Filler.defined(name).text).toBeUndefined();
		expect(typeof Filler.defined(name).format).toEqual('string');
		expect(typeof Filler.defined(name).list).toEqual('object');
	});

	it("With a NULL Object" , function() {
		Filler.define(name , null);
		expect(Filler.text(name)).toEqual(undefined);
		expect(typeof Filler.defined(name)).toEqual('object');
		expect(Filler.defined(name).text).toBeUndefined();
		expect(Filler.defined(name).format).toBeUndefined();
		expect(Filler.defined(name).list).toBeUndefined();
	});

});