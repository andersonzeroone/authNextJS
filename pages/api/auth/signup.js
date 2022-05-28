import { hashPassword } from "../../../lib/auth";
import { connectToDataBase } from "../../../lib/db";

async function handler(req, res) {

  const data = req.body;

  const { email, password } = data;

  if (!email ||
    !email.includes('@') ||
    !password ||
    !password.trim().length < 7) {
    res.status(422)
      .json({
        message:
          'invalids inputs'
      });

    return;
  }

  const client = await connectToDataBase();

  const db = client.db();

  const hashedPassword = hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword
  });

  res.status(200).json({ message: 'created user!' });

}

export default handler;