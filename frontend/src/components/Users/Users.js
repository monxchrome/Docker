import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/usersService";
import User from "./User";

const Users = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUser(data.data))
    }, [setUser])

    return (
        <div>
            {user.map(item => <User key={item._id} users={item}/>)}
        </div>
    );
};

export default Users;