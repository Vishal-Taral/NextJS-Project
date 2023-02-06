import React from 'react';
import styles from '../../styles/Addusers/Addusers.module.scss';
import Layout from '@/Components/Layout';

const Addusers = () => {

    const idHandler = (event) => {
        console.log(event.target.value);
    }

    const nameHandler = (event) => {
        console.log(event.target.value);
    }

    const companyHandler = (event) => {
        console.log(event.target.value);
    }

    const catchPhraseHandler = (event) => {
        console.log(event.target.value);
    }


    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.form}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">User Id</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User ID" onChange={idHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">User's Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Name" onChange={nameHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Company Name" onChange={companyHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Company catchPhrase</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Write catchPhrase" onChange={catchPhraseHandler} />
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Addusers;