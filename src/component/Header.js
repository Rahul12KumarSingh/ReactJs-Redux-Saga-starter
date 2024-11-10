import React from 'react'

import { useSelector } from 'react-redux';


export default function Header() {

    const cnt = useSelector((state) => state.cartData) ;

    console.log(cnt);

  return (
    <div>
       Value of the  {cnt.length}
    </div>
  )
}
