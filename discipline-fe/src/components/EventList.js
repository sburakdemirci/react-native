import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View,TouchableHighlight, ListView } from 'react-native';

export default class EventList extends Component {
    constructor() {
        super();
       this.state={
           library:['row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2'],
           library1: [],
           clickedEvent:'ss'
       }
       this.dataSource= new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      }  

      //toDo 2 array yap. biri rowData'ları tutsun. diğeri db'deki eventId lerini tutsun. fonksiyon yaz onclick için
      // fonksiyon sonucu diğer forma seçilenin unique id sini gönder. seçilen rowId 3 ise  eventidList[3]'yi gönder 
  

      componentWillReceiveProps() {   
 
      
        var a=this.props.gecenprop
        this.setState({
          library:a
         
        })
      }
      

   

      clickedEventFind(clicked){
        this.props.clickedEventFinder(clicked)

      }
      
      
  render() {
    return (
    
        <View style={{ justifyContent:'center',height:300}}>
        <Text>{this.props.ll}</Text>
                <ListView
                dataSource={this.dataSource.cloneWithRows(this.state.library)}
                style={styles.listViesw}
                renderRow={(rowData, sectionID, rowID) => 
                
              <TouchableHighlight 
              style={{borderColor:'black',backgroundColor:'rgb(26, 198, 255)',marginBottom:15,width:'80%',alignSelf:'center'}}
              onPress={()=>this.clickedEventFind(rowID)}>
              <Text style={{flex:1,fontSize:25, color:'white'}}>{'-  '+rowData}</Text>
                </TouchableHighlight>}
              />
                </View>
    );
  }
}



// skip this line if using Create React Native App