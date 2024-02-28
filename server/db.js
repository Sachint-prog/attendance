// async function example2() {
//     const mysql = require('mysql2/promise');
//     const pool = mysql.createPool({ host: "127.0.0.1", user: "root", password: "debian", database: "test" });
//     // execute in parallel, next console.log in 3 seconds
//     let data = await Promise.all([
//         pool.query('select * from table_5'),
//         pool.query('select * from table_1'),
//     ]);
//     console.log(data[0]);
//     console.log(data[1]);
//     await pool.end();
// }
// 
// example2()



  



// package.json
// 
// {
//     "name": "test_mysql_js",
//     "version": "1.0.0",
//     "description": "",
//     "main": "db.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "body-parser": "^1.20.2",
//       "express": "^4.18.2",
//       "mysql2": "^3.9.2"
//     }
// }