
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1111",
    database: "ecommerce_db"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection fail: " + err.message);
        return;
    }
    console.log("Connected to MySQL");
});

module.exports = db; 


const query = "SELECT*FROM categories";
db.query (query,function(err,results){
    if(err){
        console.log("Xeta bash verdi: " + err.message);
        return;
    }
    console.log("Kateqoriler geldi: ",results);
});
module.exports =db;

const insertCategory = (categoryName) => {
    const sql = "INSERT INTO categories (name) VALUES (?)";

    db.query(sql, [categoryName], (err,results) =>{
        if(err){
            console.error("Xeta: Bazaya yazila bilmedi -", err.message);
            return;
        }
        console.log("Melumat bazaya ugurla yazildi, Yeni ID:", results.insertId);

    });
};

insertCategory("Meiset texnikasi");