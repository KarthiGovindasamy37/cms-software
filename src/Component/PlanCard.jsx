import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck,faTimes,faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";

function PlanCard({item,razorpayPayment}) {
  return (
    <div className="col-sm-9 col-md-6 col-lg-3">
        <div className="card mb-5 mb-lg-0 cardzoom shadow mb- bg-white rounded">
      <div className={`card-body  ${item.plan==="Basic"? `freecard`:item.plan==="Premium"? `premiumcard`: item.plan==="eCommerce" ? `ecommercecard` : item.plan==="VIP" ? `vipcard`: null}`}>
        <h5 className={`card-title text-uppercase text-center ${item.plan==="Basic"? `text-muted`:item.plan==="Premium"? `text-danger`: item.plan==="eCommerce" ? `text-success` : item.plan==="VIP" ? `text-info`: null}`}>{item.plan}</h5>
        <h6 className="card-price text-center"><FontAwesomeIcon icon={faIndianRupeeSign} /> {item.price}<span className="period">/{item.period}</span></h6>
        <hr/>
        <ul className="fa-ul">
          {
            item.features.map((list)=>{
                return(<li className={list.enable?``:`text-muted`}>
                    <span className="fa-li">
                        {
                        list.enable? <span style={{color:"green"}}> <FontAwesomeIcon icon={faCheck}/></span>:<FontAwesomeIcon icon={faTimes}/>
                         } 
                    </span>
                    {
                      list.bold?<strong>{list.title}</strong>: list.title
                    }
                    </li>
                )

            })
          }
      
        </ul>
        <div className="d-grid">
          <button onClick={()=>razorpayPayment(item.price,item.plan)} className={`btn text-uppercase ${item.plan==="Basic"? `btn-secondary`:item.plan==="Premium"? `btn-danger`: item.plan==="eCommerce" ? `btn-success` : item.plan==="VIP" ? `btn-info text-white`: null}`}>Buy Plan</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PlanCard