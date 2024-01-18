import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './WaitingList.css'

function WaitingList() {

    const [users , setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://zemech-garima-singhs-projects.vercel.app/api/waitingList')
        .then(res => {
            console.log(res.data);
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    } , [])

    const filteredUsers = users.filter(function(user){
        return (new Date(user.slot_allot_end).getTime() >= new Date().getTime() && new Date(user.slot_allot_end).getDate() >= new Date().getDate());
    });

  return (
    <div className='waitlist'>
        <table className='waitingList'>
            <caption class="top">
                Bookings
            </caption>
            <thead className="wait_list_head">
                <tr>
                    <th>#</th>
                    <th>Names</th>
                    <th>Slots</th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map((user,index) => (
                    <tr>
                        <th>{index+1}</th>
                        <td>{user.fName} {user.lName}</td>
                        <td><strong>{new Date(user.slot_allot).toLocaleTimeString()}&nbsp;&nbsp; -  &nbsp;&nbsp;{new Date(user.slot_allot_end).toLocaleTimeString()}</strong></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default WaitingList
