export type instructionStatus = 'confirmed' | 'open' | 'refused';

export type RootStackParamList = {
  searchUnit: undefined;
  documentList: {
		unitNumber: string
	};
};

export interface Instruction {
	_id: string,
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

export interface affectedUnitResponse {
	message: string;
	unit?: {
		_id: string;
		unitNumber: string;
		instructions: instructionWithStatus[]
	}
}

