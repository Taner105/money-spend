import React from 'react'

const Header = ({money, total}) => {
    return (
        <div>
            {
                total > 0 && money - total !== 0  && (
                    
                   <div>Harcayacak $ {money - total} paranız !</div> 
                )}
                { 
                total === 0 && (
                <div>Harcamak için $ {money} paranız var!</div>    
                )}
                {
                    money - total === 0 && (
                        <div>Paran Bitti!</div>
                    )
                }
            
        </div>
    )
}

export default Header
