/* Related Acceptance Criteria
prompted for text
-> enter up to three characters

prompted for the text color
->  enter a color keyword (OR a hexadecimal number)

prompted for a shape
-> presented with a list of shapes to choose from: circle, triangle, and square

prompted for the shape's color
-> enter a color keyword (OR a hexadecimal number)
*/


// Import files for testing
const Prompts = require('lib/prompts.js');

describe('Prompts',()=>{
    describe('Text Length',()=>{

        it('should throw error on input length more than 3',()=>{
            const expectation = new Error('Answer length too long');
            const reality = '';
            expect(reality).ToThrowError(expectation);
        });
        it('should accept input of string size less than 3',()=>{
            const expectation = '2!';
            const reality = '';
            expect(reality).equals(expectation)
        });
    });
});


//describe('',()=>{})

