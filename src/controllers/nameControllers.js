import Name from "../schemas/NameSchema.js";

export const getAllNames = async (req, res) => {
  try {
    const allNames = await Name.find();

    res.send({ data: allNames });
  } catch (error) {
    res.send({ error });
  }
};
