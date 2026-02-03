export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      margin: 0,
      padding: 0
    }}>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          background: #f8f9fa;
        }
        
        /* Header */
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
        }
        .header h1 {
          margin: 0;
          font-size: 2.5em;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .header p {
          margin: 15px 0 0 0;
          font-size: 1.1em;
          opacity: 0.95;
        }
        
        /* Container */
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        /* Section */
        .section {
          background: white;
          padding: 35px;
          margin-bottom: 25px;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          border-left: 5px solid #667eea;
          transition: box-shadow 0.3s ease;
        }
        .section:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
        }
        
        /* Meta Info */
        .meta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 10px;
          margin: 30px 0;
          box-shadow: 0 2px 12px rgba(102, 126, 234, 0.2);
        }
        .meta p {
          margin: 0;
          font-size: 1.1em;
          font-weight: 500;
        }
        
        h2 {
          color: #2c3e50;
          margin: 0 0 20px 0;
          font-size: 1.6em;
          font-weight: 700;
          border-bottom: 3px solid #667eea;
          padding-bottom: 12px;
        }
        
        h3 {
          color: #667eea;
          margin: 25px 0 15px 0;
          font-size: 1.15em;
          font-weight: 600;
        }
        
        p {
          color: #555;
          line-height: 1.8;
          margin: 15px 0;
          font-size: 0.95em;
        }
        
        ul {
          background: #f0f4ff;
          padding: 25px 35px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 5px solid #667eea;
          list-style-position: inside;
        }
        
        li {
          color: #555;
          margin: 12px 0;
          line-height: 1.7;
          font-size: 0.95em;
        }
        
        /* Footer */
        footer {
          background: #2c3e50;
          color: #ecf0f1;
          text-align: center;
          padding: 40px 20px;
          margin-top: 60px;
          border-top: 5px solid #667eea;
        }
        
        footer p {
          color: #ecf0f1;
          margin: 10px 0;
          font-size: 0.9em;
        }
        
        footer strong {
          color: #667eea;
          font-weight: 600;
        }
      `}</style>
      
      {/* Header */}
      <div className="header">
        <h1>Privacy Policy</h1>
        <p>FamilyMap</p>
      </div>
      
      {/* Main Content */}
      <div className="container">
        <div className="meta">
          <p><strong>Effective Date:</strong> February 3, 2026</p>
        </div>
        <div className="section">
          <h2>1. Introduction</h2>
          <p>FamilyMap ("we", "our", or "the App") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>
        </div>

        <div className="section">
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Location Data</h3>
          <p>The primary feature of FamilyMap is real-time location sharing. We collect your precise GPS location when you enable the app and share it with your family group members.</p>
          <ul>
            <li>Collected with your explicit consent</li>
            <li>Stored securely on Supabase servers</li>
            <li>Only shared with family group members you authorize</li>
            <li>Never sold to third parties</li>
          </ul>

          <h3>2.2 Account Information</h3>
          <p>We collect information you provide when creating an account:</p>
          <ul>
            <li>Email address</li>
            <li>Name</li>
            <li>Password (encrypted)</li>
            <li>Phone number (optional)</li>
          </ul>

          <h3>2.3 Device Information</h3>
          <p>We automatically collect:</p>
          <ul>
            <li>Device model and OS version</li>
            <li>Device ID</li>
            <li>App version</li>
          </ul>
        </div>

        <div className="section">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>Location sharing with authorized family members</li>
            <li>Geofence notifications and alerts</li>
            <li>Emergency alerts</li>
            <li>Account management and authentication</li>
            <li>App improvement and analytics</li>
          </ul>
        </div>

        <div className="section">
          <h2>4. Children's Privacy (COPPA Compliance)</h2>
          <p>FamilyMap complies with the Children's Online Privacy Protection Act (COPPA). For users under 13:</p>
          <ul>
            <li>Parental consent is required for account creation</li>
            <li>We collect minimal personal information</li>
            <li>Location data is only shared with authorized family members</li>
            <li>Parents can request data deletion at any time</li>
          </ul>
        </div>

        <div className="section">
          <h2>5. Data Security</h2>
          <p>We implement industry-standard security measures:</p>
          <ul>
            <li>SSL/TLS encryption for all data in transit</li>
            <li>Encrypted storage of sensitive data</li>
            <li>Regular security audits</li>
            <li>Secure authentication (OAuth 2.0)</li>
          </ul>
        </div>

        <div className="section">
          <h2>6. Data Sharing</h2>
          <p>We do NOT share your data except:</p>
          <ul>
            <li>With family group members (location only, as intended)</li>
            <li>With service providers (Supabase for hosting)</li>
            <li>When required by law</li>
          </ul>
        </div>

        <div className="section">
          <h2>7. Your Rights</h2>
          <ul>
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt-out of location sharing</li>
            <li>Control family group memberships</li>
          </ul>
        </div>

        <div className="section">
          <h2>8. Contact Us</h2>
          <p>For privacy concerns or data requests, contact:</p>
          <p><strong>Email:</strong> privacy.familymap@gmail.com</p>
          <p><strong>Address:</strong> [Your Address]</p>
        </div>

        <div className="section">
          <h2>9. Changes to This Policy</h2>
          <p>We may update this policy periodically. Changes will be posted on this page with an updated "Effective Date".</p>
        </div>
      </div>

      <footer>
        <p>&copy; 2026 FamilyMap. All rights reserved.</p>
        <p>A family location sharing app built with privacy in mind</p>
      </footer>
    </div>
  );
}
