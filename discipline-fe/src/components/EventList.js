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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(this.state.library),
        };
      }  

      //toDo 2 array yap. biri rowData'ları tutsun. diğeri db'deki eventId lerini tutsun. fonksiyon yaz onclick için
      // fonksiyon sonucu diğer forma seçilenin unique id sini gönder. seçilen rowId 3 ise  eventidList[3]'yi gönder 
      componentWillMount() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var a=this.props.gecenprop
        this.setState({
          library:a,
          dataSource:ds.cloneWithRows(a)
         
        })
      //  console.log(this.state.library)
      }

      componentWillReceiveProps() {
        
      
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var a=this.props.gecenprop
        this.setState({
          library:a,
          dataSource:ds.cloneWithRows(a)
         
        })
      }
      

      componentDidMount() {
        
      //  console.log(this.state.library)
       
      }

      clickedEventFind(clicked){
        this.props.clickedEventFinder(clicked)

      }
      
      
  render() {
    return (
    
        <View style={{ justifyContent:'center',height:300}}>
        <Text>{this.props.ll}</Text>
                <ListView
                dataSource={this.state.dataSource}
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