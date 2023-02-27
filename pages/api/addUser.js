const prisma = require("../../lib/prisma");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userData = JSON.parse(req.body);

  const savedData = await prisma.user.create({
    data: userData,
  });

  res.json(savedData);
};
