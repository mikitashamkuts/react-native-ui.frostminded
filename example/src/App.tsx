import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'react-native-ui.frostminded';

export default function App() {
  return (
    <View style={styles.container}>
      <Text />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
