// Define the structure for application ID options and data results
interface ApplicationIdOption {
    value: string;
    label: string;
  }
  
  interface DataFilterResult {
    id: string;
    dataFilterId: string;
    dataFilter: string;
    description: string;
    applicationId: string;
    customerAc?: string;
    trustNo?: string;
    userType?: string;
    grade?: string;
    team?: string;
    officer?: string;
    assistant?: string;
    fundManagerCode?: string;
    icCode?: string;
    entity?: string;
    locationCd?: string;
    resourceId?: string;
    narrative?: string;
  }
  
  // Mock data for application IDs
  const applicationIds: ApplicationIdOption[] = [
    { value: '1', label: 'Application 1' },
    { value: '2', label: 'Application 2' },
  ];
  
  // Mock data for application data based on the selected Application ID
  const applicationData: Record<string, DataFilterResult[]> = {
    '1': [
      { id: '1-1', dataFilterId: 'DF1', dataFilter: 'Filter 1', description: 'Description for Filter 1', applicationId: '1', narrative: 'Narrative 1' },
      { id: '1-2', dataFilterId: 'DF2', dataFilter: 'Filter 2', description: 'Description for Filter 2', applicationId: '1', narrative: 'Narrative 2' },
    ],
    '2': [
      { id: '2-1', dataFilterId: 'DF3', dataFilter: 'Filter 3', description: 'Description for Filter 3', applicationId: '2', narrative: 'Narrative 3' },
      { id: '2-2', dataFilterId: 'DF4', dataFilter: 'Filter 4', description: 'Description for Filter 4', applicationId: '2', narrative: 'Narrative 4' },
    ],
  };
  
  /**
   * Simulates fetching application IDs from an API.
   */
  export const fetchApplicationIds = async (): Promise<ApplicationIdOption[]> => {
    // Simulate a network request with a delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(applicationIds), 500);
    });
  };
  
  /**
   * Simulates fetching data based on the selected Application ID.
   * @param applicationId The selected application ID.
   */
  export const fetchData = async (applicationId: string): Promise<DataFilterResult[]> => {
    // Simulate a network request with a delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(applicationData[applicationId] || []), 500);
    });
  };
  