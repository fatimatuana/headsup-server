const { Pool } = require("pg");

const pool = new Pool({
  // user: "kqzflwrrzyjdhf",
  // host: "ec2-54-220-35-19.eu-west-1.compute.amazonaws.com",
  // database: "d6pqi7nqbcknrq",
  // password: "8f4778ef7ecdb201c17355fa299f56bc5f42f33181f1453a51e7da3e9b0c49e7",
  // port: 5432
  // ,
  //******** */
  // connectionString: "postgres://kqzflwrrzyjdhf:8f4778ef7ecdb201c17355fa299f56bc5f42f33181f1453a51e7da3e9b0c49e7@ec2-54-220-35-19.eu-west-1.compute.amazonaws.com:5432/d6pqi7nqbcknrq",
  // ssl: {
  //     rejectUnauthorized: false
  // }
  // *******

  // user: "postgres", //### was working
  // host: "localhost",
  // database: "headsup",
  // password: "postgres",
  // port: 5432


  // user: "postgres",
  // host: "localhost",
  // database: "headsup",
  // password: "postgres",
  // port: 5432

  connectionString: "postgres://eukxsgcs:eRqK50d0WV40B7US8jxNtTS6d9-exE_k@mel.db.elephantsql.com/eukxsgcs",
  ssl: {
      rejectUnauthorized: false
  }
})

module.exports = { pool };