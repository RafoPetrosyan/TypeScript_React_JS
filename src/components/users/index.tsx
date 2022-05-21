import React, { FC } from 'react';
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import './style.scss';

const UserList: FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user);

    return (
        <div>
            userList
        </div>
    );
};

export default UserList;