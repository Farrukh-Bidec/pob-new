export async function generateMetadata() {
  return {
    title: "POB Trust | Privacy Policy",
    description: "POB Trust Privacy Policy explains how we collect, use, store, and protect your personal data, ensuring transparency, security, and regulatory compliance.",
    keywords: "POB Trust, Privacy Policy",
    alternates: { canonical: `https://pobtrust.com/privacy-policy` },

  };
}

const PrivacyPolicy = () => {
  return (
    <>
    <main className="privacy-policy container mx-auto p-4 pt-40">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: 05-January-2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          POB Trust (“POB Trust,” “we,” “our,” or “us”) is committed to protecting the privacy 
          and personal information of visitors, donors, patients, volunteers, and partners who 
          interact with our website <a href="https://pobtrust.com" className="text-blue-600 underline">https://pobtrust.com</a> <span> </span>
          and our services. This Privacy Policy explains how we collect, use, disclose, and 
          safeguard your information when you visit our website or engage with our activities.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>

        <h3 className="text-xl font-semibold mt-2">a. Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide, including:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>Donation details (excluding full payment card numbers)</li>
          <li>Information submitted through contact forms, volunteer forms, or appointment requests</li>
        </ul>

        <h3 className="text-xl font-semibold mt-2">b. Health-Related Information</h3>
        <p>
          In limited cases (such as patient registration or eye care services), we may collect basic 
          medical or health-related information necessary to provide treatment. Such data is handled 
          with strict confidentiality.
        </p>

        <h3 className="text-xl font-semibold mt-2">c. Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect:</p>
        <ul className="list-disc list-inside ml-4">
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Pages visited and time spent</li>
          <li>Referring website URLs</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Cookies and Tracking Technologies</h2>
        <p>
          POB Trust may use cookies or similar technologies to:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Improve website functionality</li>
          <li>Analyze website traffic and performance</li>
          <li>Enhance user experience</li>
        </ul>
        <p>
          You can disable cookies through your browser settings, though some features of the 
          website may not function properly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. How We Use Your Information</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Provide medical, charitable, and outreach services</li>
          <li>Respond to inquiries and requests</li>
          <li>Process donations and issue acknowledgments</li>
          <li>Improve our website and services</li>
          <li>Communicate updates, campaigns, or awareness programs</li>
          <li>Comply with legal, regulatory, or reporting obligations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Sharing and Disclosure of Information</h2>
        <p>We do not sell or rent personal information. We may share information only:</p>
        <ul className="list-disc list-inside ml-4">
          <li>With trusted service providers (e.g., payment processors, IT services)</li>
          <li>When required by law or regulatory authorities</li>
          <li>To protect the rights, safety, or property of POB Trust or others</li>
          <li>With medical professionals strictly for treatment purposes</li>
        </ul>
        <p>All third parties are required to maintain confidentiality and data security.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
        <p>
          We retain personal information only for as long as necessary to fulfill the purposes 
          outlined in this policy, or as required by applicable laws, medical regulations, or 
          charitable reporting obligations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Data Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical safeguards to protect 
          personal information against unauthorized access, alteration, or disclosure. 
          However, no online system is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
        <p>Depending on applicable laws, you may have the right to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Request access to your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal data</li>
          <li>Withdraw consent for communications</li>
        </ul>
        <p>Requests can be made using the contact details below.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Children’s Privacy</h2>
        <p>
          POB Trust services may involve children for medical treatment; however, personal information 
          is collected only with the consent of parents or legal guardians and handled with heightened confidentiality.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Third-Party Links</h2>
        <p>Our website may contain links to external websites. POB Trust is not responsible for the privacy practices or content of third-party sites.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. International Visitors</h2>
        <p>
          If you access our website from outside Pakistan, your information may be transferred to 
          and processed in Pakistan, where data protection laws may differ from those in your country.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">12. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
      </section>
    </main>
    </>

  );
};

export default PrivacyPolicy;
