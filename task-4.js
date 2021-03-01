// Получить массив имен пользователей по полу (поле gender).
import users from "/users.js";

// Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = (users) => {
  return users.filter(({ isActive }) => !isActive);
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

