const { pool } = require("./connect");

async function getIdOfCategory(categoryName){
    const client = await pool.connect();
    try {
    const res = await client.query("select id from category where name = $1;", [categoryName])
    return res.rows;
    } catch (error) {
        console.error(error);
      } finally {
        client.release();
      }
}

async function getAllForCategory(categoryId){
    const client = await pool.connect();
    try {
    const res = await client.query("SELECT word FROM word WHERE category_id = $1;", [categoryId]);
    let rowsMapped = res.rows.map(elm => elm.word)
    return rowsMapped;
    } catch (error) {
        console.error(error);
      } finally {
        client.release();
      }
}

async function createNewCategory(categoryName, wordsArray){ 
    const client = await pool.connect();
    try {
        await client.query("insert into category (name, pic) VALUES ($1 , default);", [categoryName]);
        
        //Get the ID of the new category
        let x = await getIdOfCategory(categoryName);
        let categoryId = x[0].id;
        for (const w of wordsArray) {
            await client.query("insert into word (word, category_id) VALUES ($1,$2 );", [w,categoryId]);
        }
    return "ok"; 
    } catch (error) {
        console.error(error);
      } finally {
        client.release();
      }
}



async function getAllCategories(){
  const client = await pool.connect();
  try {
    let newArr = [];
  const res = await client.query("select * from category;")
  for (const item of res.rows) {
          let id =await getIdOfCategory(item.name);
    let wordsOfc = await getAllForCategory(id[0].id);
    item.words = wordsOfc;
    newArr.push(item);
  }
  return newArr;
  } catch (error) {
      console.error(error);
    } finally {
      client.release();
    }
}

let game = {
  category: 0,
  winsWords:[],
  losesWords: [],
}


function setGameStatus(g){
  game.words = g.words
  game.winsWords = g.winsWords;
  game.losesWords = g.losesWords;
  return "ok"
}

function getGameStatus(){
  return game;
}

module.exports = {getAllForCategory, createNewCategory, getAllCategories, setGameStatus, getGameStatus}