

initializeDatabase =require('./db') ;


const express=require('express');
const app=express();





 

const start = async()=>{

    const controller = await initializeDatabase();

  app.get('/', (req, res, next)=>{
    try{
      res.json({message:"Hello"});
    } catch(err){
        next(err);
    }
  });
  


  
  app.post('/auth', async (req, res, next) => {
    const { username, password } = req.body;
  
    try{
      const result = await controller.CheckUser({username , password });
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });


  





    

  app.get('/cat', async(req, res, next)=>{
    try{
      const result = await controller.ReadCategories();
      res.json({success : true , result});
      console.log("retriving")
    } catch(err){
      next(err)
    }
  });

  app.get('/categories/create', async(req, res, next)=>{
    const { categories_name  } = req.query;
    try{
      const result = await controller.CreateCategories({categories_name });
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });

  app.get("/categories/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteCategories(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/categories/update", async (req, res, next) => {
    const { id,name } = req.query;
    try {
      const result = await controller.UpdateCategories(id, { name });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });



  app.get('/items', async(req, res, next)=>{
    try{
      const result = await controller.ReadItems();
      res.json({success : true , result});
    } catch(err){
      next(err)
    }
  });

  app.get('/items/create', async(req, res, next)=>{
    const { name,price,categories_id } = req.query;
    try{
      const result = await controller.CreateItems({name,price,categories_id });
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });

  app.get("/items/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteItems(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/items/update", async (req, res, next) => {
    const { id,name } = req.query;
    try {
      const result = await controller.UpdateItems(id, { name,price });
      res.json({ success: true, result }); 
    } catch (err) {
      next(err);
    }
  });











  app.get('/Admin', async(req, res, next)=>{
    try{
      const result = await controller.ReadAdmin();
      res.json({success : true , result});
    } catch(err){
      next(err)
    }
  });

  app.get('/Admin/create', async(req, res, next)=>{
    const { username , password } = req.query;
    try{
      const result = await controller.CreateAdmin({username , password });
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });

  app.get("/Admin/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteAdmin(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/Admin/update", async (req, res, next) => {
    const { id, username, password } = req.query;
    try {
      const result = await controller.UpdateAdmin(id, { username, password });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
 


  app.get('/room', async(req, res, next)=>{
    try{
      const result = await controller.ReadRoom();
      res.json({success : true , result});
      console.log("retriving")
    } catch(err){
      next(err)
    }
  });

  app.get('/room/create', async(req, res, next)=>{
    const { number  } = req.query;
    try{
      const result = await controller.CreateRoom({number });
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });

  app.get("/room/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteRoom(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/room/update", async (req, res, next) => {
    const { id,name } = req.query;
    try {
      const result = await controller.UpdateRoom(id, { name });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });









  app.get('/Product', async(req, res, next)=>{
    try{
      const result = await controller.ReadProduct();
      res.json({success : true , result});
    } catch(err){
      next(err)
    }
  });

  app.get('/Product/create', async(req, res, next)=>{
    const { typename } = req.query;
    try{
      const result = await controller.CreateProduct({typename});
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });

  app.get("/Product/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteProduct(id);
      res.json({ success: true, result });
    } catch (err) {
     // console.log(err)
      next(err);
    }
  });

  app.get("/Product/update", async (req, res, next) => {
    const { id, typename} = req.query;
    try {
      const result = await controller.UpdateProduct(id, { typename});
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });









  app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ success: false, message: err.message });
  });

  app.listen(5000, ()=>{console.log("Listening on port 5000")});
  
  

}
start()

