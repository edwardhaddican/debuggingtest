const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {createUser, getUser, getUserById, getUserByUsername} = require("../db");

// usersRouter.get('/', async (req, res) => {

//   const users = await getAllUsers();

//   res.send({
//       users
//   });
// });

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password"
    });
  }

  try {
    const user = await getUserByUsername(username);

    if (user && user.password == password) {
      const token = jwt.sign(user, JWT_SECRET)
      res.send({ message: "you're logged in!", token: `${token}` });
    } else {
      next({ 
        name: 'IncorrectCredentialsError', 
        message: 'Username or password is incorrect'
      });
    }
  } catch(error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (username) {
      const _user = await getUserByUsername(username);

      if (_user) {
        res.status(401);
        next({
          error: "USERNAME ALREADY EXISTS",
          message: `User ${username} is already taken.`,
          name: "UserAlreadyExists",
        });
      }
    }

    if (password.length < 8) {
        res.status(401);
        next({
            error: "Password is less than 8 characters long.",
            message: "Password is less than 8 characters long.",
            name: "PasswordIsTooShort"
        })
    }

    const user = await createUser({
        username,
        password,
    })

    const token = jwt.sign(
        {
            id: user.id,
            username,
        },
        JWT_SECRET,
        {
            expiresIn: "1y",
        }
        )

  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = router;
