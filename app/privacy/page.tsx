export const metadata = {
  title: "Privacy Policy | AxomShiksha",
  description: "Learn how AxomShiksha collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-invert">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p>
        At AxomShiksha, your privacy is important to us. This policy explains how
        we collect, use, and safeguard your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-8">1. Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address,
        usage data, and cookies to improve user experience.
      </p>

      <h2 className="text-xl font-semibold mt-8">2. How We Use Your Data</h2>
      <p>
        Your data helps us enhance our services, communicate with you, and
        provide personalized educational content.
      </p>

      <h2 className="text-xl font-semibold mt-8">3. Cookies</h2>
      <p>
        We may use cookies to enhance browsing experience and analyze usage.
        You can disable cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8">4. Third-Party Services</h2>
      <p>
        We may use third-party tools (like analytics or email services) which
        may collect limited information according to their own policies.
      </p>

      <h2 className="text-xl font-semibold mt-8">5. Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your personal
        information at any time.
      </p>

      <h2 className="text-xl font-semibold mt-8">6. Updates to Policy</h2>
      <p>
        This Privacy Policy may be updated occasionally. Continued use of our
        site indicates acceptance of the updated policy.
      </p>

      <p className="mt-8">
        For questions or concerns, contact{" "}
        <span className="text-primary">contact@axomshiksha.com</span>.
      </p>
    </div>
  );
}