import React from 'react'
import Layout from '@/Components/Layout'
import axios from 'axios';
import { useRouter } from 'next/router';

const UserId = ({ user }) => {
    const router = useRouter();
    return (
        <div>
            <Layout>
                <div className='container'>
                    <div className='d-flex justify-content-between '>
                        <h1><u>User Detail page</u> </h1>
                        <button onClick={() => {router.push('/users')}} className='rounded bg-secondary text-light text-uppercase'>go to back page</button>
                    </div>

                    <table className='table mt-5'>
                        <thead className='border-top'>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>city</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Layout>

        </div>
    )
}

export default UserId;

export async function getServerSideProps(context) {
    
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        return {
            props: {
                user: data
            }
        }
    } catch (error) {
        console.log(error);
    }
}