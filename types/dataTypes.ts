export type instructionStatus = 'confirmed' | 'open' | 'refused';


export interface Instruction {
  _id: string;
  instNumber: string;
  title: string;
  instType: string;
  subsystem: string;
  releaseDate: string;
  link: string;
}

export interface instructionWithStatus {
  instruction: Instruction;
  status: instructionStatus;
  _id: string;
}

