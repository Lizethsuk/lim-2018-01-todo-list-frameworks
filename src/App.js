import React, { Component } from 'react';
// import Item from './components/Item';
import firebase from 'firebase';
import {DB_config} from './config/config';
import 'firebase/database';
import Lista from './components/Lista';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      works: [

      ]
    };
    this.app = firebase.initializeApp(DB_config);
    this.db= this.app.database().ref().child('Works');
    this.addWork= this.addWork.bind(this);
    this.removeList = this.removeList.bind(this);
    this.checkList = this.checkList.bind(this)
  }

  componentDidMount(){
    const { works } = this. state;
    this.db.on('child_added', snap =>{
        works.push({
          id: snap.key,
        text: snap.val().text,
        check: 0
        })
        // console.log(check)
        this.setState({works});
    })
    this.db.on('child_removed', snap =>{
      for(let i=0; i<works.length; i++){
        if(works[i].id===snap.key){
          works.splice(i,1)
        }
      }
      this.setState({works})
    })

    this.db.on('child_changed', snap =>{
      for(let i=0; i<works.length; i++){
        if(works[i].id=== snap.key){
          this.setState({works})
        }
      }
    })

    // window.firebase.database().ref('Works/').on('value', snap =>{
    //     const currenteworks = snap.val();
        
    //         this.setState([{
    //             works: currenteworks
    //         }])
        
    // })
}

checkList(work){
  const updateList ={};
  console.log(`/${work}/text`)
  updateList[`/${work}/text`] =`tarea lista`;
  this.db.update(updateList)
  alert('Listo');
  window.location.reload(true);
}

removeList(id) {
  this.db.child(id).remove();
}


  addWork(work) {
 
    
    this.db.push().set({text: work, 
    check:0});
    
  }



  render() {
    return (
      <div className="listContainer">
        <div className="listHeader">
          <h1>Lista de Tareas!!!</h1>
        </div>
          
        <div className="listForm">
          <Form addWork={this.addWork}/>
        </div>
        <div className="listBody">
          <ul>
            {
              this.state.works.map(work => {
                return (
                  <Lista
                    text={work.text}
                    id={work.id}
                    key={work.id}
                    removeList={this.removeList}
                    checkList={this.checkList}
                  />
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

// _remove(position){
//   let { data } = this.state;

//   let newData = [
//     ...data.slice(0, position),
//     ...data.slice(position + 1),
//   ]

//   this.setState({ data : newData });

// }

// _add(){
//   let { data } = this.state;
//   let newData = [
//     ...data,
//     {
//       image : "papas.png",
//       name  : "Papas a la francesa",
//       portion : "140g",
//       price   : Math.floor(Math.random() * 20) 
//     }
//   ]
//   this.setState({ data : newData });
// }

// _getTotal(){
//   return _.sumBy(this.state.data, function(o) { return o.price; });;
// }





export default App;