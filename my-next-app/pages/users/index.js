import Layout from '@/Components/Layout'
import React from 'react';
import axios from 'axios';
import { useEffect , useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/UsersStyles/users.module.scss';

const Index = () => {
    const [users , setUsers] = useState([]);
    const router = useRouter();

    const baseURL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const getusers = async () => {
            const {data : res} = await axios.get(baseURL);
            setUsers(res);
        }
        getusers();
    },[]);

    return (
        <Layout>
            <div className='container'>
                <div className={styles.main_Header}>
                    <h1><u>All Users</u> </h1>
                    <h3>{users.length}</h3>
                    <button className='rounded bg-secondary text-light text-uppercase'>Add Users</button>
                    <button className='rounded bg-secondary text-light text-uppercase' onClick={() => { router.push('/') }}>go to Home page</button>

                </div>

                <table className='table table-striped table-dark mt-2 rounded'>
                    <thead>
                        <tr>
                            <th className='heading'>User ID</th>
                            <th className='heading'>User's Name</th>
                            <th className='heading'>User's Company Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td onClick={() => { router.push(`/users/${user.id}`) }} style={{ cursor: "pointer" }}>{user.id}</td>
                                <td onClick={() => { router.push(`/users/${user.id}`) }} style={{ cursor: "pointer" }}><u>{user.name}</u></td>
                                <td onClick={() => { router.push(`/users/${user.id}`) }} style={{ cursor: "pointer" }}><b>Comany Name :-</b>{` ${user.company.name}`} <br /> <b>catchPhrase :-</b> {`  ${user.company.catchPhrase}`}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                <style jsx>{`
                    h1{
                        color : blue;
                        font-size : 20px;
                    }
                `}</style>
            </div>

        </Layout>

    )
}

export default Index;

// export async function getStaticProps() {

//     try {
//         const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
//         return {
//             props: {
//                 users: data
//             }
//         }
//     } catch (error) {
//         console.log("error", error);
//     }
// }