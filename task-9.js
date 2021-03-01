// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
import users from "/users.js";
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((el) => el.name);
  //return users.map((el, iundex, arr) => arr);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
