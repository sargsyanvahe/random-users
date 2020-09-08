import React from "react";

const ListItem = ({user}) => {
    return (
        <tr>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.nat}</td>
        </tr>
    )
}

export default ListItem;