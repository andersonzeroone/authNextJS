import { MongoClient } from 'mongodb';
//uedGBZo0RrKDWOAO
const password = 'uedGBZo0RrKDWOAO';


export async function connectToDataBase() {
  const client = await MongoClient.connect(`mongodb+srv://anderson:${password}@cluster0.tj2awmy.mongodb.net/auth-demo?retryWrites=true&w=majority`);

  return client;
}