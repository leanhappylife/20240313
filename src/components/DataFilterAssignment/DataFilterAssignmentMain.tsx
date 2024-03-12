// /src/components/DataFilterAssignment/DataFilterAssignmentMain.tsx
import React, { useState } from 'react';
import Table from '../../Table'; // Ensure this import path is correct
import DataFilterAssignmentAdd from './DataFilterAssignmentAdd';
import { DataFilterAssignmentResult } from '../../types'; // Ensure this path is correct

// Updated mock data to include group id
const initialMockData: DataFilterAssignmentResult[] = [
  { groupId: 'G01', dataFilterID: '001', dataFilterDescription: 'Description for 001', applicationID: 'App01' },
  { groupId: 'G02', dataFilterID: '002', dataFilterDescription: 'Description for 002', applicationID: 'App02' },
];

const DataFilterAssignmentMain: React.FC = () => {
  const [currentView, setCurrentView] = useState<'main' | 'add'>('main');
  const [searchGroupId, setSearchGroupId] = useState('');
  const [results, setResults] = useState<DataFilterAssignmentResult[]>(initialMockData);
  
  const columnDefs = [
    { headerName: "Group ID", field: "groupId" },
    { headerName: "Data Filter ID", field: "dataFilterID" },
    { headerName: "Data Filter Description", field: "dataFilterDescription" },
    { headerName: "Application ID", field: "applicationID" },
  ];

  const handleSearch = () => {
    const filteredResults = initialMockData.filter(data =>
      data.groupId.includes(searchGroupId)
    );
    setResults(filteredResults);
  };

  const handleAddNewDataFilter = (newDataFilter: DataFilterAssignmentResult) => {
    const updatedResults = [...results, newDataFilter];
    setResults(updatedResults);
    setCurrentView('main'); // Return to the main view after adding a new filter
  };

  return (
    <div>
      {currentView === 'main' && (
        <>
          <input
            type="text"
            value={searchGroupId}
            onChange={(e) => setSearchGroupId(e.target.value)}
            placeholder="Enter Group ID"
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={() => setCurrentView('add')}>Add New</button>
          <Table
            className="my-custom-class"
            rowData={results}
            columnDefs={columnDefs}
          />
        </>
      )}
      {currentView === 'add' && (
        <DataFilterAssignmentAdd
          onAdd={handleAddNewDataFilter}
          onCancel={() => setCurrentView('main')}
        />
      )}
    </div>
  );
};

export default DataFilterAssignmentMain;
