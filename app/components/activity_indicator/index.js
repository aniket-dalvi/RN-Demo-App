import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const ActivityIndicatorComp = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" animating={true} />
  </View>
);

export default ActivityIndicatorComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})