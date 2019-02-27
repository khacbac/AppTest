/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ART } from "react-native";
import PieChart from "react-native-pie-chart";
const { Surface, Group, Path, Shape } = ART;

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  handleCover() {
    if (!this.props.doughnut) return;
    const radius = this.getRadius();
    const coverRadius = this.props.chart_wh * this.props.coverRadius;
    const coverPath = new Path()
      .moveTo(radius, radius - coverRadius / 2)
      .arc(0, coverRadius, 25)
      .arc(0, -coverRadius, 25)
      .close();
    return <Shape d={coverPath} fill={"red"} />;
  }

  render() {
    const chart_wh = 250;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50", "#FF9800"];
    return (
      <View style={styles.container}>
        <Surface>{this.handleCover()}</Surface>
        <Text style={styles.title}>Basic</Text>
        <PieChart chart_wh={chart_wh} series={series} sliceColor={sliceColor} />
        <Text style={styles.title}>Doughnut</Text>
        <View
          style={{
            // backgroundColor: "red",
            width: chart_wh,
            height: chart_wh,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={"#FFF"}
          />
          <View
            style={{
              width: chart_wh / 1.5,
              height: chart_wh / 1.5,
              borderRadius: chart_wh / 3,
              position: "absolute",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>Tổng số</Text>
            <Text
              style={{
                color: "blue",
                fontSize: 18
              }}
            >
              236 công việc
            </Text>
            <Text>trong 09/2018</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
