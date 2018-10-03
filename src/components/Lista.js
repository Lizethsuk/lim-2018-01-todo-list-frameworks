import React, {Component} from 'react';
import './Lista.css'
class Lista extends Component {
    constructor(props) {
        super(props);
        this.id = props.id,
        this.text = props.text,
        this.check= props.check
    }
    handleRemove(id){
        this.props.removeList(id);
    }

    handleCheck(id){
        this.props.checkList(id);
    }

    render() {
        return (
            <div className="Lista">
            <span
            onClick={()=>this.handleRemove(this.id)}
            >            <img src={require('../images/icons8-waste-50.png')} />
            </span>
            <span
            onClick={()=>this.handleCheck(this.id)}
            >            <img src={require('../images/icons8-checkmark-64.png')} />
            </span>
            <p>{this.text}</p>
        </div>
        )
    }
}


export default Lista




// class Lista extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             work: '',
            
//         }
//     }
//     updateWork(e){
//         this.setState({work: e.target.value});
//         console.log(this.state.work);
//     }

//     componentDidMount(){
//         window.firebase.database().ref('Works/').on('value', snap =>{
//             const currenteworks = snap.val();
            
//                 this.setState([{
//                     works: currenteworks
//                 }])
            
//         })
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const newWork = {
//             id: this.state.works.length,
//             text: this.state.work
//         };
//         // list.push(newWork);
//         // this.setState({works: list})
//         window.firebase.database().ref(`Works/${newWork.id}`)
//         .set(newWork);
//         this.setState({work:newWork});
//     }
//     render() {
//         const { works } = this.state;
//         console.log(works);
        
//         const toDo = works.map (work => {
//             return <li key = {work.props.id}>{work.props.text}</li>
//           });  
//         return (
//             <div>
//                 <ul>
//                     {toDo}
//                 </ul>     
//             <form onSubmit= {this.handleSubmit.bind(this)}>
//                 <input 
//                 type="text"
//                 value={this.state.work}
//                 onChange={this.updateWork.bind(this)}
//                 />
//                 <button>
//                     Guarda
//                 </button>    
//             </form>
//             </div>        
//         )
//     }
// }