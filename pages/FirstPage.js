// React Native Tab
// https://aboutreact.com/react-native-tab/

import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Button,
    Image
} from 'react-native';

const FirstPage = ({ navigation }) => {
    const [count, setCount] = useState("");
    const [mydate, setMydate] = useState("");
    const [day, setDay] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        //setCount(String(date).split(' '));
        let day = date.getDate();
        setDay(day)
        // console.log('day:', day);
        // setMydate(String(count[2]).split('-'));
        // setDay(mydate[0]);
        // console.warn("date is ", day);
        hideDatePicker();
    };

    const renderCases = (day) => {
        if (day <= 7) {
            switch (day) {
                case 1:
                    return <Text> 10</Text>
                case 2:
                    return <Text> 20</Text>
                case 3:
                    return <Text> 30</Text>
                case 4:
                    return <Text> 40</Text>
                case 5:
                    return <Text> 50</Text>
                case 6:
                    return <Text> 60</Text>
                case 7:
                    return <Text> 70</Text>
                default:
                    return <Text> 444,398</Text>
            }
        }
        else {
            return <Text>N/A</Text>
        }
    }
    const renderDeaths = (day) => {
        if (day <= 7) {
            switch (day) {
                case 1:
                    return <Text> 5</Text>
                case 2:
                    return <Text> 6</Text>
                case 3:
                    return <Text> 7</Text>
                case 4:
                    return <Text> 8</Text>
                case 5:
                    return <Text> 9</Text>
                case 6:
                    return <Text> 11</Text>
                case 7:
                    return <Text> 1</Text>
                default:
                    return <Text> 1,451</Text>
            }
        }
        else {
            return <Text>N/A</Text>
        }
    }
    const renderRecover = (day) => {
        if (day <= 7) {
            switch (day) {
                case 1:
                    return <Text> 20</Text>
                case 2:
                    return <Text> 12</Text>
                case 3:
                    return <Text> 7</Text>
                case 4:
                    return <Text> 23</Text>
                case 5:
                    return <Text> 8</Text>
                case 6:
                    return <Text> 13</Text>
                case 7:
                    return <Text> 44</Text>
                default:
                    return <Text> 427,188</Text>
            }
        }
        else {
            return <Text>N/A</Text>
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',

                    }}>
                    <Text
                        style={styles.headerText}>
                        UNITED ARAB EMIRATES
                     </Text>
                    <Text style={styles.casesText}>
                        Corona Cases
                    </Text>
                    <Text style={styles.cases}>
                        {
                            renderCases(day)

                        }


                    </Text>
                    <Text style={styles.deathsText}>
                        Deaths
                    </Text>
                    <Text style={styles.deaths}>
                       {
                           renderDeaths(day)
                       }
                    </Text>
                    <Text style={styles.recovery}>
                        Recovered
                    </Text>
                    <Text style={styles.recovered}>
                        {
                            renderRecover(day)
                        }
                    </Text>
                    <Text
                     style= {styles.date}
                    > Data available from </Text>
                    <Text
                     style = {styles.dateRange}
                    > 01-Mar-2021 to 07 -Mar-2021 </Text>
                    <Button 
                     style = {styles.dateButton}
                    title="Select Date" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={() => hideDatePicker}
                    />
                    
                </View>

            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    dateButton:{
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20,
        marginBottom: 16
    },
    casesText:
    {
        fontSize: 22
    },
    cases: {
        marginTop: 5,
        fontSize: 30,
        color: 'grey',
    },
    deaths: {
        marginTop: 5,
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold'
    },
    deathsText: {
        fontSize: 22,
        marginTop: 20,
    },
    recovery: {
        fontSize: 22,
        marginTop: 20,
    },
    recovered: {
        marginTop: 5,
        fontSize: 30,
        color: 'green',
        fontWeight: 'bold'
    },
    date: {
        marginTop: 15,
        fontSize: 25,
        
        fontWeight: 'bold'
    },
    dateRange: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 20,
    }


});
export default FirstPage;