export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Cookie Policy</h1>
          <div className="space-y-8">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">1. What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
                They help us make your visit to our site better and provide personalized features.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">2. How We Use Cookies</h2>
              <p className="text-muted-foreground">We use cookies for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Essential website functionality</li>
                <li>Analyzing site traffic and user behavior</li>
                <li>Personalizing content and advertisements</li>
                <li>Remembering your preferences</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">3. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements (including Google AdSense)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                We use services like Google AdSense that may set their own cookies. These third-party services are used for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Advertising personalization</li>
                <li>Analytics and performance tracking</li>
                <li>Social media integration</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">5. Managing Cookies</h2>
              <p className="text-muted-foreground">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
                computer and you can set most browsers to prevent them from being placed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our cookie policy, please contact us at:
              </p>
              <p className="text-muted-foreground">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 