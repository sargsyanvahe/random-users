import React, { useEffect } from "react";

import './Modal.css'
import { connect } from "react-redux";
import { closeInfoModal } from "../../redux/actions/usersActions";

const Modal = ({ user,closeModal }) => {


    const onOutSideModalClick = (e) => {
        if(e.target !== e.currentTarget) return;
        closeModal()
    }

    useEffect(()=> {
        window.document.body.style.overflow = 'hidden';
        return () => {
            window.document.body.style.overflow = 'scroll'
        }
    },[]);

    return (
        <div onClick={onOutSideModalClick} className='modal-container'>
            <div className="ui modal">
                <img src={user.picture.large} alt="not found"/>
                <h2>{`${user.name.first} ${user.name.last}`}</h2>
                <h3>{`city: ${user.location.city} , state: ${user.location.state}`}</h3>
                <h3>{`country: ${user.location.country} , postcode: ${user.location.postcode}`}</h3>
                <button onClick={closeModal} className="ui secondary button">
                    Close
                </button>
            </div>

        </div>
    )
};

const mapDispatchToProps = dispatch => ({ closeModal: () => dispatch(closeInfoModal) })

export default connect(null,mapDispatchToProps)(Modal);