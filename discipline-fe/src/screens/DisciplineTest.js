import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TestQuestion from '../components/TestQuestion'
import axios from 'axios'
import { REACT_APP_API_HOST_URL } from 'react-native-dotenv'
import {Actions} from 'react-native-router-flux'


export default class DisciplineTest extends Component {

  state={
    question:[],
    answer_1:[],
    answer_2:[],
    answer_3:[],
    answer_4:[],
    answer_5:[],
    totalPoints:0,

    questionNumber:1
  }
  getAnswer(clicked){
    var a = this.state.questionNumber;
    a++;
    this.setState({
      
      questionNumber:a
    })
  
}

componentDidUpdate()
{

}


  componentWillMount(){
    

    axios.get(REACT_APP_API_HOST_URL+'/test/getAllQuestions')
       .then(req => {
         var questionArr=[]
         var answer_1_arr=[]
         var answer_2_arr=[]
         var answer_3_arr=[]
         var answer_4_arr=[]
         var answer_5_arr=[]
          req.data.map((data) =>{
            questionArr.push(data.question_string)
            answer_1_arr.push(data.answer_1)
            answer_2_arr.push(data.answer_2)
            answer_3_arr.push(data.answer_3)
            answer_4_arr.push(data.answer_4)
            answer_5_arr.push(data.answer_5)           


          })
          this.setState({
            answer_1:answer_1_arr,
            answer_2:answer_2_arr,
            answer_3:answer_3_arr,
            answer_4:answer_4_arr,
            answer_5:answer_5_arr,
            question:questionArr
          })
          console.log(answer_1_arr)
        
        
       })   



  }

  goToLogin()
  {
    Actions.login()
  }

  
  
  render() {

      if(this.state.questionNumber <=this.state.question.length)
      {
        return (
    
          <TestQuestion
           question={this.state.question[this.state.questionNumber-1]}
             questionAnsweredChange={this.getAnswer.bind(this)}
             answer_1={this.state.answer_1[this.state.questionNumber-1]}
             answer_2={this.state.answer_2[this.state.questionNumber-1]}
             answer_3={this.state.answer_3[this.state.questionNumber-1]}
             answer_4={this.state.answer_4[this.state.questionNumber-1]}
             answer_5={this.state.answer_5[this.state.questionNumber-1]}
             
             />
          
        )
      
      }
      else{ 
        return(
          <View>
            {this.goToLogin()}
          </View>
  
        )
      }
   
  
  }
}
