export async function generateMetadata() {
  return {
    title: "POB Trust | Terms and Conditions",
    description: "POB Trust Terms and Conditions explained clearly. Learn eligibility, obligations, rights, risks, and compliance rules in this complete, easy-to-read guide.",
    keywords: "POB Trust, Terms and Conditions",
    alternates: { canonical: `https://pobtrust.com/terms-conditions` },

  };
}
const Terms = () => {
  return (
    <>
      <title>Terms and Conditions | POB Trust</title>
    <main className="terms-policy container mx-auto p-4 pt-40">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: 05-January-2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to the website of POB Trust (“POB Trust,” “we,” “our,” or “us”). 
          By accessing or using our website <a href="https://pobtrust.com" className="text-blue-600 underline">https://pobtrust.com</a> 
          and any related services, you agree to be bound by these Terms and Conditions. 
          If you do not agree with these terms, please do not use our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Purpose of the Website</h2>
        <p>This website is provided to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Share information about POB Trust’s charitable, medical, and awareness activities</li>
          <li>Facilitate donations and volunteer engagement</li>
          <li>Provide general information related to eye health and services</li>
        </ul>
        <p>
          The content is for informational purposes only and does not replace professional medical advice, diagnosis, or treatment.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Medical Disclaimer</h2>
        <p>
          Any health-related information provided on this website is intended for general awareness only. 
          It should not be considered medical advice. Always consult a qualified medical professional 
          for diagnosis and treatment. POB Trust shall not be liable for reliance on information obtained from this website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Donations</h2>
        <p>
          All donations made through the website are voluntary and intended to support POB Trust’s charitable activities. 
          Donations are generally non-refundable, except in cases of proven technical error or unauthorized transactions. 
          POB Trust reserves the right to refuse or cancel any donation at its discretion.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Use of the Website</h2>
        <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe the rights of others</li>
          <li>Disrupt or damage the website or its functionality</li>
          <li>Attempt unauthorized access to systems or data</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, graphics, and design, is the property 
          of POB Trust unless otherwise stated. You may not copy, reproduce, distribute, or modify any content 
          without prior written permission from POB Trust.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
        <p>
          This website may include links to third-party websites for additional information or convenience. 
          POB Trust does not control or endorse the content or practices of these external websites and is not responsible for them.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Privacy</h2>
        <p>
          Your use of the website is also governed by our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>, 
          which explains how we collect and use personal information. By using this website, you consent to the practices described in the Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, POB Trust shall not be liable for any:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Direct, indirect, incidental, or consequential damages</li>
          <li>Loss of data, revenue, or goodwill</li>
          <li>Issues arising from website downtime, errors, or security breaches</li>
        </ul>
        <p>Your use of the website is at your own risk.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless POB Trust, its trustees, staff, volunteers, 
          and partners from any claims, liabilities, or expenses arising from your misuse of the website 
          or violation of these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Changes to These Terms</h2>
        <p>
          POB Trust reserves the right to modify these Terms and Conditions at any time. 
          Updated terms will be posted on this page with a revised “Last updated” date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">12. Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and interpreted in accordance with the laws of Pakistan, 
          without regard to conflict-of-law principles.
        </p>
      </section>
    </main>
    </>

  );
};

export default Terms;
