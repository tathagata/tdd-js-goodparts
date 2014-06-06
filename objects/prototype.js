if (typeof Object.create !== 'function'){
    Object.create = function(o){
	var F = function(){};
	F.prototype = o;
	return new F();
    };
}
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};
var another_stooge = Object.create(stooge);
another_stooge
