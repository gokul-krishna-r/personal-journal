import React, { useState } from 'react';
import styles from './text_box.module.css';

const TextBox = ()=>{

    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');

    return(
        <div className={styles.container}>
            <input type="text" placeholder="Title" value={title} onChange={e=>{setTitle(e.target.value);console.log(title)}}/>
            <span className={styles.line}></span>
            <textarea value={body} onChange={e=>{setBody(e.target.value)}}/>
            <br></br>
            <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
            </button>
        </div>
    );


    }


export default TextBox;