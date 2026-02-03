export default function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Privacy Policy - FamilyMap</h1>
      <p><strong>Effective Date:</strong> February 3, 2026</p>

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

      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ccc', color: '#666' }}>
        <p>&copy; 2026 FamilyMap. All rights reserved.</p>
      </footer>
    </div>
  );
}
