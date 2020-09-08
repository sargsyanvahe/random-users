import React from "react";
import { connect } from "react-redux";
import { openInfoModal } from "../../redux/actions/usersActions";

const ListItem = ({ user, openModal }) => {
    return (
        <tr style={{cursor: 'pointer'}} onClick={() => openModal(user)}>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.nat}</td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({ openModal: user => dispatch(openInfoModal(user)) })

export default connect(null, mapDispatchToProps)(ListItem);