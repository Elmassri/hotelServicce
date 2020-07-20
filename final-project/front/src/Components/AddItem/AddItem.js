
import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo(props) {
  const [state, setState] = React.useState({
    columns: [
      
      
      { title: 'ID', field: 'item_id' },
      
      { title: 'Name', field: 'name' },

      { title: 'Category', field: 'categories_name' },
      { title: 'Price', field: 'price' },

      

    ],
    name:'',
    
    
  });

  return (
    <MaterialTable
      title="Items"
      columns={state.columns}
      data={props.items}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}