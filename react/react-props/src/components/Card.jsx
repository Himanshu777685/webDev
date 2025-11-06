import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div>
          <div className="top">
            <div className='image'><img src={props.logo} alt="" /></div>
            <button>Save <Bookmark size={16} color="#bababa" /></button>
          </div>
          <div className="center">
            <div>
              {props.name}  <span>{props.date}</span>
            </div>
            <h4>{props.post}</h4>
            <div>
              <button>
                {props.tag1}
              </button>
              <button>
                {props.tag2}
              </button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="line"></div>
          <div className='b1'>
           <div>
             <div className="pay">
              {props.pay}</div>
              <div className="loc">
               {props.loc}
              </div>
           </div>
            
            <button>Apply Now</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Card
