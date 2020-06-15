import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import axios from 'axios'

class Addexpense extends Component{
    constructor(props){
        super(props);

        this.state ={
          name: '',
          amount: '',
          description: '',
          owe: 'YOU OWE'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e){
      e.preventDefault();
    
      axios.post('http://localhost:3000/friends', this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        }) 
    }

    changeHandler = e => {
      this.setState({[e.target.name] : e.target.value })
    }

    render(){

      // const { name, amount, description, owe } = this.state
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Friend Transaction
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={this.handleSubmit}>
                <div className="input-form">
                     <input type="text" name="name" placeholder="name" onChange={this.changeHandler}/>
                 </div>
                 <div className="input-form">
                     <input type="number" name="amount" placeholder="$ 0.00" onChange={this.changeHandler}/>
                 </div>
                 <div className="input-form">
                     <input type="text" name="description" placeholder="description" onChange={this.changeHandler} />
                 </div>
                 <div className="input-form">
                 <select value={this.state.owe} name="owe" onChange={this.changeHandler}>
                        <option value="YOU ARE OWED">YOU ARE OWED</option>
                         <option value="YOU OWE">YOU OWE</option>
                 </select>
                 </div>
                 <div className="input-form">
                     <p>Paid by you and Split equally </p>
                     <p>$0.00 /person</p>
                 </div>
                 <div>
                 <button className="btn">Add an image/notes</button>
                 </div>
                 <div>
                 <button type="submit">save</button>
                 </div>
               
             </form>
            
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          );
    }
   
}



// function stringifyFormData(fd) {
//   const data = {};
// 	for (let key of fd.keys()) {
//   	data[key] = fd.get(key);
//   }
//   return JSON.stringify(data, null, 2);
// }

export default Addexpense;


// const Addexpense = () =>{
//     const [modalIsOpen, setModalIsOpen] = useState(false)

//     const submitname = (e) => {
//         e.preventDefault();
      
//         const { name } = this.state;
//         const { onSubmit } = this.props;
      
//         // onSubmit(name);
//       }    

//     //   this.setState({ name: '' });

//         return (
//             <div>
//                 <button className="btn-exp" onClick={() => setModalIsOpen(true)}>Add an Expense</button>
//                 <Modal isOpen={modalIsOpen} onRequestClose={() =>setModalIsOpen(false)}>
//             <h2>Add an Expense</h2>
//             <form onSubmit={this.submitname}>
//                 <div className="input-form">
//                     <input type="text" name="name" placeholder="Friends name" />
//                 </div>
//                 <div className="input-form">
//                     <input type="number" name="amount" placeholder="$ 0.00" />
//                 </div>
//                 <div className="input-form">
//                     <p>Paid by you and Split equally </p>
//                     <p>$0.00 /person</p>
//                 </div>
//                 <div>
//                 <button className="btn">Add an image/notes</button>
//                 </div>
//                 <div>
//                 <button type="submit">save</button><button onClick={() => setModalIsOpen(false)}>close</button>
//                 </div>
               
//             </form>
//             </Modal>
//             </div>
//         )
//     }


// export default Addexpense
