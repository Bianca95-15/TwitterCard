
import { useState } from "react"
export function TwitterFollowCard({userName,children}){

    const [ isFollowing, setIsFollowwing ] =useState(false)

    const text = isFollowing ? "siguiendo" : "seguir"
    const buttonclassName= isFollowing
    ?"tw-followCard-button is-following"
    : "tw-followCard-button"

    const handleClick =() =>{
        setIsFollowwing(!isFollowing)
    }
    return (
        
    <>
    <article className='tw-followCard'>
        <header className='tw-followwCard-header'>
        <img
            className="tw-followCard-avatar"
            alt="tom"
            src={`https://unavatar.io/${userName}`}/>
        <div  className='tw-followCard-info'>
            <strong >{children}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
        </header>

        <aside >
        <button className={buttonclassName} onClick={handleClick}>
            {text}
        </button>
        </aside>
    </article>
    </>
    )
    }