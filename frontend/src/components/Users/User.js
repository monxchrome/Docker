import React from 'react';
import css from './user.module.css'

const User = ({users}) => {
    const {name, surname, email, username} = users

    return (
        <div>
            <div className={css.Father}>
                <div className={css.Name}>
                    <h4>{name}</h4>
                </div>
                <div className={css.Surname}>
                    <h4>{surname}</h4>
                </div>
                <div className={css.Username}>
                    <h5>{username}</h5>
                </div>
                <div className={css.Email}>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default User;