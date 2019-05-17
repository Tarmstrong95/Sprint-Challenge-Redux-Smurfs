import React from 'react';
import {connect} from 'react-redux';


const SmurfList = props => {


    return(
        <div>
            {props.smurfs.length > 0 && props.smurfs.map(smurf => (
                <p>smurf.name</p>
            ))}
        </div>
    )
}

const mergeStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mergeStateToProps, {})(SmurfList)