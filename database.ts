// database.ts

import { createConnection } from 'typeorm';

createConnection()
  .then(async (connection) => {
    // Your application logic here
  })
  .catch((error) => console.log(error));
