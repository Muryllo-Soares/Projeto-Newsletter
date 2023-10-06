import illustrationDesktop from "/src/assets/images/illustration-sign-up-desktop.svg"
import iconList from"/src/assets/images/icon-list.svg"
import styles from "./style.module.css"


export default function Card (){
    return(
        <div className={styles.container}>
            <div className={styles.components}>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <p>
                    <img src={iconList} alt="icon list" /> Product discovery and building what matters
                </p>
                <p>
                    <img src={iconList} alt="icon list" /> Maesuring to ensure updates are a success
                </p>
                <p>
                    <img src={iconList} alt="icon list" /> And much more!
                </p>

              
                <form className={styles.form}>
                    <label 
                    htmlFor="emailAddress">Email address
                    </label>
                    <br />
                    <input 
                    className={styles.mail}
                    type="email"  
                    id="emailAddress" placeholder="email@company.com" 
                    required
                    />

                    <br />
                
                    <input
                    className={styles.submit}
                    type="submit" 
                    value="Subscribe to monthly newslatter" 
                    />
                    
                </form>
               
                
            </div>
            <img 
            className={styles.image}
            src={illustrationDesktop} alt="illustration" />

        </div>
    )
}