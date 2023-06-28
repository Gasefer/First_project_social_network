import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU' alt=''>
      </img>
      {props.message}
      <div><span>likes: {props.likesCount}
      </span></div>
    </div>
  )
}

export default Post;