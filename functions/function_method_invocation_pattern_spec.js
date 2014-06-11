jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));
var myObject = {
    value:0,
    increment: function(inc){
	this.value += typeof inc === 'number' ? inc :1;
    },
    double: function(){
	var that = this;
	var helper = function(){
	    that.value = add(that.value, that.value);
	};
	helper();
    }

}

describe('Test Method Invocation Parameter', function(){
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

var add = function(a,b){
    return a+b;
}

var faultyRefObj = {
    value:0,
    double: function(){
	this.value = add(this.value,this.value);
    }
}


describe('Test Function Invocation Pattern', function(){
    var sum = add(3,4);
    
    it('"this" is bound to the global object when a function is invoked', function(){
	expect(sum).toEqual(7);
	faultyRefObj.double();
	expect(faultyRefObj.value).toEqual(0);
    });

    it('Explicitly keeping a reference of "this" in a member variable "that" allows an inner method to access "this"', function(){
	myObject.double();
	expect(myObject.value).toEqual(6);
    });

});

/*
this.x = 9;
var module = {
    x:81,
    getx: function(){
	return this.x;
    }

};
var getx = module.getx;
getx();
console.log("getx:", getx() );

var boundGetx = getx.bind(module);
console.log( "boundGetX:", boundGetx() );


describe('accessing default variables', function(){
    it('Global value bound to this', function(){
	expect(module.getX()).toEqual(81);
    });
    
    it('Value in module called with getX', function(){
	expect(this.x).toEqual(9);
    });
    

    it('Values after extracting method from object', function(){
	expect(this.getX()).toEqual(9);
    });
    

    it('Value after doing bind', function(done){
	expect(this.boundGetX()).toEqual(81);

    });
    

});

*/


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
 
describe('Demonstrate javascript scope of a variable', function(){
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

