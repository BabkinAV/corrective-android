import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootStackParamList = {
  searchUnit: undefined;
  documentList: {
    unitNumber: string;
  };
  login: undefined;
	about: undefined;
};

export type SearchUnitNavigationProp = DrawerScreenProps<
  RootStackParamList,
  'searchUnit'
>['navigation'];

export type LoginNavigationProp = DrawerScreenProps<
  RootStackParamList,
  'login'
>['navigation'];

export type DocumentListProp = DrawerScreenProps<
  RootStackParamList,
  'documentList'
>;




