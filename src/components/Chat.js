import React from 'react';
import Logout from './logout';
import { isAuth } from './helper';
import { Navigate } from 'react-router-dom';
import Chatroom from './ChatRoom';
import TaskBoard from './TaskBorad';


export default function Chat() {
    const isAuthenticated = isAuth();

    if (isAuthenticated) {
        // Get the user's email from local storage
        const user = JSON.parse(localStorage.getItem('user'));
        const userEmail = user ? user.email : 'user1'; // Provide a default if user email is not available

        return (
            <div className="flex flex-col h-screen">
                <div>
                    <Logout />
                </div>
                <div className="flex flex-grow bg-white overflow-y-auto flex-wrap" style={{ overflowY: 'auto' }}>
                    <div className="flex flex-col px-4 py-2 border-b border-gray-200 w-full sm:w-1/2 md:w-1/4">
                        <Chatroom />
                    </div>
                    <div className="flex flex-col px-4 py-2 border-b border-gray-200 w-full sm:w-1/2 md:w-3/4">
                        <TaskBoard />
                    </div>
                </div>
                <div className="flex flex-row justify-end items-center px-4 py-2 bg-gray-200">
                    <p className="text-sm text-gray-500">Logged in as {userEmail}</p>
                </div>
            </div>

        );
    } else {
        return <Navigate to="/" />;
    }
}
