import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Privacy Policy for Clueminati App</title>
      </Head>

      <header className="bg-blue-500 py-4">
        <h1 className="text-white text-3xl font-semibold text-center">
          Privacy Policy for Clueminati App
        </h1>
      </header>

      <main className="container mx-auto p-4">
        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Clueminati - Treasure Hunt Event Android App (App). This
            Privacy Policy is designed to help you understand how we collect,
            use, disclose, and safeguard your personal information when you use
            our App. Your privacy is important to us, and we are committed to
            protecting your personal information.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            2.1. Personal Information:
          </h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Name:</strong> We collect your name to personalize your
              experience.
            </li>
            <li>
              <strong>Email Address:</strong> We collect your email address to
              communicate with you and provide updates related to the event.
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside">
            <li>To personalize and enhance your experience.</li>
            <li>
              To communicate with you about the event and related updates.
            </li>
            <li>To analyze usage patterns and trends to improve our App.</li>
            <li>To ensure compliance with our Terms of Service.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">
            4. Sharing Your Information
          </h2>
          <ul className="list-disc list-inside">
            <li>
              We do not sell, trade, or rent your personal information to third
              parties.
            </li>
            <li>
              <strong>Event Organizers:</strong> We may share your information
              with the organizers of the treasure hunt event to facilitate
              participation and communication.
            </li>
            <li>
              <strong>Service Providers:</strong> We may engage third-party
              service providers to assist us in delivering our services, and
              they may have access to your information for this purpose.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose your
              information to comply with applicable laws, regulations, or legal
              processes.
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
            However, no method of data transmission over the internet or
            electronic storage is entirely secure, and we cannot guarantee the
            absolute security of your data.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">6. Your Choices</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Access and Update:</strong> You can access and update your
              personal information within the App.
            </li>
            <li>
              <strong>Communication Preferences:</strong> You can opt out of
              receiving promotional emails from us by following the instructions
              in the emails.
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">7. Children Privacy</h2>
          <p>
            Our App is not intended for use by individuals under the age of 13.
            We do not knowingly collect personal information from children under
            13. If you are a parent or guardian and believe that your child has
            provided us with personal information, please contact us, and we
            will take steps to remove such information.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">
            8. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy to reflect changes in our
            practices or for other operational, legal, or regulatory reasons. We
            will notify you of any changes by posting the updated Privacy Policy
            within the App. We encourage you to review this Privacy Policy
            periodically.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the processing of your personal information,
            please contact us at:
          </p>
          <p>[Insert Contact Information]</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">10. Consent</h2>
          <p>
            By using the Clueminati App, you consent to the terms and practices
            outlined in this Privacy Policy.
          </p>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 text-center">
        &copy; {new Date().getFullYear()} Clueminati App
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
