import React, { useState } from 'react';
import DataFilterSearchForm from './DataFilterSearchForm';
import DataFilterListResult from './DataFilterListResult';
import DataFilterListUpdate from './DataFilterListUpdate';
import { DataFilterResult } from '../../types'; // Ensure the path to your types is correct

const DataFilterMain: React.FC = () => {
  const [currentView, setCurrentView] = useState<'main' | 'add' | 'amend'>('main');
  const [results, setResults] = useState<DataFilterResult[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<DataFilterResult | undefined>(undefined);

  const handleViewChange = (view: 'main' | 'add' | 'amend') => {
    setCurrentView(view);
    if (view === 'add') {
      // Ensure there's no selected record when adding a new entry
      setSelectedRecord(undefined);
    }
  };

  const handleReset = () => {
    setCurrentView('main');
    setSelectedRecord(undefined);
  };

  const handleSelectRecord = (record: DataFilterResult) => {
    setSelectedRecord(record);
  };

  const handleSubmitAddOrUpdate = (data: DataFilterResult) => {
    console.log('Submitted data:', data);
    handleReset(); // Reset view and selected record after form submission
  };

  return (
    <div>
      {currentView === 'main' && (
        <>
          <DataFilterSearchForm
            onViewChange={handleViewChange}
            onResultsChange={setResults}
          />
          <button onClick={() => handleViewChange('add')}>Add</button>
          <button 
            onClick={() => handleViewChange('amend')}
            disabled={!selectedRecord} // Amend button disabled if no record is selected
          >
            Amend
          </button>
          <DataFilterListResult
            data={results}
            onSelectRecord={handleSelectRecord} // Pass method to select a record
          />
        </>
      )}
      {(currentView === 'add' || currentView === 'amend') && (
        <DataFilterListUpdate
          mode={currentView}
          initialData={currentView === 'amend' ? selectedRecord : undefined}
          onSubmit={handleSubmitAddOrUpdate}
          onCancel={handleReset}
        />
      )}
    </div>
  );
};

export default DataFilterMain;
