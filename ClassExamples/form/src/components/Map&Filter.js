//map and filters are only avaible on arrays

const nums = [23, 56, 19, 20, 9, 20, 78, 55, 32, 42, 8, 12, 80]

//map is a function of its own.
//the callback function within nums.map is () => {}. we use an arrow function
//the arrow function, being the callback function, recives up to 3 things. that is how maps works
//it recieves the item, the index, and the whole array
// we do not have to use all 3 but it does give you all 3 back.
nums.map( (item, idx) => {
    console.log(`${item} is at index ${idx}`);
})
//output
// 23 is at index 0
// 56 is at index 1
// 19 is at index 2
// 20 is at index 3
// 9 is at index 4
// 20 is at index 5
// 78 is at index 6
// 55 is at index 7
// 32 is at index 8
// 42 is at index 9
// 8 is at index 10
// 12 is at index 11
// 80 is at index 12

const nbaAthletes =  [
    {name: 'Kevin Durant', league: 'NBA', postionn: 'Small Forward', active: true},
    {name: 'Charles Barkley', league: 'NBA', postionn: 'Power Forward', active: false},
    {name: 'Stephen Curry', league: 'NBA', postionn: 'Point Guard', active: true},
    {name: 'Shaq', league: 'NBA', postionn: 'Center', active: false},
    {name: 'Damian Lillard', league: 'NBA', postionn: 'Point Guard', active: true},
    {name: 'Mike James', league: 'NBA', postionn: 'Shooting Guard', active: true},
]

// const activePlayers = nbaAthletes.filter((athlete) => athlete.active === true)
const activePlayers = nbaAthletes.filter((athlete) => athlete.name === 'Kevin Durant')
console.log(activePlayers);