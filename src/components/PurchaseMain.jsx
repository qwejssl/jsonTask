import React, { useState } from 'react'; 
import { jsonData } from "../data.js"; 

 
export default function PurchaseOrderList() { 
  const [selectedOrder, setSelectedOrder] = useState(null); 
 
  const showOrderDetails = (order) => { 
    setSelectedOrder(order); 
  }; 
 
  const closePopup = () => { 
    setSelectedOrder(null); 
  }; 
 
  return ( 
    <div className="purchase-order-list"> 
      <h1>Purchase Orders:</h1> 
      <ul className="order-list"> 
        {jsonData.mvPurchaseOrders.map(order => ( 
          <li key={order.PurchaseOrderNo} className="order-list-item"> 
            <button className="order-link" onClick={() => showOrderDetails(order)}> 
              {order.PurchaseOrderTypeAbbreviation} - {order.PurchaseOrderNo} 
            </button> 
          </li> 
        ))} 
      </ul> 
 
      {selectedOrder && ( 
        <div className="popup"> 
          <h2>Order Details</h2> 
          <p><strong>Address:</strong> {selectedOrder.PurchaseOrderAddress}</p> 
          <p><strong>Contact Person:</strong> {selectedOrder.PurchaseOrderContactPerson}</p> 
          <p><strong>Status:</strong> {selectedOrder.PurchaseOrderStatus}</p> 
          <table className="order-details-table"> 
            <thead> 
              <tr> 
                <th>Product SKU</th> 
                <th>Quantity Ordered</th> 
                <th>Unit Price</th> 
                <th>Total Amount</th> 
              </tr> 
            </thead> 
            <tbody> 
              {selectedOrder.PurchaseOrderDetails.map(detail => ( 
                <tr key={detail.PurchaseOrderRowProductSKU}> 
                  <td>{detail.PurchaseOrderRowProductSKU}</td> 
                  <td>{detail.PurchaseOrderRowQuantity}</td> 
                  <td>{detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td> 
                  <td>{detail.PurchaseOrderRowTotalAmount}</td> 
                </tr> 
              ))} 
            </tbody> 
          </table> 
          <button className="close-popup" onClick={closePopup}>Close</button> 
        </div> 
      )} 
    </div> 
  ); 
}