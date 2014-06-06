function func(a,b,c){
    if (typeof a === 'number' && typeof b === 'number' && typeof c==='number'){
	     console.log("Sum is:",a+b+c);
	     return a+b+c;
	}
}

jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

describe('Test Function parameter', function(){
    it('func has arguments and this parameter', function(){
	expect(func.hasOwnProperty('arguments')).toEqual(true);
    });

    it('func adds three numbers', function(){
	     expect(func(10,20,30)).toEqual(60);
    });
    it('func called with 0 parameters', function(){
	     expect(func()).toEqual(undefined);
    });
    it('func called with less than expected params', function(){
	     expect(func(10,20)).toEqual(undefined);
    });
    it('func called with greater than expected params', function(){
      expect(func(10,20,30,40,50)).toEqual(60);
    });
    it('func called with non-number arguments', function(){
      expect(func('ocra','lentil','rice')).toEqual(undefined);
    });
});
