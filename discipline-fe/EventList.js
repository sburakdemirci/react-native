import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View,TouchableHighlight, ListView } from 'react-native';

export default class EventList extends Component {
    constructor() {
        super();
       this.state={
           library:['row 1', 'row 2'],
         
       }
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(this.state.library),
        };
      }  
  render() {
    return (
    
        <View style={{paddingTop:40}}>
        <Text>{this.props.ll}</Text>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => 
              <TouchableHighlight onPress={()=>{console.log("clicked-- data-->>",rowData)}}>
              <Text>{rowData}</Text>
                </TouchableHighlight>}
              />
                </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
