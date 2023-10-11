/* eslint-disable react/prop-types */
import style from "./style.module.css"
import iconSuccess from "/src/assets/images/icon-success.svg"

export default function Modal({value, isOpen, setModalOpen}){

    if(isOpen){
        return (
            <div className={style.container}>
                <div className={style.modal}>
                    <img 
                        src={iconSuccess} 
                        alt="Icon Success"
                    />
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <b>{value}</b>. Please open it and click the button inside to confirm your subscription.</p>
                    <button onClick={setModalOpen}>
                        Dismiss message
                    </button>
                
                </div>
            </div>
        )
        
}

return null
}