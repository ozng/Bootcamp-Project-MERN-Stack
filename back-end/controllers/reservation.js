export const getReservationById = async (req, res) => {
  const id = req.params.id;
  // GET RES BY ID
  res.status(200).send(`Your ID is ${id}`);
};

export const saveReservation = async (req, res) => {
  // Save res to mongo
  res.status(200).send("Save res to db");
};
