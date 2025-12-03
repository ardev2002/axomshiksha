export const metadata = {
  title: "Terms & Conditions | AxomShiksha",
  description: "Read the terms and conditions for using AxomShiksha.",
};

export default function TermsAndConditionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="text-muted-foreground mb-6">
        Welcome to AxomShiksha. By accessing or using our website, services, or
        content, you agree to be bound by the following terms and conditions.
        Please read them carefully.
      </p>

      <div className="space-y-8 mt-8">
        <div className="border-l-4 border-violet-500 pl-4 py-1">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mt-2">
            By using this website, you confirm that you accept these terms and agree
            to comply with them. If you do not agree, you must not use our site.
          </p>
        </div>

        <div className="border-l-4 border-violet-500 pl-4 py-1">
          <h2 className="text-xl font-semibold">2. Use of Content</h2>
          <p className="text-muted-foreground mt-2">
            All content provided on AxomShiksha is for educational and informational
            purposes only. You may not copy, distribute, or modify our content
            without permission.
          </p>
        </div>

        <div className="border-l-4 border-violet-500 pl-4 py-1">
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <p className="text-muted-foreground mt-2">
            You agree not to misuse our services or engage in any activity that may
            harm the platform or other users.
          </p>
        </div>

        <div className="border-l-4 border-violet-500 pl-4 py-1">
          <h2 className="text-xl font-semibold">4. Limitation of Liability</h2>
          <p className="text-muted-foreground mt-2">
            We are not responsible for any damages arising from the use of our
            website. All information is provided "as is" without warranty.
          </p>
        </div>

        <div className="border-l-4 border-violet-500 pl-4 py-1">
          <h2 className="text-xl font-semibold">5. Changes to Terms</h2>
          <p className="text-muted-foreground mt-2">
            We may update these terms from time to time. Continued use of the site
            means you accept the updated terms.
          </p>
        </div>
      </div>

      <div className="mt-12 p-6 bg-card border border-violet-200/50 dark:border-violet-800/50 rounded-2xl">
        <p className="text-center">
          If you have questions, contact us at{" "}
          <a 
            href="mailto:contact@axomshiksha.com" 
            className="text-violet-600 dark:text-violet-400 hover:underline"
          >
            contact@axomshiksha.com
          </a>
        </p>
      </div>
    </div>
  );
}