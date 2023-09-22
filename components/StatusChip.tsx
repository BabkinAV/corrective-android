import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import { instructionStatus } from '../types';

const StatusChip = ({
  status,
}: {
  status: instructionStatus;
}) => {
  const chipColors = {
		confirmed: '#008000',
		open: '#3c64b1',
		refused: '#FF0000'
	};

  const minusIcon = ({ size }: { size: number; color: string }) => {
    return <Image
      source={require('../assets/minusCircleIcon.png')}
      style={{ width: size, height: size, tintColor: chipColors[status] }}
    />
	};
  const checkIcon = ({ size }: { size: number; color: string }) => {
    return <Image
      source={require('../assets/checkIcon.png')}
      style={{ width: size, height: size, tintColor: chipColors[status] }}
    />
	};

	const customIcon = status === 'confirmed' ? checkIcon : minusIcon

  return (
    <Chip
      icon={status === 'open' ? 'information' : customIcon}
      mode="outlined"
      style={[styles.statusChip, { borderColor: chipColors[status] }]}
      compact
      textStyle={[styles.chipText, { color: chipColors[status] }]}
    >
      {status}
    </Chip>
  );
};

export default StatusChip;

const styles = StyleSheet.create({
  statusChip: {
    borderRadius: 50,
    marginLeft: 'auto',
    padding: 0,
  },
  chipText: {
    marginVertical: 1,
    fontSize: 12,
    marginHorizontal: 1,
    textTransform: 'capitalize',
  },
});
