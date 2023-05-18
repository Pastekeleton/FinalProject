const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'finalProject',
  password: '0Gazeller3d1',
  port: 3001,
})

const getInfo = (request, response) => {
  pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
    if (error){
      throw error;
    }
    res.status(200).json(result.rows)
  })
}

module.exports = {
  getInfo
}