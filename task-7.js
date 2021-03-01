// Получить общую сумму баланса (поле balance) всех пользователей.
import users from "/users.js";

const calculateTotalBalance = (users) => {
  return users.reduce((total, usr) => {
    return total + usr.balance;
  }, 0);
};
console.log(calculateTotalBalance(users)); // 20916
