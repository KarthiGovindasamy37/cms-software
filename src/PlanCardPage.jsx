import React from 'react'
import PlanCard from './Component/PlanCard'
import { toast } from 'react-toastify'
import { env } from './Config'
import axios from 'axios'

function PlanCardPage() {

    let data=[
        {
          plan:"Basic",
          price:99,
          period:"month",
          features:[
            {
              title:"500 MB storage",
              enable:true
            },
            {
              title:"Free SSL certificate",
              enable:true
            },
            {
              title:"Unlimited Email Support",
              enable:true
            },
            {
              title:"Collect payments",
              enable:true
            },
            {
              title:"Premium themes",
              enable:false
            },
            {
              title:"Dedicated Phone Support",
              enable:false
            },
            {
              title:"Free Domain",
              enable:false
            },
            {
              title:"Monthly Status Reports",
              enable:false
            },
            {
                title:"Upload videos",
                enable:false
            },{
                title:"Advanced SEO (Search Engine Optimization) tools",
                enable:false
            },{
                title:"Google analytics integration",
                enable:false
            },{
                title:"Jetpack Backup: automated backups & one-click restores",
                enable:false
            },{
                title:"SFTP, SSH, WP-CLI, and Database access",
                enable:false
            },{
                title:"Integrations with Top Shipping Carriers",
                enable:false
            }
            
          ]
        },
        {
            plan:"Premium",
            price:299,
            period:"month",
            features:[
              {
                title:"500 MB storage",
                enable:true
              },
              {
                title:"Free SSL certificate",
                enable:true
              },
              {
                title:"Unlimited Email Support",
                enable:true
              },
              {
                title:"Collect payments",
                enable:true
              },
              {
                title:"Premium themes",
                enable:true
              },
              {
                title:"Dedicated Phone Support",
                enable:true
              },
              {
                title:"Free Domain",
                enable:true
              },
              {
                title:"Monthly Status Reports",
                enable:false
              },
              {
                  title:"Upload videos",
                  enable:false
              },{
                  title:"Advanced SEO (Search Engine Optimization) tools",
                  enable:false
              },{
                  title:"Google analytics integration",
                  enable:false
              },{
                  title:"Jetpack Backup: automated backups & one-click restores",
                  enable:false
              },{
                  title:"SFTP, SSH, WP-CLI, and Database access",
                  enable:false
              },{
                  title:"Integrations with Top Shipping Carriers",
                  enable:false
              }
              
            ]
          },
          {
            plan:"eCommerce",
            price:499,
            period:"month",
            features:[
              {
                title:"500 MB storage",
                enable:true
              },
              {
                title:"Free SSL certificate",
                enable:true
              },
              {
                title:"Unlimited Email Support",
                enable:true
              },
              {
                title:"Collect payments",
                enable:true
              },
              {
                title:"Premium themes",
                enable:true
              },
              {
                title:"Dedicated Phone Support",
                enable:true
              },
              {
                title:"Free Domain",
                enable:true
              },
              {
                title:"Monthly Status Reports",
                enable:true
              },
              {
                  title:"Upload videos",
                  enable:true
              },{
                  title:"Advanced SEO (Search Engine Optimization) tools",
                  enable:true
              },{
                  title:"Google analytics integration",
                  enable:false
              },{
                  title:"Jetpack Backup: automated backups & one-click restores",
                  enable:false
              },{
                  title:"SFTP, SSH, WP-CLI, and Database access",
                  enable:false
              },{
                  title:"Integrations with Top Shipping Carriers",
                  enable:false
              },
              
              
            ]
          },
          {
            plan:"VIP",
            price:599,
            period:"month",
            features:[
              {
                title:"500 MB storage",
                enable:true
              },
              {
                title:"Free SSL certificate",
                enable:true
              },
              {
                title:"Unlimited Email Support",
                enable:true
              },
              {
                title:"Collect payments",
                enable:true
              },
              {
                title:"Premium themes",
                enable:true
              },
              {
                title:"Dedicated Phone Support",
                enable:true
              },
              {
                title:"Free Domain",
                enable:true
              },
              {
                title:"Monthly Status Reports",
                enable:true
              },
              {
                  title:"Upload videos",
                  enable:true
              },{
                  title:"Advanced SEO (Search Engine Optimization) tools",
                  enable:true
              },{
                  title:"Google analytics integration",
                  enable:true
              },{
                  title:"Jetpack Backup: automated backups & one-click restores",
                  enable:true
              },{
                  title:"SFTP, SSH, WP-CLI, and Database access",
                  enable:true
              },{
                  title:"Integrations with Top Shipping Carriers",
                  enable:true
              }
    ]
}
    ]

    let razorpayPayment=async(price,plan)=>{
      try {

        let paymentDetails={price}

        let payment=await axios.post(`${env.api}/razorpaypayment`,paymentDetails);
        
        let options={
          key:env.razorpay_key,
          amount:payment.data.amount,
          currency:payment.data.currency,
          name:"Mysite.com",
          description:`Purchasing ${plan} plan`,
          image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522m%2Blogo%2522&psig=AOvVaw3y0SWriJ6-mcJkUDR20N7q&ust=1667892528871000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCy5_7Fm_sCFQAAAAAdAAAAABAE",
          order_id:payment.data.id,
          handler:(res)=>{
            alert(`Payment ID : ${res.razorpay_payment_id}`);
            alert(`Order ID : ${res.razorpay_order_id}`);
          },
          prefill:{
            // this is user details section as of now fill with sample data
            name:"Karthi",
            email:"karthi369234@gmail.com",
            contact:"9999999999"
          },
          notes:{
            address:"Mysite corporate office"
          },
          theme:{
           color: "#3399cc"
          }
        };
        let paymentWindow = new window.Razorpay(options);
        paymentWindow.on('payment.failed',(response)=>{
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      paymentWindow.open();

      } catch (error) {
        toast.error(error.response.data.message,{toastId:"13"})
      }

    }
  return (
    <>
    <div className="text-center pb-1 bg-light pt-5 mt-5">
            <h2 className='planhead'>Pick a plan that suits you best</h2>
        </div>
    <section className="pricing py-5 bg-light">
    <div className="container-fluid">
      <div className="row">
        {
          data.map((item)=>{
            return <PlanCard item={item} razorpayPayment={razorpayPayment}></PlanCard>
          })
        }
        </div>
        </div>
        </section>       
        </>
  )
}

export default PlanCardPage