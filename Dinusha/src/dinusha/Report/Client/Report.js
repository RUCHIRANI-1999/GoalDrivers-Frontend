import React from 'react'
import './Report.css'
import logo from './Logo.jpeg'

function Report({id,title,price,rating,quantity}){
  return (
    <div className='SellerReport'>
      <img className='Logo' src={logo} alt='logo'></img>
      <h4 className='Heading'>Budget Pos, Kaduwela, Sri Lanka <br/>Telephone No:0716020480<br/>Email:budgetpos@gmail.com</h4>
      <hr></hr>
      <table className='Table'>
        <h3 className='Table_caption' style={{textAlign:'center'}}>Seller Report</h3>
        <tr>
          <td>Product ID</td>
          <td>1234</td>
        </tr>

        <tr>
          <td>Product Name</td>
          <td>Key board</td>
        </tr>

        <tr>
          <td>Price</td>
          <td>LKR 1500.00</td>
        </tr>

        <tr>
          <td>Quantity</td>
          <td>100</td>
        </tr>

        <tr>
          <td>No of Product sold last week</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Ratings</td>
          <td>*****</td>
        </tr>

        <tr>
          <td>Feedback for the product</td>
          <td>good</td>
        </tr>

        <tr></tr>

        <tr>
          <td></td>
          <td>
            <button className='print'>Print</button>
            <button className='cancel' style={{marginLeft:'2rem', borderRadius:'4px', height:'2.7rem', color:'black'}}>Cancel</button>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default Report;
