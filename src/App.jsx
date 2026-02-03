export default function App() {
  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      backgroundColor: '#ffffff'
    }}>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 0;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 3px solid #667eea;
          padding-bottom: 15px;
          margin-top: 0;
          font-size: 2em;
        }
        h2 {
          color: #34495e;
          margin-top: 35px;
          font-size: 1.3em;
          font-weight: 600;
        }
        h3 {
          color: #667eea;
          margin-top: 20px;
          font-size: 1.1em;
        }
        ul {
          background: #f0f4ff;
          padding: 20px 30px;
          border-radius: 6px;
          border-left: 4px solid #667eea;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
        }
        li {
          margin: 10px 0;
        }
        footer {
          text-align: center;
          margin-top: 50px;
          padding-top: 25px;
          border-top: 2px solid #e0e0e0;
          color: #666;
          font-size: 0.9em;
        }
        .meta {
          background: #e8f0ff;
          padding: 20px;
          border-left: 4px solid #667eea;
          border-radius: 6px;
          margin: 25px 0;
          font-size: 0.95em;
        }
        p {
          margin: 15px 0;
        }
      `}</style>
      <h1>Privacy Policy - FamilyMap</h1>
      <div className="meta">
        <p><strong>Effective Date:</strong> February 3, 2026</p>
      </div>

      <h2>1. Introduction</h2>
      <p>FamilyMap ("we", "our", or "the App") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>

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

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>Location sharing with authorized family members</li>
        <li>Geofence notifications and alerts</li>
        <li>Emergency alerts</li>
        <li>Account management and authentication</li>
        <li>App improvement and analytics</li>
      </ul>

      <h2>4. Children's Privacy (COPPA Compliance)</h2>
      <p>FamilyMap complies with the Children's Online Privacy Protection Act (COPPA). For users under 13:</p>
      <ul>
        <li>Parental consent is required for account creation</li>
        <li>We collect minimal personal information</li>
        <li>Location data is only shared with authorized family members</li>
        <li>Parents can request data deletion at any time</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We implement industry-standard security measures:</p>
      <ul>
        <li>SSL/TLS encryption for all data in transit</li>
        <li>Encrypted storage of sensitive data</li>
        <li>Regular security audits</li>
        <li>Secure authentication (OAuth 2.0)</li>
      </ul>

      <h2>6. Data Sharing</h2>
      <p>We do NOT share your data except:</p>
      <ul>
        <li>With family group members (location only, as intended)</li>
        <li>With service providers (Supabase for hosting)</li>
        <li>When required by law</li>
      </ul>

      <h2>7. Your Rights</h2>
      <ul>
        <li>Access your personal data</li>
        <li>Request data deletion</li>
        <li>Opt-out of location sharing</li>
        <li>Control family group memberships</li>
      </ul>

      <h2>8. Contact Us</h2>
      <p>For privacy concerns or data requests, contact:</p>
      <p>Email: <strong>privacy.familymap@gmail.com</strong></p>
      <p>Address: [Your Address]</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this policy periodically. Changes will be posted on this page with an updated "Effective Date".</p>

      <footer>
        <p>&copy; 2026 FamilyMap. All rights reserved.</p>
      </footer>
    </div>
  );
}
