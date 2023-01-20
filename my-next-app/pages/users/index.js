import Layout from '@/Components/Layout'
import React from 'react';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = ({ users }) => {
    const router = useRouter();
    return (
        <Layout>
            <div className='container'>
                <div className='d-flex justify-content-between '>
                    <h1><u>All Users</u> </h1>
                    <button className='rounded bg-secondary text-light text-uppercase' onClick={() => {router.push('/')}}>go to Home page</button>
                </div> 

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User ID</th>
                            <th>Company Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td onClick={() => { router.push(`/users/${user.id}`) }} style={{ cursor: "pointer" }}>{user.name}</td>
                                <td><b>Comany Name :-</b>{` ${user.company.name}`} <br /> <b>catchPhrase :-</b> {`  ${user.company.catchPhrase}`}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </Layout>

    )
}

export default Index;

export async function getStaticProps() {
    
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        return {
            props: {
                users: data
            }
        }
    } catch (error) {
        console.log("error", error);
    }
}