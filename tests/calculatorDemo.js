let homePage =require('../pages/homePage')

describe('demo alculator tests', function(){

    it('addition test' ,function(){
     //  browser.get('http://juliemr.github.io/protractor-demo/');
       homePage.get('http://juliemr.github.io/protractor-demo/');

       // element(by.model('first')).sendKeys('2');    
        homePage.enterFirstNumber('3');

      //  element(by.model('second')).sendKeys('3');
        homePage.enterSecondNumber('4');
            
        homePage.clickGo();
        //let result= element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('5');
        homePage.verifyResult('7');

        browser.sleep(3000);
    });
    it('subtraction test' ,function(){
        //  browser.get('http://juliemr.github.io/protractor-demo/');
          homePage.get('http://juliemr.github.io/protractor-demo/');
   
          // element(by.model('first')).sendKeys('2');    
           homePage.enterFirstNumber('3');
   
         //  element(by.model('second')).sendKeys('3');
           homePage.enterSecondNumber('4');
               
           homePage.clickGo1();
           //let result= element(by.cssContainingText('.ng-binding', '5'));
           //expect(result.getText()).toEqual('5');
           homePage.verifyResult('7');
   
           browser.sleep(3000);
       });
   
});