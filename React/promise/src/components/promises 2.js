let trashGotTakenOut = false
const takeOutTheTrash = new Promise((resolve, reject) => {
    if(trashGotTakenOut){
        resolve('Thanks for taking out the trash')
    }
    else{
        reject('You didnt take out the trash :(')
    }
})

takeOutTheTrash
    .then(message => console.log(message))
    .catch(err => console.log(err))

    //this prints out err 
    //output:
    //you didnt take out the trash :(






    function getNbaAthletes(request) {
    return new Promise((resolve, reject) => {
        if (request === 'NBA') {
            resolve([
                {name: 'Kevin Durant', league: 'NBA', postionn: 'Small Forward', active: true},
                {name: 'Charles Barkley', league: 'NBA', postionn: 'Power Forward', active: false},
                {name: 'Stephen Curry', league: 'NBA', postionn: 'Point Guard', active: true},
                {name: 'Shaq', league: 'NBA', postionn: 'Center', active: false},
                {name: 'Damian Lillard', league: 'NBA', postionn: 'Point Guard', active: true},
                {name: 'Mike James', league: 'NBA', postionn: 'Shooting Guard', active: true},
            ])
        } else {
            reject({message: 'Sorry we dont understand that request try again', hint: 'Try "NBA" as your request'})
        }
    })
}

// getNbaAthletes('NBA')
//     .then((data) => {//the then here is written different from catch to show what it would look like if you wanted more than one thing to return.
//         console.log(data)
//         setState(data)
//     })
//     .catch(err => console.log(err))//this catch shows what it looks like if we're only returning one thing.


// ! Another way to handle promises
const makeRequest = async () => {
    try{
        const data = await(getNbaAthletes('asd'))
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

makeRequest()