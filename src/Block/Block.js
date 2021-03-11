import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
 constructor(props) {
     super(props);
     this.state = {
        userInfo: []
     }
 }

 async componentDidMount(){
    this.fetchData();
    const fetchedData = await this.fetchData();
    const justData = fetchedData.data;
    console.log('DATA', justData);
    this.setState({ userInfo: justData })
 }

 fetchData(){
     return fetch('http://private-80e5dc-messages36.apiary-mock.com/messages')
     .then(response => response.json())
 }

 render() {
     return(
         <div className ='block'>
             {this.state.userInfo.map(user => {
                 const realName = user.attributes.username.replace
                 (/\./g,' ');
                 const date = new Date(user.attributes.date);
                 return (
                     <section className='user-block'>
                         <section className='left'>
                            <img className='user-pic' src={user.attributes.pic} />
                         </section>
                         <section className='right'>
                            <p className='user-message'>{user.attributes.message}</p>
                            <p className='user-name'>{ realName }</p>
                            <p className='user-agent'>{user.attributes.useragent}</p>
                            <p className='user-date'>{ date.toString() }</p>
                         </section>
                     </section>
                 )
             })}
         </div>
     )
 }
}

export default Block;