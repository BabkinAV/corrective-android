import * as React from 'react';
import { StyleSheet } from 'react-native';

import { FAB, Portal } from 'react-native-paper';
import { theme } from '../../theme';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { instructionStatus } from '../../types/dataTypes';
import { resetSelected } from '../../store/reducers/documentsReducer';

const EditStatusFAB = () => {
  const [state, setState] = React.useState({ open: false });

	const dispatch = useAppDispatch();

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

	const handleActionItemPress = (status: instructionStatus) => {
		console.log('Items status changed to ', status)
		dispatch(resetSelected())
	}

  const { open } = state;

  return (
    <Portal>
      <FAB.Group
        open={open}
        visible
        fabStyle={styles.fab}
        color="#fff"
        icon={open ? 'close-circle-outline' : 'pencil-outline'}
        actions={[
          {
            icon: 'check',
            label: 'Set selected as completed',
						color: theme.colors.green100,
						style:styles.actionItem,
            onPress: () => handleActionItemPress('confirmed'),
          },
          {
            icon: 'information',
            label: 'Set selected as opened',
						color: theme.colors.primary,						
						style:styles.actionItem,
            onPress: () => handleActionItemPress('open'),
          },
          {
            icon: 'minus-circle',
            label: 'Set selected as refused',
						color: theme.colors.red100,
						style:styles.actionItem,
            onPress: () => handleActionItemPress('refused'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  );
};

export default EditStatusFAB;

const styles = StyleSheet.create({
  fab: {
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
  },
	actionItem: {
		borderRadius: 50,
	},
	// actionItemRefused: {
	// 	borderRadius: 50,
	// 	color: theme.colors.red100
	// },
	// actionItemOpened: {
	// 	borderRadius: 50,
	// 	color: theme.colors.primary
	// },
});
