import React from 'react'
import "./pageheader.scss"

const Pageheader = ({mainTitle, subTitle}) => {
  return (
    <section id='pageHeader'>
      <div className="pageTitle">
        <h1>{mainTitle}</h1>
        <span className='subTitle'>{subTitle}</span>
      </div>




    </section>
  )
}

export default Pageheader