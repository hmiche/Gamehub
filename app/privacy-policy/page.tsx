export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
          <div className="space-y-8">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">1. Information We Collect</h2>
              <p className="text-muted-foreground">At {process.env.NEXT_PUBLIC_SITE_NAME}, we collect and process the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Information you provide directly (name, email, etc.)</li>
                <li>Usage data and game preferences</li>
                <li>Device information (browser type, IP address)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and maintain our gaming services</li>
                <li>Improve user experience and game performance</li>
                <li>Analyze usage patterns and optimize our platform</li>
                <li>Display relevant, personalized advertisements</li>
                <li>Communicate important updates and announcements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">3. Advertising</h2>
              <p className="text-muted-foreground">
                We use Google AdSense to display advertisements. These ads may use cookies to personalize content
                and measure effectiveness. You can learn more about Google`s practices at
                <a href="https://policies.google.com/technologies/ads" className="text-[#1864ab] hover:underline ml-1">
                  Google Ads Policy
                </a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">4. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</li>
                <li>Support: {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 