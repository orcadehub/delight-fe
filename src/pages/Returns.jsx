import React from 'react';
import './Returns.css'; // Import the updated CSS file for styling

function Returns() {
  return (
    <div className="returns-container">
      <div className="returns-header">
        <h1>Refund Policy</h1>
      </div>
      <div className="returns-content">
        <h3>At 90’s Delight, we want you to be completely satisfied with your purchase.</h3>
        <p>
          However, please note that we do not accept returns. We only offer refunds for eligible products, as outlined below.
        </p>

        <h4>Eligibility for Refunds</h4>
        <ul>
          <li><strong>Refund Period:</strong> You may request a refund within 24 hours of receiving your order.</li>
          <li><strong>Product Condition:</strong> Items must be unused, in their original packaging, and in the same condition as received.</li>
          <li><strong>Uncut Video Proof Requirement:</strong> To ensure a smooth and fair refund process, we require an uncut video showing the entire unboxing process. This video should clearly include:
            <ul>
              <li>The sealed package with visible tracking details</li>
              <li>The process of opening the package</li>
              <li>Any damage or defects in the product</li>
            </ul>
            This video evidence is essential for verifying claims and facilitating a faster resolution.
          </li>
        </ul>

        <h4>Refund Process</h4>
        <ol>
          <li><strong>Refund Request:</strong> Contact our customer support team within 24 hours of receiving your order to request a refund. Please include your order number, a description of the issue, the items for refund, and the uncut video showing the unboxing process.</li>
          <li><strong>Video Verification:</strong> Our team will review the provided video to assess the issue.</li>
          <li><strong>Refund Approval:</strong> Once approved, your refund will be processed within 1-3 business days and will be credited in 3-7 working days.</li>
          <li><strong>Refund Method:</strong> Refunds will be issued to your original payment method.</li>
        </ol>

        <h4>Important Notes</h4>
        <ul>
          <li>Refund requests without the required video proof or incomplete footage cannot be processed.</li>
          <li>We do not accept returns.</li>
        </ul>

        <div className="returns-footer">
          <p>
            For any further assistance or inquiries, please contact our customer support team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Returns;
