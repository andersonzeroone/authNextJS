import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://anderson:uVhqhUgYF5FSdEcM@cluster0.tj2awmy.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
