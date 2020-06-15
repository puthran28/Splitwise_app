// import React, { Component, useState } from 'react'
// import {Modal, Button, Row, Col,Form} from 'react-bootstrap'


// class FriendTrans extends Component{
//     constructor(props){
//         super(props);

//         // this.state ={
//         //   name: ''
//         // };

//         this.handleSubmit = this.handleSubmit.bind(this);
        
//     }

//     handleSubmit(e){
//       e.preventDefault();
//       const data = new FormData(e.target);

//       fetch('http://localhost:3000/friends', {
//         method:'POST',
//         body: data,
//       });
//       console.log(data)
//     }

//     render() {
//         return (
//             <div>
//                 <Modal
//             {...this.props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//           >
//             <Modal.Header closeButton>
//               <Modal.Title id="contained-modal-title-vcenter">
//                 Add Friend Transaction
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//             <form onSubmit={this.submitName}>
//             <div className="input-form">
//                      <input type="text" name="id" placeholder="id" />
//                  </div>
//                 <div className="input-form">
//                      <input type="text" name="name" placeholder="name" />
//                  </div>
//                  <div className="input-form">
//                      <input type="number" name="amount" placeholder="$ 0.00" />
//                  </div>
//                  <div className="input-form">
//                      <input type="text" name="description" placeholder="description" />
//                  </div>
//                  <div className="input-form">
//                      <label for="trans" name="owe">Who Owe</label>
//                  </div>
//                  <div>
//                     <select id="country" name="country">
//                         <option value="australia">YOU ARE OWED</option>
//                         <option value="canada">YOU OWE</option>
//                     </select>
//                 </div>
//                  <div>
//                  <button className="btn">Add an image/notes</button>
//                  </div>
//                  <div>
//                  <button type="submit">save</button>
//                  </div>
               
//              </form>
              
//             </Modal.Body>
//             <Modal.Footer>
//               <Button onClick={this.props.onHide}>Close</Button>
//             </Modal.Footer>
//           </Modal>
//             </div>
//         )
//     }
// }

// export default FriendTrans
