// React Native Tab
// https://aboutreact.com/react-native-tab/
import * as React from 'react';
import { YAxis, LineChart, Grid, StackedBarChart } from 'react-native-svg-charts'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button
} from 'react-native';
import {

  BarChart,

} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: 'black',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0,
  color: (opacity = 100) => `rgba(0, 0, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.6,
  useShadowColorFromDataset: false // optional
};
const SecondPage = ({ navigation }) => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  const contentInset = { top: 20, bottom0: 20 }
  
 

  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  const printHTML=()=> {
     RNPrint.print({
      html: '<center><h1>United Arab Emirates</h1><h2>Corona Cases</h2><img src="https://images.khaleejtimes.com/storyimage/KT/20201017/ARTICLE/201019098/AR/0/AR-201019098.jpg&NCS_modified=20201018121935&exif=.jpg" ></center>'
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 5 }}>
        {/* <View
          style={{
            flex: 1,
            alignItems: 'center',

          }}>
*/}
          <TouchableOpacity
            style={styles.button}
            onPress={
              printHTML
            }>
            <Text>Print Report</Text>
          </TouchableOpacity>
        
        
        <Text style={styles.cases}>
          Total Corona Cases
         
         </Text>
        <View style={{ height: 350, flexDirection: 'row' }}>
          <BarChart

            data={data1}
            width={screenWidth}
            height={330}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />

        </View>

        <Text style={styles.cases}>
          Recovery Rates
        </Text>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
            data={data}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={(value) => `${value}`}
          />
          <LineChart
            style={{ flex: 1, marginLeft: 3 }}
            data={data}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={contentInset}
          >
            <Grid />
          </LineChart>
        
        </View>

        


      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100,
    marginTop: 16,
    marginLeft: 280
  },
  cases: {

    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    

  },
});
export default SecondPage;