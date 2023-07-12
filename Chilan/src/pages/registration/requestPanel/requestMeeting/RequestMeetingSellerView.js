import React from 'react';
import './RequestMeetingSellerView.css';
import photo from './request.png';
import NavHome from '../../../../components/NavBar/NavHome';

function RequestMeetingSellerView() {
  const tableData = [
    { request_id: 1, buyer_id: 101, seller_id: 201, seller_status: 'Pending', full_name: 'John Doe', contact: '1234567890', email: 'john@example.com', request: 'Meeting request' },
    { request_id: 1, buyer_id: 101, seller_id: 201, seller_status: 'Pending', full_name: 'John Doe', contact: '1234567890', email: 'john@example.com', request: 'Meeting request' },
    { request_id: 1, buyer_id: 101, seller_id: 201, seller_status: 'Pending', full_name: 'John Doe', contact: '1234567890', email: 'john@example.com', request: 'Meeting request' },
    { request_id: 1, buyer_id: 101, seller_id: 201, seller_status: 'Pending', full_name: 'John Doe', contact: '1234567890', email: 'john@example.com', request: 'Meeting request' },
  ];

  return (
    <div>
      <NavHome/>
    <div className="view-containerseller">
    
      <div className="photo-containerseller">
      
        <div className='mainheading'>Request meeting</div>
        <img className="imgreq" src={photo} alt="SelPhotoler " />
      </div>
      <div className="table-container11">
        <br></br><br></br>
      <header className="details">Request Details</header><br></br><br></br>
        <table className='table1'>
         
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Buyer ID</th>
              <th>Seller ID</th>
              <th>Seller Status</th>
              <th>Full Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.request_id}>
                <td>{data.request_id}</td>
                <td>{data.buyer_id}</td>
                <td>{data.seller_id}</td>
                <td>{data.seller_status}</td>
                <td>{data.full_name}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>
                <td>{data.request}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default RequestMeetingSellerView;
