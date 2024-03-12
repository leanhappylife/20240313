import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community'; // Import ColDef for column definitions
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Theme CSS

// Adjust the import path for DataFilterResult as necessary
import { DataFilterResult } from '../../types'; 

interface DataFilterListResultProps {
  data: DataFilterResult[];
  onSelectRecord: (record: DataFilterResult) => void; // Callback to handle record selection
}

const DataFilterListResult: React.FC<DataFilterListResultProps> = ({ data, onSelectRecord }) => {
  // Ensure columnDefs conforms to the ColDef type

  const columnDefs: ColDef[] = [
    { headerName: 'Data Filter ID', field: 'dataFilterId', sortable: true, filter: true, resizable: true },
    { headerName: 'Data Filter', field: 'dataFilter', sortable: true, filter: true, resizable: true },
    { headerName: 'Description', field: 'description', sortable: true, filter: true, resizable: true },
    { headerName: 'Application ID', field: 'applicationId', sortable: true, filter: true, resizable: true },
    { headerName: 'Customer AC', field: 'customerAc', sortable: true, filter: true, resizable: true },
    { headerName: 'Trust No', field: 'trustNo', sortable: true, filter: true, resizable: true },
    { headerName: 'User Type', field: 'userType', sortable: true, filter: true, resizable: true },
    { headerName: 'Grade', field: 'grade', sortable: true, filter: true, resizable: true },
    { headerName: 'Team', field: 'team', sortable: true, filter: true, resizable: true },
    { headerName: 'Officer', field: 'officer', sortable: true, filter: true, resizable: true },
    { headerName: 'Assistant', field: 'assistant', sortable: true, filter: true, resizable: true },
    { headerName: 'Fund Manager Code', field: 'fundManagerCode', sortable: true, filter: true, resizable: true },
    { headerName: 'IC Code', field: 'icCode', sortable: true, filter: true, resizable: true },
    { headerName: 'Entity', field: 'entity', sortable: true, filter: true, resizable: true },
    { headerName: 'LOCATION_CD', field: 'locationCd', sortable: true, filter: true, resizable: true },
    { headerName: 'RESOURCE_ID', field: 'resourceId', sortable: true, filter: true, resizable: true },
    // Add more columns as needed, ensuring they conform to the ColDef interface
  ];

  // Default column definitions for ag-Grid, applying common settings for all columns
  const defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    // Add other default settings as needed
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        rowData={data} // Provide row data to the grid
        columnDefs={columnDefs} // Provide column definitions to the grid
        defaultColDef={defaultColDef} // Apply default column definitions
        domLayout="autoHeight" // Adjust grid height based on content
        animateRows={true} // Animate rows when sorting or filtering
        onRowSelected={(event) => {
          if (event.node.isSelected()) {
              onSelectRecord(event.data);
          }
      }}
        rowSelection="single" // Optional: Enables single row selection mode
      />
    </div>
  );
};

export default DataFilterListResult;
