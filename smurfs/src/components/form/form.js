import React from 'react';
import {addASmurft} from '../../actions/index'
import { connect } from 'react-redux';

class Form extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addASmurft(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input onChange={this.handleChanges} name='name' value={this.state.name} placeholder="name" />
                <input onChange={this.handleChanges} name='age' value={this.state.age} placeholder="age" />
                <input onChange={this.handleChanges} name='height' value={this.state.height} placeholder="height" />
                <button>Submit</button>
            </form>
        )
    }

}

export default connect(null, {addASmurft})(Form);