// /src/components/DataFilterAssignment/DataFilterAssignmentAdd.tsx
import React, { useState } from 'react';
import { DataFilterAssignmentResult } from '../../types'; // Ensure this path is correct


interface DataFilterAssignmentAddProps {
  onAdd: (data: DataFilterAssignmentResult) => void; // Callback when data is added
  onCancel: () => void; // Callback to cancel addition
}

const DataFilterAssignmentAdd: React.FC<DataFilterAssignmentAddProps> = ({ onAdd, onCancel }) => {
  const [groupId, setGroupId] = useState('');
  const [dataFilterID, setDataFilterID] = useState('');
  const [dataFilterDescription, setDataFilterDescription] = useState('');
  const [applicationID, setApplicationID] = useState('');

  const handleSubmit = () => {
    // Here, you'd typically validate the inputs or even submit to a backend service
    const newDataFilter: DataFilterAssignmentResult = {
      groupId,
      dataFilterID,
      dataFilterDescription,
      applicationID,
    };

    onAdd(newDataFilter); // Pass the new data filter up to the parent component
  };

  return (
    <div>
      <h2>Add New Data Filter Assignment</h2>
      <div>
        <label>
          Group ID:
          <input
            type="text"
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
            placeholder="Group ID"
          />
        </label>
      </div>
      <div>
        <label>
          Data Filter ID:
          <input
            type="text"
            value={dataFilterID}
            onChange={(e) => setDataFilterID(e.target.value)}
            placeholder="Data Filter ID"
          />
        </label>
      </div>
      <div>
        <label>
          Data Filter Description:
          <input
            type="text"
            value={dataFilterDescription}
            onChange={(e) => setDataFilterDescription(e.target.value)}
            placeholder="Data Filter Description"
          />
        </label>
      </div>
      <div>
        <label>
          Application ID:
          <input
            type="text"
            value={applicationID}
            onChange={(e) => setApplicationID(e.target.value)}
            placeholder="Application ID"
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Add</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DataFilterAssignmentAdd;
