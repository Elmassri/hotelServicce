import React from 'react'
import AAA from '../../images/—Pngtree—fast food seamless background with_5082565.png'



import './Header.css'
import { Button } from '@material-ui/core'
export default function Header (props){



    return (
        <div className='headi'>
                    
                    <Button variant="contained" color="secondary">
        Logout
      </Button>
      <h3 style={{position:'relative',left:'0px',top:'0px',color:'black'}}>Welcome Mr.User</h3>
      </div>
    )
}