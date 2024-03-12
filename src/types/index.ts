// Defines the structure for application ID options used in dropdowns
export interface ApplicationIdOption {
    value: string;
    label: string;
  }
  
  // Example data structure for the results fetched based on the selected Application ID
  export interface DataFilterResult {
    // Assuming these fields based on the DataFilterListUpdate component; adjust as needed
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
    narrative?: string; // Assuming narrative is a string; adjust as needed
  }
  
  // Optionally, if you have more complex state or props that are reused across components,
  // you can define them here as well.

  // Assuming this is placed in /src/types/index.ts or a similar file

export interface DataFilterAssignmentResult {
  groupId: string;
  dataFilterID: string;
  dataFilterDescription: string;
  applicationID: string;
}

  