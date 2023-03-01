import React, { useState } from 'react';
// import { render } froRolem 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { CountriesInterface } from '../Interfaces/CountriesInterface';
// interface Propstype {
//   countries: CountriesInterface[],
// }
// 
// export const Table: React.FC<Propstype> = (props) => {
  export const Table=(props)=>{
  // console.log(props.countries);
  // const [rowData, setRowData] =useState([
  //     {eName:"John", age:24, role:"web Designer"},
  //      {eName:"Mary", age:23, role:"App Developer"},
  //      {eName:"Joe",age:30,role:"QA"}
  // ]);
  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'Name', field: 'name', minWidth: '400' ,checkboxSelection:true,headerCheckboxSelection:true},
    { headerName: 'Capital', field: 'capital' , tooltipField: 'name'},
    { headerName: 'Currency', field: 'currency' , tooltipField: 'name'},
    { headerName: 'Continent', field: 'continent.name' },

  ])
  const defaultColDef={
    sortable:true,editable:true,filter:true
  }
  // let gridApi:any;
  // const onGridReady=(params:any)=>{
  //   gridApi=params.api;
  // }
  // const onExportClick=()=>{
  //   gridApi.exportDataAsCsv();
  // }
  let rowSelectionType="multiple";
  
  const generateContextMenu=()=>{
    const menuItems=[];
    menuItems.push({
      name:'view',
      action:()=>{
        console.log("hyy")
      }
    })
    return menuItems;
  }
  return (
    <>
    {/* <button onClick={()=>onExportClick}>Export</button> */}
    <div className='ag-theme-alpine' style={{ height: '100vh', width: '100vw' }}>
      <AgGridReact
        rowData={props.countries || []}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        // onGridReady={(params)=>onGridReady}
        enableBrowserTooltips={true}
        rowSelection={rowSelectionType}
        tooltipShowDelay={{tooltipShowDelay:2}}
        getContextMenuItems={generateContextMenu}
        allowContextMenuWithControlKey={true}
        >
          
      </AgGridReact>
    </div>

    </>
  )
}
export default Table;