import { instructionStatus, instructionWithStatus } from './dataTypes';

export interface affectedUnitResponse {
  message: string;
  unit?: {
    _id: string;
    unitNumber: string;
    instructions: instructionWithStatus[];
  };
}

export interface loginResponse {
  token: string;
  userId: string;
}

export interface updateStatusResponse {
  message: string;
  updatedAffectedUnitArray: [
    {
      instruction: string;
      status: instructionStatus;
      _id: string;
    }
  ];
}
