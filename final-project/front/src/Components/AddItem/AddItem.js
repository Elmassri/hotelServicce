
import React, {useState} from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo(props) {
  const [state, setState] = React.useState({
    columns: [
      
      
      { title: 'ID', field: 'item_id' },
      
      { title: 'Name', field: 'name' },

      {  title: 'Category', field: 'categories_name' },
      { title: 'Price', field: 'price' },

      

    ],
    name:'',
    
    
  });
  const [data, setData] = useState([]);
  return (
      <MaterialTable
          style={{height:'100%'}}
          options={{
            
            headerStyle: {
              backgroundColor: 'rgb(211,211,211)',
              color: 'red',
              fontWeight : 'bold',

            },
            rowStyle:{
              backgroundColor: 'rgb(211,211,211)',

            }
          }}
          title="Items "
          columns={state.columns}
          data= {props.items}
          editable={{

            onRowAdd: (newData) =>


                new Promise((resolve)   => {
                  setData([...data,props.categories])
                  console.log("newData =" + newData.categories_name)
                  setTimeout(() => {

                    props.onAdd(newData.name,newData.categories_name,newData.price)
                    window.location.reload(false);
                    resolve();
                  }, 600);


                }),

            onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    props.onUpdate(oldData.id,newData.categories_name,newData.price)
                    window.location.reload(false);
                  }, 600);
                }),
            onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    props.onDelete(oldData.item_id)
                    window.location.reload(false);

                    resolve();

                    ;
                  }, 600);
                }),
          }}
      />
  );
}
