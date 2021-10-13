import React,{ useState,useEffect } from 'react'

import './style.css'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  //incorporating local storage 
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
    
  }
  




  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  
  eraseall(){
    const list = [...this.state.list];
    // filter out the item being deleted
 

    this.setState({ list: [] });
  };
  
  render() {
    return (
      <div>

      <div className="container">
      <div className="row d-flex justify-content-center ">
      
        <div className="col-md-4">
         <div className="card ">
           
           <div className="orange"></div>
           <div className="meio">
             
           <h1 className="text-center title-card">To-do</h1>
           <p className="text-center subtitle-card">Take a breath.<br/>Start doing.</p>
           
           <div>

  <div
   
  >
<div className="row">
  <div className="inputs">
    <input
      type="text"
      placeholder="Add new here..."
      value={this.state.newItem}
      onChange={e => this.updateInput("newItem", e.target.value)}
      className="form-control add"
    /> 
    </div>
    <button
    type="submit"
    className="btn-add add"
    on
    onClick={() => this.addItem()}
    disabled={!this.state.newItem.length}
    >
     +
  </button>
  </div>
 
      {this.state.list.map(item => {
        return (
          <div key={item.id}>

            
            <div class="form-check">
        <input class="form-check-input checkbox-orange" type="checkbox" id={item.id} />
        <label class="form-check-label" for={item.id}>
        {item.value}
        </label>
        <a className="delete" onClick={() => this.deleteItem(item.id)}>delete</a>

        </div>
      </div>
          
        );
      })}
  </div>
</div>
         
         </div>
      
         <div className="text-center">
         <button className="btn-card" onClick={() => this.eraseall()}>erase all</button>
      
         </div>
      
      
        </div>
        </div>
        <div className="col-md-4">
         <div className="card ">
           <div className="green"></div>
           <div className="meio">
           <h1 className="text-center title-card">Done</h1>
           <p className="text-center subtitle-card-1">Congratulions!</p>
           <p className="text-center subtitle-card-2">You have done 5 tasks</p>
           <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckDefault" checked/>
        <label class="form-check-label" for="flexCheckDefault">
        Get FTP credentials
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
        <label class="form-check-label " for="flexCheckChecked">
        Home Page Design 
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
        <label class="form-check-label "git  for="flexCheckChecked">
        E-mail John about the deadline
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
        <label class="form-check-label " for="flexCheckChecked">
        Create a Google Drive folder
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
        <label class="form-check-label " for="flexCheckChecked">
        Send a gift to the client 
        </label>
      </div>
         </div>
      
         <div className="text-center">
         <button className="btn-card">erase all</button>
      
         </div>
      
      
        </div>
        </div>
      
      
      
      </div>
      </div>
      </div>
    );
  }
}



