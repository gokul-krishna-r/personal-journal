import React from 'react';
import styles from './journal_item.module.css'
const JournalItem = ({data})=>{
    return(
        <div className={styles.card}>
            <p>{data.id}</p>
            <h1>{data.name}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
        </div>
    );
}


export default JournalItem;