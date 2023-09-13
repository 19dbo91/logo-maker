// #region METACODE
// Author: Dustin Bonilla
// Project Name: SVG Logo Maker

/*      USER STORY
 *_______________________________________________________________________________
 * :: Freelance Web Dev
 * I WANT to generate a simple logo for my projects
 * SO THAT I don't have to pay a graphic designer
*/

/*      ACCEPTANCE CRITERIA
 *_______________________________________________________________________________
 * .: CMD-Ln app that accepts usr-in
 * 
 * GIVEN a command-line application that accepts user input
 * 
 * @  prompted for text
 *  > enter up to three characters
 * 
 * @  prompted for the text color
 *  > enter a color keyword (OR a hexadecimal number)
 * 
 * @  prompted for a shape
 *  > presented with a list of shapes to choose from:
 *      > circle
 *      > triangle
 *      > square
 * 
 * @  prompted for the shape's color
 *  > enter a color keyword (OR a hexadecimal number)
 * 
 * @  entered input for all the prompts
 *  > an SVG file is created named `logo.svg`
 *  > output text "Generated logo.svg" is printed in the command line
 * 
 * @  open the `logo.svg` file in a browser
 *  > shown a 300x200 pixel image that matches the criteria I entered
 * 
*/

// #endregion

//!start

const askPrompts = require('./lib/prompts');

function getData() {
    return new Promise((resolve,reject)=>{
        try {
            resolve(askPrompts());        
        } catch (error) {
            
        }  
    })    
}


getData();
//!end