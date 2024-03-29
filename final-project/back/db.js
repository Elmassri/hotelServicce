const sqlite = require('sqlite');


const initializeDatabase = async () => {
 let db;
  try{
  
     db = await sqlite.open("Data.sqlite");
    console.log("connected")
    }
    catch(err)
    {
      console.log(err)  
    }
  const CheckUser=async (props)=>{
    const { username, password } = props; 
      const rows = await db.all(`SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`)
        if (rows.length > 0) {
          return true;
          
        } else {
          return false
        }			
        
    }
    
  



  const ReadRoom = async () => {
    try {
      const rows = await db.all(`SELECT * FROM room`);
      if (rows.length == 0) {
        throw new Error("room are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any Subscriber");
    }
  };

  const CreateRoom = async (props) => {
    const { number } = props

    if (!props || !number) {
      throw new Error(`You must provide a number`);
    }
    try {
      const result = await db.run(`INSERT INTO room (number) VALUES ( '${number}')`);
      const id = result.stmt.lastID
      return id
    } catch (err) {
      
      throw new Error("This combination doesnt work");
    }
  };

  const DeleteRoom = async (id) => {
    try {
      const result = await db.run(`DELETE FROM room WHERE id = ${id}`);
      if (result.stmt.changes === 0) {
        throw new Error(`room with id ${id} doesn't exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`could not delete room with id ${id}` + err);
    }
  };

  const UpdateRoom = async (id, props) => {
    const { room} = props;
    if (!props && !room) {
      throw new Error(`You must provide a room`);
    }

    let stmt = "";
     
      stmt = `update room set number = '${number}'where ID = ${id} `;
      console.log(stmt);
   
    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`room with ID ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update ROOM with ID ${id}` + err);
    }
  };

  
  const ReadCategories = async () => {
    try {
      const rows = await db.all(`SELECT * FROM categories`);
      if (rows.length == 0) {
        throw new Error("categories are empty!");
      }      
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any category");
    }
  };

  const CreateCategories = async (props) => {
    const { categories_name } = props
    console.log(categories_name)
    if (!props || !categories_name) {
      throw new Error(`You must provide a name`);
    }
    try {
      const result = await db.run(`INSERT INTO categories (categories_name) VALUES ( '${categories_name}')`);
      const id = result.stmt.lastID
      return id
    } catch (err) {
      
      throw new Error(err);
    }
  };

  const DeleteCategories = async (id) => {
    try {
      const result = await db.run(`DELETE FROM categories WHERE id = ${id}`);
      if (result.stmt.changes === 0) {
        throw new Error(`category with id ${id} doesn't exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`could not delete category with id ${id}` + err);
    }
  };

  const UpdateCategories = async (id, props) => {
    const { name } = props;
    if (!props && !name) {
      throw new Error(`You must provide a name`);
    }

    let stmt = "";
     
      stmt = `update categories set categories_name = '${name}'where ID = ${id} `;
      console.log(stmt);
   
    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`category with ID ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update category with ID ${id}` + err);
    }
  };












  const ReadUser = async () => {
    try {
      const rows = await db.all(`SELECT * FROM user order by username `);
      if (rows.length == 0) {
        throw new Error("user list are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any user");
    }
  };

  const CreateUser = async (props) => {
    const { username, password,role, room_id } = props

    if (!props || !username || !password||!role) {
      throw new Error(`You must provide an username and password`);
    }
    try {
      const result = await db.run(`INSERT INTO user (username,password,role,room_id) VALUES ('${username}', '${password}','${role}','${room_id}')`);
      const id = result.stmt.lastID
      return id
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const DeleteUser = async (id) => {
    try {
      const result = await db.run(`DELETE FROM user WHERE ID = ${id}`);
      if (result.stmt.changes === 0) {
        throw new Error(`user with id ${id} doesn't exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`could not delete user with id ${id}` + err);
    }
  };

  const UpdateUser = async (id, props) => {
    const { username, password,role,room_id } = props;
    if (!props && !(props.username && props.password && props.role && props.room_id)) {
      throw new Error(`You must provide a username or an password`);
    }

    let stmt = "";
    if (username && password && role && room_id) {
      stmt = `update user set room_id='${room_id}', username = '${username}', password = '${password}',role='${role}' where id = ${id} `;
      console.log(stmt);
    } else if (username && !password && !role && !room_id) {
      stmt = `update user set username = '${username}' where id = ${id} `;
    } else if(password && !username && !role && !room_id) {
      stmt = `update user set  password = '${password}' where id = ${id} `;
    }else if(role && !username && !password && !room_id){
        stmt=`update role set  role = '${role}' where id = ${id}`
    }else if(room_id&& !username && !password && !role){
        stmt=`update role set  room_id = '${room_id}' where id = ${id}`
    }
    
    else if((username && password && room_id)&& !role){
        stmt=`update user set room_id='${room_id}',  username ='${username}',password= '${password}' where id = ${id}`
    }else if((username && role && room_id) && !password){
        stmt=`update user set room_id='${room_id}', username ='${username}',role= '${role}' where id = ${id}`

    }else if((password && role && room_id)&& !username){
        stmt=`update user set room_id='${room_id}' , role ='${role}',password= '${password}' where id = ${id}`

    }else if((password && username)&& !role && !room_id){
        stmt=`update user set username='${username}' ,password= '${password}' where id = ${id}`
    }else if((role && username)&& !password && !room_id){
        stmt=`update user set role='${role}' ,password= '${password}' where id = ${id}`
    }else if((password && room_id)&& !role && !username){
        stmt=`update user set room_id='${room_id}' ,password= '${password}' where id = ${id}`
    }else if((room_id && username)&& !role && !password){
        stmt=`update user set room_id='${room_id}' ,username= '${username}' where id = ${id}`
    }else if((role && username)&& !password && !room_id){
        stmt=`update user set role='${role}' ,username= '${username}' where id = ${id}`
    }else if((room_id && role)&& !password && !username){
        stmt=`update user set room_id='${room_id}' ,role= '${role}' where id= ${id}`
    }
    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`user with ID ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update user with ID ${id}` + err);
    }
  };












  const ReadItems = async (props) => {
    const categories_id=props
    try {
      const rows = await db.all(`SELECT * FROM items  INNER JOIN categories ON items.categories_id=categories.id WHERE categories_id=${categories_id}`);
      
      if (rows.length == 0) {
        throw new Error("items are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any item");
    }
  };
  const ReadAllItems = async () => {
    
    try {
      const rows = await db.all(`SELECT * FROM items  INNER JOIN categories ON items.categories_id=categories.id`);
      
      if (rows.length == 0) {
        throw new Error("items are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any item");
    }
  };

  const CreateItems = async (props) => {
    const { name,price,categories_id } = props
  console.log(props)
    if (!props || !name || !price || !categories_id ) {
      throw new Error(`You must provide a name`);
    }
    try {
      const result = await db.run(`INSERT INTO items (name,price,categories_id) VALUES ( '${name}', '${price}','${categories_id}')`);
      /* const id = result.stmt.lastID
      return id */
    } catch (err) {
      
      throw new Error("This combination doesnt work");
    }
  };

  const DeleteItems = async (id) => {
    try {
      const result = await db.run(`DELETE FROM items WHERE item_id = ${id}`);
      if (result.stmt.changes === 0) {
        throw new Error(`item with id ${id} doesn't exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`could not delete item with id ${id}` + err);
    }
  };

  const UpdateItems = async (id, props) => {
    const { name,categories_id,price } = props;
    if (!props && !name && !price) {
      throw new Error(`You must provide a name or price`);
    }

    let stmt = "";
     if(name && price){
      stmt = `update items set name = '${name}', price = '${price}' where item_id = ${id} `;
     }
      
      else if(name && !price){
        stmt =`update items set name = '${name}' where id=${id}`
      }
      else if(price && !name){
        stmt =`update items set price = '${price} where id=${id} '`
      }
   
    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`category with ID ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update category with ID ${id}` + err);
    }
  };
  

  const ReadOrders = async (props) => {
    
    try {
      const rows = await db.all(`SELECT * FROM orders`);
      
      if (rows.length == 0) {
        throw new Error("items are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any item");
    }
  };

  const CreateOrders = async (props) => {
    const { total,user_id } = props

    if (!props || !total|| !user_id ) {
      throw new Error(`You must provide a name`);
    }
    try {
      const result = await db.run(`INSERT INTO orders (total,user_id) VALUES ( '${total}', '${user_id}')`);
      /* const id = result.stmt.lastID
      return id */
    } catch (err) {
      
      throw new Error("This combination doesnt work");
    }
  };


  const CreateList = async (props) => {
    const { item_name,orders_id } = props

    if (!props || !item_name|| !orders_id ) {
      throw new Error(`You must provide a name`);
    }
    try {
      const result = await db.run(`INSERT INTO list (item_name,orders_id) VALUES ( '${item_name}', '${orders_id}')`);
      /* const id = result.stmt.lastID
      return id */
    } catch (err) {
      
      throw new Error("This combination doesnt work");
    }
  };

  const ReadList = async (props) => {
    const order_id=props
    try {
      const rows = await db.all(`SELECT * FROM item-list  INNER JOIN orders ON items-list.order_id=orders.id WHERE order_id=${order_id}`);
      
      if (rows.length == 0) {
        throw new Error("items are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any item");
    }
  };


  








  const controller = {
    ReadCategories,
    CreateCategories,
    DeleteCategories,
    UpdateCategories,

    ReadUser,
    CreateUser,
    DeleteUser,
    UpdateUser,

    ReadRoom,
    CreateRoom,
    DeleteRoom,
    UpdateRoom,

    ReadItems,
    CreateItems,
    DeleteItems,
    UpdateItems,

    ReadOrders,
    CreateOrders,
    CreateList,ReadList,
    CheckUser,
    ReadAllItems


  }
  return controller;

  }


module.exports = initializeDatabase;
