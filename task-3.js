// Получить массив имен пользователей по полу (поле gender).
import users from "/users.js";

const getUsersWithGender = (users, gndr) => {
  return users.filter(({ gender }) => gender === gndr).map((elem) => elem.name);
};
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
