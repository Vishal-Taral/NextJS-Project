import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/Components/Layout';

const ErrorMassage = () => {
    const router = useRouter();
    return (
        <Layout>
            <div>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ color: "red" }}><ul>404 ERROR</ul> </h1>
                    <h3>this page is not available </h3>
                    <p>please click on button to go Home page</p>
                    <button onClick={() => { router.push('/') }} style={{ backgroundColor: "pink", borderRadius: "6px", padding: "0.5rem" }}>Click Me</button>
                </div>
            </div>
        </Layout>

    )
}

export default ErrorMassage