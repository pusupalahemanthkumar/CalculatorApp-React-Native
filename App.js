// Importing Required Files And Packages Here.
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// Defining App Component Here.
export default class App extends Component {
  state = {
    currentResult: 0,
    prevResult: 0,
    enterdInput: "0",
    calDescription: "",
  };
  // Utility Methods
  add = () => {
    const result = this.state.currentResult + +this.state.enterdInput;
    const calDescription = `${this.state.currentResult} + ${this.state.enterdInput}`;
    this.setState({
      prevResult: this.state.currentResult,
      currentResult: result,
      calDescription: calDescription,
    });
  };
  sub = () => {
    const result = this.state.currentResult - +this.state.enterdInput;
    const calDescription = `${this.state.currentResult} - ${this.state.enterdInput}`;
    this.setState({
      prevResult: this.state.currentResult,
      currentResult: result,
      calDescription: calDescription,
    });
  };
  mul = () => {
    const result = this.state.currentResult * +this.state.enterdInput;
    const calDescription = `${this.state.currentResult} * ${this.state.enterdInput}`;
    this.setState({
      prevResult: this.state.currentResult,
      currentResult: result,
      calDescription: calDescription,
    });
  };
  div = () => {
    const result = this.state.currentResult / +this.state.enterdInput;
    const calDescription = `${this.state.currentResult} / ${this.state.enterdInput}`;
    this.setState({
      prevResult: this.state.currentResult,
      currentResult: result,
      calDescription: calDescription,
    });
  };
  resetStateHandler=()=>{
    this.setState({
      currentResult: 0,
      prevResult: 0,
      enterdInput: "0",
      calDescription: "",
    })
  }

  render() {
    return (
      <View style={styles.Screen}>
        <Text style={styles.mainHeading}>Calculator</Text>
        <View>
          <TextInput
            style={styles.Input}
            placeholder="Enter Number"
            value={this.state.enterdInput}
            onChangeText={(inputNumber) => {
              console.log(inputNumber);
              this.setState({ enterdInput: inputNumber });
            }}
            keyboardType={"numeric"}
          />
        </View>
        <View style={styles.Controls}>
          <Button title="+" style={styles.Btn} onPress={this.add} />
          <Button title="-" style={styles.Btn} onPress={this.sub} />
          <Button title="*" style={styles.Btn} onPress={this.mul} />
          <Button title="/" style={styles.Btn} onPress={this.div} />
        </View>
        <View style={styles.Output}>
          <Text style={styles.mHeading}>
            Result : {this.state.currentResult}
          </Text>
          <Text style={styles.sHeading}>Calculation :</Text>
          <Text>{this.state.calDescription? this.state.calDescription : 0}</Text>
        </View>
        <View style={styles.ResetContainer}>
           <Button style={styles.BtnReset} title="Reset" onPress={this.resetStateHandler}/>
        </View>
      </View>
    );
  }
}
// Defining Styles Here.
const styles = StyleSheet.create({
  Screen: {
    padding: 30,
    paddingTop: 60,
  },
  mainHeading: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 30,
    color:"#333"
  },
  mHeading: {
    fontSize: 25,
    marginBottom: 30,
  },
  sHeading: {
    fontSize: 20,
    marginBottom: 10,
  },
  Input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 20,
  },
  Controls: {
    marginTop: 50,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Output: {
    backgroundColor: "#f4f4f4",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 80,
    padding: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ResetContainer:{
    marginTop: 20,
    padding: 20
  }
});
