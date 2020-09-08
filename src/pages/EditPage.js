import React from "react";

import { connect } from "react-redux";

import ListItem from "../components/EditList/ListItem";

const EditPage = ({users}) => {
    return (
        <div className='main-list'>
            <table className="ui celled table">
                <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Nationality</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((user, i) => <ListItem key={i} user={user}/>)}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = state => ({ users: state.users.users })

export default connect(mapStateToProps)(EditPage);