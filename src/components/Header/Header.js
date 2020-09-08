import React from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import { setSearchValue } from "../../redux/actions";

import './Header.css'

const Header = (props) => {

    const { location: { pathname }, history, onSearchChange, searchValue } = props;

    const onHandlePageChange = () => {
        history.push(pathname === '/main' ? '/edit' : 'main')
    };

    return (
        <div className='header'>
            <button onClick={onHandlePageChange} className="ui button">
                {`Go to ${pathname === '/main' ? 'Edit' : 'Main'} Page`}
            </button>
            {pathname === '/main' && <div className="ui search">
                <div className="ui icon input">
                    <input onChange={({ target }) => onSearchChange(target.value)}
                           className="prompt" type="text"
                           value={searchValue}
                           placeholder="Search"/>
                    <i className="search icon"/>
                </div>
            </div>}
        </div>
    )
};


const mapStateToProps = state => ({ searchValue: state.search })
const mapDispatchToProps = dispatch => ({ onSearchChange: (value) => dispatch(setSearchValue(value)) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));