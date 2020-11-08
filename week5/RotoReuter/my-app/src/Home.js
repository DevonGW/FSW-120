import React from 'react'

function Home() {
    return (
        <div>
            <img id="homeImage" src="https://images.unsplash.com/photo-1595429035839-c99c298ffdde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/> 

            <div className="homeText">
                <h3 className="header">Louis and Son Plumbing</h3>

                <p>We look forward to meeting your Plumbing needs...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                

                <ul>
                    <li>Most referred</li>
                    <li>#1 in Pinellas County</li>
                    <li>Competitive Prices</li>
                    <li>Family Owned</li>
                </ul>
            </div>      
        </div>
    )
}

export default Home