import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../actions';

class LogIn extends React.Component {
    state={
        credentials: {
            username:'',
            password:'',
        }
    };

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
        .then(res => {
            if(res) {
                this.props.history.push('/friendlies');
            }
        });
    };

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <button>
                        {this.props.loggingIn ? (
                            <Loader type="Rings" color="black" height='10' width='30' />
                        ) : (
                            'Log In'
                        )}
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.loggingIn
});

export default connect(
    mapStateToProps,
    { login }
)(LogIn);