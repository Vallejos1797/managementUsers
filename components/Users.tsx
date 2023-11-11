"use client";
import React from "react";
import {useRouter} from "next/navigation";

function Users({users}:any) {
    const route = useRouter()

    return (<ul className="list-group">
        {
            users.map((user: any) => (
                <li key={user.id} onClick={() => {
                    route.push(`/users/${user.id}`)
                }}
                    className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                >
                    <h5>{user.id} - {user.first_name} {user.last_name}</h5>
                    <h5>Email: {user.email}</h5>
                    <img src={user.avatar} alt={user.email} style={{borderRadius: "50%"}}/>
                </li>)
            )
        }
    </ul>)
}

export default Users
