import React from "react";

function Merch(merch) {
    const merchCheck = () => {
        if (!merch) {
            return (
                <div>
                    <h1>There is no merchandise at this time. Please check again later</h1>
                </div>
                
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }
    merchCheck()
}

export default Merch;