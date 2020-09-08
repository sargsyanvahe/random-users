import React, { useCallback, useEffect } from "react";

import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/usersActions";

import ListItem from "../components/MainList/ListItem";
import Loader from "../components/MainList/Loader";
import NatContainer from "../components/MainList/NatContainer";

import '../components/MainList/MainList.css'

const MainPage = ({ loading, page, fetchUsers, users, searchValue, selectedNations }) => {

    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && !loading) {
            console.log(page + 1);
            fetchUsers(page + 1)
        }
    },[fetchUsers,loading,page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        if (page === 1) fetchUsers(page);
    }, [page,fetchUsers]);

    const filtered = users.filter(user => {

        const searchCheck = user.name.first.toLowerCase().includes(searchValue.toLowerCase()) || user.name.last.toLowerCase().includes(searchValue.toLowerCase())
        let natFilter;

        if (!selectedNations.length) {
            natFilter = true
        } else {
            natFilter = selectedNations.includes(user.nat);
        }

        return searchCheck && natFilter;

    });


    return (
        <div className='main-list'>
            <NatContainer/>
            <table className="ui celled table">
                <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Nationality</th>
                </tr>
                </thead>
                <tbody>
                {filtered && filtered.map((user, i) => <ListItem key={i} user={user}/>)}
                </tbody>
            </table>
            {loading && <Loader/>}
        </div>
    )

};

const mapDispatchToProps = dispatch => ({
    fetchUsers: (page) => dispatch(fetchUsers(page))
});
const mapStateToProps = state => {
    return {
        users: state.users.users,
        loading: state.users.loading,
        page: state.users.page,
        searchValue: state.filter.searchValue,
        selectedNations: state.filter.nations
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);