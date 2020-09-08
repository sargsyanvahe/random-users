import React from "react";

import { connect } from "react-redux";
import { addNationality } from "../../redux/actions/filterActions";

import { nationalities } from "../../nationalities";

const NatContainer = ({ addNation }) => {

    const onCheckChange = (e) => {
        addNation(e.target.name, e.target.checked)
    };

    return (
        <div className='nat-container'>
            {nationalities.map((nat, i) => (
                <div key={i} className="ui checkbox">
                    <input type="checkbox" onChange={onCheckChange} name={nat}/>
                    <label htmlFor={nat}>{nat}</label>
                </div>
            ))}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addNation: (nat, check) => dispatch(addNationality(nat, check))
});

export default connect(null, mapDispatchToProps)(NatContainer);