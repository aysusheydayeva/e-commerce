const express = require('express');
const application = express();
const db = require('./db');
const PORT = 3000;
application.use(express.json());


application.get('/', (req, res) => {
    res.send("Server və Database qoşulması uğurludur");
});


application.get('/categories', (req, res) => {
    const sql = "SELECT * FROM categories"; 

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Xeta bash verdi:", err);
            return res.status(500).json({ error: "Bazadan melumat cekile bilmedi" });
        }
        res.json(results);
    });
});


//application.listen(PORT, () => {
//   console.log(`Server running on PORT ${PORT}`);
//});



/*application.post('/categories', (req,res) => {
    const{ name } = req.body;

    if(!name || name.trim() === ""){
        return res.status(400).json({error: "kateqoriya adi bosh ola bilmez"})
    }

    const sql = "INSERT INTO categories (name) values (?)";

    db.query(sql, [name],(err,results) => {
        if(err){
            return res.status(500).json({error: "Bazaya yazila bilmedi" });

        }
        res.status(201).json({message: "Ugurla elave edildi",id: results.insertId });

    });
});*/


/*application.get('/products', (req,res) => {
    const sql = "SELECT * FROM products";

    db.query(sql,(err, results) => {
        if(err) {
            console.error("Mehsullar getirilerken xeta bash verdi:",err);
            return res.status(500).json({error: "Mehsullar bazadan cekile bilmedi"});
        }
        res.json(results);
    });
});*/




application.get('/products-detail', (req, res) => {
    const sql = `
        SELECT 
            products.id, 
            products.name AS product_name, 
            products.price, 
            categories.name AS category_name 
        FROM products 
        INNER JOIN categories ON products.category_id = categories.id
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Məlumatlar birləşdirilərkən xəta:", err.message);
            return res.status(500).json({ error: "Məlumat bazasından xəta qaytarıldı" });
        }
        
        res.json(results);
    });
});


application.listen(PORT,() =>{
    console.log(`Server running on Port ${PORT}`);
});