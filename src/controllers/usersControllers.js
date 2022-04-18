import User from "../schemas/UserSchema.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send({ data: allUsers });
  } catch (error) {
    {
      error;
    }
  }
};

export const addNewUser = async (req, res) => {
  try {
    const newUser = await new User({
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.send({ newUser });
  } catch (error) {
    res.send({ error });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    await user.remove();
    res.send({ deleteStatus: true, deletedUserId: userId });
  } catch (error) {
    res.status(404).send({ error });
  }
};
export const findUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send({ data: user });
  } catch (error) {
    res.status(404).send({ error });
  }
};
