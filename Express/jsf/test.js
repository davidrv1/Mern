const beatles = ['Paul', 'George', 'John', 'Ringo'];
//sets beatles to equal the array
function printNames(names) {
// creates  the function print names with the parameter of names
//names is to be treated as a parameter which, if i recall properly, 
//means it can be switched out with what  is passed in when called. 
function actuallyPrintingNames() {
// within the printNames function, lies the actions of another function.
    for (let index = 0; index < names.length; index++) {
    //the functins requires that as we "let" index equal 0
    //if i understand correctly we are using "let" because
    //the value of index will change which is a "let" feature
    //  ---
    //; while index(starting at 0) is less than names.length which
    //which is we will find out depending on what is passed in. 
    //  ---
    //; we must add one to index.
    const name = names[index];
    //const is name because it'll never change at least until the function is complete
    //unlike the "let" index above index will change for the purpose of completing it's duty
    console.log(name + ' was found at index ' + index);
    //we every time that is solved, we must console log the above
    }
}
actuallyPrintingNames();
//calls actuallyPrintingNames function to action, but this won't
//run at least until the function aPN is in is called.
}
printNames(beatles);
//calls function printNames and now the actuallyprintnames can run.
//this makes sense because if not then the printNames may present an error as 
//it runs without the function within being called

// result 
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
