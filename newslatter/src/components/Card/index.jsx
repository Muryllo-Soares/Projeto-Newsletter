import illustrationDesktop from "/src/assets/images/illustration-sign-up-desktop.svg"
import iconList from"/src/assets/images/icon-list.svg"


export default function Card (){
    return(
        <div>
            <div>
                <h1>Stay updated</h1>
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

              
                <form >
                    <label 
                    htmlFor="emailAddress">Email address
                    </label>
                    <br />
                    <input 
                    type="email"  
                    id="emailAddress" placeholder="email@company.com" 
                    required
                    size="50"
                    maxLength="50"
                    />

                    <br />
                
                    <input 
                    type="submit" 
                    value="Subscribe to monthly newslatter" 
                    />
                    
                </form>
               
                
            </div>
            <img src={illustrationDesktop} alt="illustration" />

        </div>
    )
}