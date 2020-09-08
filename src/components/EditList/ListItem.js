import React from "react";

import { connect } from "react-redux";
import { changeNation } from "../../redux/actions/usersActions";

import { nationalities } from "../../nationalities";

const ListItem = ({ user,changeNation }) => {

    const onNatChange = (e) => {
        const {value} = e.target;
        changeNation(user.email,value);
    };

    return (
        <tr>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>
                <select onChange={onNatChange} defaultValue={user.nat} className="ui dropdown">
                    {nationalities.map((nat, i) => <option key={i} value={nat}>{nat}</option>)}
                </select>
            </td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({changeNation: (mail,nat)=> dispatch(changeNation(mail,nat))})

export default connect(null,mapDispatchToProps)(ListItem);