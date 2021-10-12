import React from 'react';
import JournalItem from './journal_item';
import styles from './journal_list.module.css';
import SearchBox from './search_box';

const JournalList =({journals})=>{
    return(
        <div className={styles.container}>
            <SearchBox/>
            <br></br>
            {journals.map((journal=>{
                const{id,name,age,image}=journal;
                return(
                    <JournalItem data={journal}/>
                );
            }))}
        </div>
    );
}

export default JournalList;