import React from 'react';

export default function Titulo({children}) {
 return (
   <div>
    <div className='cabecalho'>
        {children}
    </div>
   </div>
 );
}