import React, { Component} from 'react'
import Menu from "../core/Menu"
import Addexpense from './Addexpense';
import {Button, ButtonToolbar} from 'react-bootstrap'




class UserDashBoard extends Component {

  constructor(props){
    super(props);

    this.state = {
      friends: [],
      owes: [],
      owed: [],
      isLoaded: false,
      addModalShow: false,
      owesamount:[]
    };
  }
   

  async componentDidMount(){
    await fetch('http://localhost:3000/friends')
    .then(async res => await res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        friends: json,
      })
    });

    await fetch('http://localhost:3000/friends?owe=YOU OWE')
    .then(async res => await res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        owed: json,
      })
    });

    await fetch('http://localhost:3000/friends?owe=YOU ARE OWED')
    .then(async res => await res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        owes: json,
      })
    });
    
  }
 

  render(){

    var {  friends } = this.state;

    var {  owes } = this.state;

    var {  owed } = this.state;
    
    let addModalClose = () => this.setState({addModalShow:false});

    const oweAmount = owes.map(amounts => amounts.amount).reduce((total, amnt) => Number(total) +Number(amnt), 0);

    const owedAmount = owed.map(amounts => amounts.amount).reduce((total, amnt) => Number(total) +Number(amnt), 0);

    const total = oweAmount - owedAmount;

  return (
    <>
      <Menu />
      <div>
          <ul className="dash">
          <li><ButtonToolbar>
               <Button
                    className="btn-exp" 
                    variant='primary' 
                    onClick={()=> this.setState({addModalShow: true})}>Add Expense</Button>
                    <Addexpense show={this.state.addModalShow} 
                                onHide={addModalClose} 
                                
                    />
               </ButtonToolbar>
          </li>
          <li><button className="btn-stl">Settle Up</button></li>
          </ul>   

              
              
      <div className="toto">
            <div><div>Total Balance</div><div>${total}</div></div>
            <div><div>You are Owed</div><div>${oweAmount}</div></div>
            <div><div>You Owe</div><div>${owedAmount}</div></div>
      </div>

      <div className="toto1">
            <div>
                <h2>Friends List</h2>
            <div>
                {friends.map(friend => (
                  <div><ButtonToolbar>
                          <Button className="frndbutton" key={friend.id}>{friend.name} </Button>
                        </ButtonToolbar>
                  </div>
                ))}
            </div>
            </div>
                <div id="tom"><div><strong>Friends Who Owe You</strong></div>
                <div>
                {owes.map(friend => (
                  <div>
                        {friend.name} owes {friend.amount} 
                  </div>
                ))}
                </div>
                </div>
                <div><div><strong>Friends whom You owe</strong></div>
                <div>
                {owed.map(friend => (
                  <div>
                         You owe {friend.name} {friend.amount}
                          
                  </div>
                ))}
                </div>
                </div>
      </div>

               
      </div>
  </>
    
  );
}
}


export default UserDashBoard;

