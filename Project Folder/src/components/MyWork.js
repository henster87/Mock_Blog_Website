import {React, useEffect} from 'react'

import { MyWorkTemplate } from './MyWorkTemplate'

function MyWork() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  })

/* Only used to display the carousel */
  return (
    <section>
      <div>
          <MyWorkTemplate/>
      </div>
    </section>
  )
}

export default MyWork