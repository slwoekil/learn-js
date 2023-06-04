/* 
1. Сделать рефакторинг кода, с использованием destructing и методов массива (map, reduce и т.д.).
*/

const data = [
  {
    position: '22:11',
    color: 'black',
    id: 12,
    length: 25
  },
  {
    position: '15:16',
    color: 'white',
    id: 13,
    length: 26
  },
  {
    position: '40:50',
    color: 'white',
    id: 14,
    length: 81
  },
  {
    position: '17:20',
    color: 'black',
    id: 15,
    length: 30
  }
]


const getPositions = (data) => {
  const positions = []

  for (item of data) {
    const itemPositions = item.position.split(':')
    const col = Number(itemPositions[0])
    const line = Number(itemPositions[1])

    positions.push({ col, line })
  }

  return positions
}

const groupByColor = (data) => {
  const groupedData = {}

  data.forEach((item) => {
    if (item.color in groupedData) {
      groupedData[item.color].push(item)
    } else {
      groupedData[item.color] = []
      groupedData[item.color].push(item)
    }
  })

  return groupedData
}

console.log(getPositions(data))
console.log(groupByColor(data))

/* 
2. Необходимо написать функцию, которая умеет обновлять массив пользователей
*/
const users = [
  {
    name: 'Name',
    salary: 100,
    department: 'Admins',
    surname: 'Surname',
    role: 'Admin'
  },
  {
    name: 'Man',
    salary: 150,
    department: 'Marketing',
    surname: 'Gigachad',
    role: 'Dev'
  },
  {
    name: 'Guy',
    salary: 100,
    department: 'Sales',
    surname: 'Promotion',
    role: 'Salesman'
  }
]

const updates = [
  {
    salaryMultiplier: 2,
    role: 'DevOps',
    department: 'DevOpses'
  },
  {
    salaryMultiplier: 3,
    role: 'Middle Dev',
  },
  {
    salaryMultiplier: 1.2,
  },
]

const updateUsers = (users, updates) => {

} 

console.log(updateUsers(users, updates))
/* 
На тестовых данных функция должна вернуть
[
  {
    name: 'Name',
    salary: 200,
    surname: 'Surname',
    role: 'DevOps',
    department: 'DevOpses'
  },
  {
    name: 'Man',
    salary: 450,
    department: 'Marketing',
    surname: 'Gigachad',
    role: 'Middle Dev',
  },
  {
    name: 'Guy',
    salary: 120,
    department: 'Sales',
    surname: 'Promotion',
    role: 'Salesman'
  }
]
*/