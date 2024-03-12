import React, { useState, useEffect, ChangeEvent } from 'react';
// Adjust the import path to match your project structure
import { DataFilterResult } from '../../types';

interface DataFilterListUpdateProps {
  mode: 'add' | 'amend';
  initialData?: DataFilterResult;
  onSubmit: (data: DataFilterResult) => void;
  onCancel: () => void;
}

const DataFilterListUpdate: React.FC<DataFilterListUpdateProps> = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
}) => {
  const emptyFormData: DataFilterResult = {
    dataFilterId: '',
    dataFilter: '',
    description: '',
    applicationId: '',
    customerAc: '',
    trustNo: '',
    userType: '',
    grade: '',
    team: '',
    officer: '',
    assistant: '',
    fundManagerCode: '',
    icCode: '',
    entity: '',
    locationCd: '',
    resourceId: '',
    narrative: '', // Assuming narrative is a string; adjust as needed
  };

  const [formData, setFormData] = useState<DataFilterResult>(mode === 'amend' && initialData ? initialData : emptyFormData);

  useEffect(() => {
    if (mode === 'amend' && initialData) {
      setFormData(initialData);
    } else {
      setFormData(emptyFormData);
    }
  }, [mode, initialData, emptyFormData]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(formData); }}>
      <h2>{mode === 'add' ? 'Add a Record' : 'Amend a Record'}</h2>
      {Object.keys(emptyFormData).map((key) => (
        <div key={key}>
          <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').trim()}</label>
          <input
            type="text"
            id={key}
            name={key}
            value={formData[key as keyof DataFilterResult] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">{mode === 'add' ? 'Add' : 'Amend'}</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default DataFilterListUpdate;
