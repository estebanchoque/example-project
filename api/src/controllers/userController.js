const { User } = require("../db");

const postUser = async (req, res, next) => {
  const { firstName, lastName, email } = req.body;
  try {
    const userFound = await User.findAll({
      where: { email: [email] },
    });

    if (userFound) {
      return res.status(200).json({
        error: true,
        message: "Este usuario ya existe en la base de datos",
        data: userFound,
      });
    } else {
      const userCreated = User.create({
        name: `${firstName} ${lastName}`,
        email,
      });

      return userCreated
        ? res.status(200).json({
            error: null,
            message: "El usuario ha sido creado correctamente",
            data: userCreated,
          })
        : res.status(400).json({
            message: "Ha ocurrido un error en la creación del usuario",
          });
    }
  } catch (error) {
    next(error);
    return res.status(400).json({ message: error.message });
  }
};

const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users.length
      ? res.status(200).json(users)
      : res.status(400).json({ message: "No existe ningún usuarios" });
  } catch (error) {
    next(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  postUser,
  getUsers,
};
