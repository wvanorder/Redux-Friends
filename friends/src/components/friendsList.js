import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from  'react-router-dom';

import { fetchData, addFriend, deleteFriend, updateFriend } from '../actions';

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: '',
            }
        }
    }
    componentDidMount() {
        this.props.fetchData();
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
                newFriend:{
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e => {
        this.props.addFriend(this.state.newFriend);
        this.setState({
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    deleteFriend = id => {
        this.props.deleteFriend(id);
    }

    updateFriend = (id, newFriend) => {
        this.props.updateFriend(id, newFriend);
        this.setState({
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    
    render() {
        return(
            <div>
                {this.props.friends.map(friend => {
                    return (<div>
                                <h1>{friend.name}</h1>
                                <button onClick={() => this.deleteFriend(friend.id)}>Delete</button>
                                <button onClick={() => this.updateFriend(friend.id, this.state.newFriend)}>Update</button>
                            </div>
                    )
              })}
          <div className="form">
            <form>
                <input placeholder="Friend Name"
                onChange={this.handleChange}
                value={this.state.newFriend.name}
                name="name"
                required = 'Fill Me out'
                />
                <input placeholder ='email'
                onChange={this.handleChange}
                value={this.state.newFriend.email}
                name="email"
                required = 'Fill Me out'
                />
                <input placeholder ='age'
                onChange={this.handleChange}
                value={this.state.newFriend.age}
                name="age"
                required = 'Fill Me out'
                />
                {/* {props.error && <p>{props.error}</p>} */}
            </form>
            <button onClick={this.addFriend}>Add Friend</button>
            {/* <button onClick={props.removeFriend}>Remove Friend</button> */}
            
        </div>
            </div>
        )
    }
};

FriendsList.defaultProps = {
    friends: []
};

const mapStateToProps = state => {
    return{
        friends: state.friends,
        fetchingData: state.fetchingData
    }
};

export default withRouter(
    connect(
        mapStateToProps,
        { fetchData, addFriend, deleteFriend, updateFriend }
    )(FriendsList)
);