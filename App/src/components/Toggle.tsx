import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { COLORS, ROUTES } from "../constants";

export default function ToggleSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
    <Text style={{fontSize:12, paddingRight:10}}>{isEnabled ? 'Activa' : 'Pausada'}</Text>
      <Switch
        trackColor={{ false: "#B3261E", true:COLORS.primary }}
        thumbColor={isEnabled ? "#FFFF" : "#FFFF"}
        ios_backgroundColor="#ffff"
        onValueChange={toggleSwitch}
        value={isEnabled} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    display:'flex',
    flexDirection: 'row',
    marginTop: 15,
    paddingRight:10
  },
});
