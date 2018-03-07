import React, { Component } from 'react';
import {
  AppRegistry,
  // StyleSheet,
  Button,
  Text,
  TextInput,
  View } from 'react-native';
export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      vol: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#3366' }}>
        <View style={{ backgroundColor: '#363636' }}>
           <Text style={{ padding: 25, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>
        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />
            <Button
              onPress={() => this.setState({
                vol: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
        <View style={{ margin: 20, backgroundColor: '#363636' }}>
          <Text style={{ padding: 10, fontSize: 20, color: 'white' }} >
              Panjang{'\t'}= {this.state.panjang} {'\n'}
              Lebar{'\t\t\t'}= {this.state.lebar} {'\n'}
              Tinggi{'\t\t'}= {this.state.tinggi}{'\n'}
              Vol{'\t\t\t\t'}= {this.state.vol}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
