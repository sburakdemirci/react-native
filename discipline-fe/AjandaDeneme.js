import React, { Component } from 'react';
import moment from 'moment';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
 
class AjandaDeneme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    let today = moment();
    let day = today.clone().startOf('month');
    let customDatesStyles = [];
  
     
     
      customDatesStyles.push({
        date:"2019-03-01T00:01:00.000Z",
        // Random colors
        style: {backgroundColor: 'blue'},
        textStyle: {color: 'black'}, // sets the font color
        containerStyle: [], // extra styling for day container
        
      });
     
    
    return (
      <View style={styles.container}>
        <CalendarPicker

      
         selectedDayColor="black"
         weekdays={['Pzt', 'Sal', 'Çrş', 'Perş', 'Cum', 'Cts', 'Pzr']}
         months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
         previousTitle="Anterior"
          onDateChange={this.onDateChange}
          customDatesStyles={customDatesStyles}
        />
 
        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}
export default AjandaDeneme;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});