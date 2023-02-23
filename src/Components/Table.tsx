import React, { useState } from 'react';
// import { render } froRolem 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
interface Propstype{
  countries:[{
    name:string,
    capital:string,
    currency:string,
    continent:{
      name:string,
    }
  }]
}

export const Table:React.FC<Propstype> = (props) => {
  // console.log(props.countries);
    // const [rowData, setRowData] =useState([
    //     {eName:"John", age:24, role:"web Designer"},
    //      {eName:"Mary", age:23, role:"App Developer"},
    //      {eName:"Joe",age:30,role:"QA"}
    // ]);
    const [columnDefs, setColumnDefs] = useState<any>([
        {headerName:'Name',field:'name',minWidth:'400'},
        {headerName:'Capital',field:'capital'},
        {headerName:'Currency',field:'currency'},
        {headerName:'Continent',field:'continent.name'},

    ])
      return (
    
    <div className='ag-theme-alpine' style={{height: '100vh', width:'100vw'}}>
       <AgGridReact
               rowData={props.countries || []}
               columnDefs={columnDefs}>
           </AgGridReact>
    </div>
    
    
  )
}
export default Table;