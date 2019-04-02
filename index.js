import DatabaseService from './app/database';

const start = async () => {
  await DatabaseService.connect();
};

start();
