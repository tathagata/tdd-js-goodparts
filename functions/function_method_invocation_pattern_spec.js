
jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

describe('Test Method Invocation Parameter', function(){
    var myObject = {
	value:0,
	increment: function(inc){
	this.value += typeof inc === 'number' ? inc :1;
	}
    }

    it('this is bound late at runtime', function(done){
	expect(myObject.hasOwnProperty('this')).toEqual(false);
	myObject.increment();
	//expect(myObject.hasOwnProperty('this')).toEqual(true);
	done();
    });


    it('call increment without any variable', function(){
	myObject.increment();
	expect(myObject.value).toEqual(2);

    });
    it('call increment with value', function(){
	myObject.increment(1);
	expect(myObject.value).toEqual(3);
    });
    
});


drink = 'wine';
 
var foo = {
    drink: "beer",
    brand: "glenfiddich",
    getGlobalDrink: function(){
        return drink;
    },
    getLocalDrink: function(){
	return this.drink;
    },
    getBrand: function(){
	return brand;
    }

};
 
describe('Demonstrate javascript scope', function(){
    it('If there is a property defined only in the context of a variable, you have to use this to refer to it', function(){
	expect(function(){
	    foo.getBrand();    
	}).toThrow(new ReferenceError("brand is not defined"));
    });
    it('A global variable by same name will be referenced by the method defined in the context unless using "this"', function(){
	expect(foo.hasOwnProperty('drink')).toEqual(true);
	expect(foo.getGlobalDrink()).toEqual("wine");
    });
    it('Access to a property defined in the context of a variable has to be referenced using this', function(){
	expect(foo.getLocalDrink()).toEqual("beer");
    });


});


