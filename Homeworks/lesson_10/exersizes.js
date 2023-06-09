import data from './data.js';
import { users, updates } from './usersAndUpdates.js';

const getPositions = (data) => {
  const positions = data.map(({position}) => {
    const [col, line ] = position.split(':').map(Number);
    return {col, line};
  });
  return positions;
};

const groupByColor = (data) => {
  const groupedData = data.reduce((accum, item) => {
    const {color} = item;

    if (!accum[color]) {
      accum[color] = [];
    }
    accum[color].push(item);
    return accum;
  }, {});
  return groupedData
};

console.log(getPositions(data))
console.log(groupByColor(data))

const updateUsers = (users, updates) => {
  return users.map((user, index) => {
    const {salaryMultiplier, ...update} = updates[index];
    const salary = user.salary * salaryMultiplier;
    return {
      ...user,
      ...update,
      salary
    }
  })
};

console.log(updateUsers(users, updates))
