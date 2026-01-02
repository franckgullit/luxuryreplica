import "./Privacy.scss";

export default function Privacy() {
  return (
    <main className="privacy">
      <header className="privacy__header">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy explains how we collect and use information.</p>
      </header>

      <section className="privacy__content">
        <h2>Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide when placing an order,
          contacting our support team, or subscribing to updates. This may include your name,
          email address, shipping address, and payment-related details.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          Your information is used strictly to process orders, provide customer support,
          improve our services, and communicate important updates regarding your purchases.
          We do not sell or rent your personal information to third parties.
        </p>

        <h2>Payment Security</h2>
        <p>
          All payments are handled securely through trusted third-party payment providers.
          We do not store your full payment details on our servers, ensuring maximum security
          for every transaction.
        </p>

        <h2>Cookies & Tracking</h2>
        <p>
          Our website uses cookies to enhance your browsing experience and understand how visitors
          interact with our site. Cookies help us improve performance and personalize content.
          You may disable cookies through your browser settings if you prefer.
        </p>

        <h2>Data Protection</h2>
        <p>
          We take appropriate technical and organizational measures to protect your personal
          information against unauthorized access, loss, or misuse. Only authorized personnel
          have access to sensitive data.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of your personal
          information at any time. If you have questions or requests regarding your data,
          please contact our support team.
        </p>

        <h2>Policy Updates</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices.
          Any updates will be posted on this page. Continued use of our website indicates
          acceptance of these changes.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how your information is handled,
          please contact us at <strong>sales@watchexpressions.com</strong>.
        </p>
      </section>
    </main>
  );
}
