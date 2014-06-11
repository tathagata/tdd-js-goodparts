var Quo = function (string){
    this.status = string;
};

Quo.prototype.get_status = function(){
    return this.status;
};


var myQuo = new Quo("confused");

describe('Exploring constructor invocation pattern', function(){
    it('Invoking public method on an object created using constructor pattern', function(){
	expect(myQuo.get_status()).toEqual("confused");

    });

});

var brokenQuo = Quo("broken");

describe('Invoking a constructor object without a new keyword', function(){
    it('Without the new keyword the object is not created and the variable remains undefined', function(){
	expect(brokenQuo).toEqual(undefined);

    });

});



