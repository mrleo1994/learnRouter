import React, { memo } from 'react'

function FooterHook({ number }) {
    console.log("footer render");
    return (
        <div className='p-5 display-4'>
            {number}
        </div>
    )
}
export default memo(FooterHook);