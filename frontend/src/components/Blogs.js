import React from "react";

import ReactRedux from '../images/ReactRedux.png';
import Bonding from '../images/Bonding.png';
import TechBalancing from '../images/TechBalancing.jpg'
import RemoteNetworking from '../images/RemoteNetworking.jpg'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


const Blogs = () => {
  return (
    <div className='blog-container'>
        <br/>
        <br/>
      <Jumbotron className='jumbo-blog-container'>
        <h1 className='main-blog-title'>Stepping into Redux from React Pt.3</h1>
        <br/>
        <div className='img-body'>
        <a href="https://tedneben.medium.com/stepping-into-redux-from-react-pt-3-4c81d7651f3e">
          <img className="blog-img" alt="redux3-img" src={ReactRedux} />
        </a>
        <p className='main-blog-body'>
          In our Pt.2 we went over how to set up redux in our react applications, 
          how to create a store, how to give access to the store through our Provider component, and started touching 
          on reducers. This part will cover how to write reducers and how to write reducers with different action.types 
          utilizing switch cases.
        </p>
        </div>
        <a href='https://tedneben.medium.com/stepping-into-redux-from-react-pt-3-4c81d7651f3e'>
          <Button variant="primary" className='main-blog-btn'>Read More</Button>
        </a>
      </Jumbotron>

      <div className='blog-card-row'>

        <div className='blog-card'>
          <a href="https://tedneben.medium.com/stepping-into-redux-from-react-pt-2-13ab05998bfc">
            <h2 className='blog-card-title'>Stepping into Redux from React Pt.2</h2>
            <img className='blog-card-img' alt='redux3-img' src={ReactRedux} />
          </a>
        </div>

        <div className='blog-card'>
          <a href="https://tedneben.medium.com/stepping-into-redux-from-react-pt-1-508966bcfda1">
            <h2 className='blog-card-title'>Stepping into Redux from React Pt.1</h2>
            <img className='blog-card-img' alt='redux3-img' src={ReactRedux} />
          </a>
        </div>

        <div className='blog-card'>
          <a href="https://tedneben.medium.com/beginning-bootcamp-bonds-6afd56734973">
            <h2 className='blog-card-title'>Beginning Bootcamp Bonds</h2>
            <img className='blog-card-img-2' alt='redux3-img' src={Bonding} />
          </a>
        </div>

        <div className='blog-card'>
          <a href="https://tedneben.medium.com/beginning-to-balance-tech-3c624ebee412">
            <h2 className='blog-card-title'>Beggining to Balance Tech</h2>
            <img className='blog-card-img' alt='redux3-img' src={TechBalancing} />
          </a>
        </div>

        <div className='blog-card'>
          <a href="https://tedneben.medium.com/remotely-networking-into-the-future-862b5fd32c0b">
            <h2 className='blog-card-title'>Remotely Networking into the Future!</h2>
            <img className='blog-card-img' alt='redux3-img' src={RemoteNetworking} />
          </a>
        </div>

        <div className='blog-card'>
          <a href="https://tedneben.medium.com/a-drop-in-the-deep-end-c88ae6c23423">
            <h2 className='blog-card-title'>A Drop in the Deep End</h2>
            <img className='blog-card-img' alt='redux3-img' src="https://media.giphy.com/media/R5725c8hpXhSg/giphy.gif" />
          </a>
        </div>

      </div>
      <div className='blog-break'/>
    </div>
  )
};

export default Blogs;
