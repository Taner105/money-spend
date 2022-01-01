import React from 'react'

const Header = ({money, total}) => {
    return (
        <div >
            {
                total > 0 && money - total !== 0  && (
                    
                <div className='header'>Harcayacak <span> $ {money - total}</span> paranız !</div> 
                )}
                { 
                total === 0 && (
                <div className='header'>Harcamak için <span> $ {money}</span> paranız var!</div>    
                )}
                {
                    money - total === 0 && (
                <div className='header'>Paran Bitti!</div>
                    )
                }

                <style jsx>{`
                .header {
                    position: sticky;
                    top: 0;
                    background: linear-gradient(to bottom, green, greenyellow);
                    height:60px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#fff;
                    font-size:24px;
                    letter-spacing:1px;

                }
                .header span {
                    margin:0 10px;
                    font-weight:bold;
                }
                
                `}</style>
            
        </div>
    )
}

export default Header
