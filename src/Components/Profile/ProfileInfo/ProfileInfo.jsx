import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    {console.log(props)} 
    {JSON.stringify(props)}
    return (
        <div>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' className={s.imgOnProfile}>
            </img>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo