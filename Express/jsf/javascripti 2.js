function actuallyPrintingNames() {
    let index = 0;
    let name;
    for (index; index < names.length; index++) {
    name = names[index];
    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}