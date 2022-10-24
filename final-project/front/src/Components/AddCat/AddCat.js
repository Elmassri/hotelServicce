
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { DateRange, LaptopWindows } from '@material-ui/icons';
import { dark } from '@material-ui/core/styles/createPalette';

export default function AddCat(props) {
  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'categories_name' },
      
    ],
  
    
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);


  
          
  return (
    
    <MaterialTable
        options={{
            headerStyle: {
                backgroundColor: 'rgb(211,211,211)',
                color: 'red',
                fontWeight : 'bold',
                
            },
            
        }}
      title="Categories "
      columns={state.columns}
      data= {props.categories}
      editable={{
       
        onRowAdd: (newData) =>
        

          new Promise((resolve,rejecty)   => {
            setData([...data,props.categories])
            console.log("newData =" + newData.categories_name)
            setTimeout(() => {
              
              props.onAdd(newData.categories_name,"categories")
              window.location.reload(false);
              resolve();
            }, 600);
            
            
          }),
          
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              props.onUpdate(oldData.id,newData.categories_name,"categories")
              window.location.reload(false);
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              props.onDelete(oldData.id,"categories")
              window.location.reload(false);

              resolve();
             
              ;
            }, 600);
          }),
      }}
    />
  );
}
