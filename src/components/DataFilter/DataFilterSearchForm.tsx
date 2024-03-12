import React, { useState, useEffect } from 'react';
import { fetchApplicationIds, fetchData } from '../../api/mockApi'; // Ensure the import path is correct

interface ApplicationIdOption {
  value: string;
  label: string;
}

interface DataFilterSearchFormProps {
  onViewChange: (view: 'main' | 'add' | 'amend') => void;
  onResultsChange: (results: any[]) => void;
}

const DataFilterSearchForm: React.FC<DataFilterSearchFormProps> = ({ onViewChange, onResultsChange }) => {
  const [applicationIds, setApplicationIds] = useState<ApplicationIdOption[]>([]);
  const [selectedApplicationId, setSelectedApplicationId] = useState<string>('');
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const loadApplicationIds = async () => {
      try {
        const ids = await fetchApplicationIds();
        setApplicationIds(ids);
      } catch (error) {
        console.error('Failed to fetch application IDs:', error);
      }
    };

    loadApplicationIds();
  }, []);

  const handleApplicationIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedApplicationId(event.target.value);
  };

  const handleReceiveClick = async () => {
    setIsFetching(true);
    try {
      const data = await fetchData(selectedApplicationId);
      onResultsChange(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleResetClick = () => {
    setSelectedApplicationId('');
    onResultsChange([]); // Effectively reset the results
  };

  return (
    <div>
      <label htmlFor="applicationIdSelect">Select Application ID:</label>
      <select
        id="applicationIdSelect"
        value={selectedApplicationId}
        onChange={handleApplicationIdChange}
        disabled={isFetching}
      >
        <option value="">Select Application ID</option>
        {applicationIds.map((id) => (
          <option key={id.value} value={id.value}>{id.label}</option>
        ))}
      </select>
      <button onClick={handleReceiveClick} disabled={isFetching || !selectedApplicationId}>
        Receive
      </button>
      <button onClick={handleResetClick} disabled={isFetching}>
        Reset
      </button>
    </div>
  );
};

export default DataFilterSearchForm;
