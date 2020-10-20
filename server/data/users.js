import bcrypt from 'bcryptjs';

const saltRounds = 10;

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('apples', saltRounds),
    isAdmin: true,
  },

  {
    name: 'Steve McQueen',
    email: 'steve@test.com',
    password: bcrypt.hashSync('apples', saltRounds),
  },

  {
    name: 'Doom Guy',
    email: 'doom@test.com',
    password: bcrypt.hashSync('apples', saltRounds),
  },

  {
    name: 'Test Guy',
    email: 'test@test.com',
    password: bcrypt.hashSync('test', saltRounds),
  },
];

export default users;
