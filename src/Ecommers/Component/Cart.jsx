import React, { useEffect, useState } from 'react'
import GooglePayButton from '@google-pay/button-react'

const Cart = ({cart,setCart}) => {
  const[price,setPrice]=useState(0)

  function handlePrice(){
    let ans=0
    cart.map((item)=>ans+=item.price*item.amount)
    setPrice(ans)
  }
  useEffect(()=>{
    handlePrice()
  })

function handleRemove(id){
  const del=cart.filter(i=>id!==i.id)
  setCart(del)
}

// async function checkout(e){
//   e.preventDefault();
// }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Increase</b></td>
            <td><b>Qty</b></td>
            <td><b>Decrease</b></td>
            <td><b>TotalPrice</b></td>
            <td><b>Remove</b></td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item)=>{
            return(
              <tr key={item.id}>
                <td><img src={item.image} height={'50px'} width={'50px'} /></td>
                <td>{item.title}</td>
                <td><button>+</button></td>
                <td>{item.amount}</td>
                <td><button>-</button></td>
                <td>{item.price}</td>
                <td><button onClick={()=>handleRemove(item.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount</td>
            <td colSpan={5}>{price}Rs</td>
            <td><button onClick={checkout}><GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/></button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart