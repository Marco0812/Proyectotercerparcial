import React, { useState } from "react";
import { logoutUser } from "../services/auth";

export const Header = ({ isAdmin, setIsAdmin, isAuthenticated, setIsAuthenticated }) => {
    const handleUser = () => {
        setIsAdmin(!isAdmin)
    };

    return (
        <header classname="bg-gray-800 text-white p-4">
            <div classname="container mx-auto  flex justify-between items-center">
                <h1 clasname="text-2x1 font bold">
                    <a href="/">Restaurant</a>
                </h1>
                <nav>
                    <ul classname="flex space-x-4">
                        <li>
                            <button
                                onClick={handleUser}
                                classname="bg-white text-gray-800 px-2 py1 rounded"
                            >
                                {isAdmin ? "Admin" : "User"}
                            </button>
                        </li>
                        {isAuthenticated &&(
                        <li>
                            <button
                                onClick={async () => {
                                    await logoutUser();
                                    setIsAuthenticated(false);
                                }}
                                classname="bg-lightblue hover:bg-gray-600 px-2 py1 rounded"
                            >
                                Logout
                            </button>
                        </li>
                        )} 
                    </ul>
                </nav>
            </div>
        </header> 
    );
};
