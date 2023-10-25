import users  from "/users.js"


// 1
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);
console.log(calculateTotalBalance(users))
// 2
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName)).map(user => user.name);
console.log(getUsersWithFriend(users, 'Sharron Pace'))
// 3
const getNamesSortedByFriendsCount = users => users.sort((user1, user2) => user1.friends.length - user2.friends.length).map(user => user.name);
console.log(getNamesSortedByFriendsCount(users));
// 4
const getSortedUniqueSkills = users => [...new Set(users.reduce((spec, user) => [...spec, ...user.skills], []))].sort();
console.log(getSortedUniqueSkills(users));
