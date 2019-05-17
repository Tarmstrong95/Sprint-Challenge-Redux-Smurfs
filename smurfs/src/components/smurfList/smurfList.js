import React from 'react';
import {connect} from 'react-redux';


const SmurfList = props => {


    return(
        <div>
            {props.smurfs.length > 0 && props.smurfs.map(smurf => <Smurf smurf={smurf}/>)}
        </div>
    )
}

const mergeStateToProps = state => ({
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs
})

export default connect(mergeStateToProps, {})(SmurfList)