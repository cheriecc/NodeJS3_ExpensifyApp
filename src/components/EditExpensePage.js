import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const EditExpensePage = () => {
    // console.log(props);
    const { id } = useParams();
    return (
        <div>
            This is Edit page with id of {id}
            {/* <p>{description}</p>
            <p>Amount: {amount}</p>
            <p>Create At: {createAt}</p> */}
        </div>
    )
}

// const mapStateToProps = (state, props) => {
//     const { id } = useParams();
//     return {
//         expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//     };
// };

export default EditExpensePage;