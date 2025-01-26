export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
          <div className="space-y-8">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using {process.env.NEXT_PUBLIC_SITE_NAME}, you agree to be bound by these Terms of Service
                and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">2. Game Content</h2>
              <p className="text-muted-foreground">All games on our platform are either:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Original content created by {process.env.NEXT_PUBLIC_SITE_NAME}</li>
                <li>Licensed through proper agreements with game developers</li>
                <li>Provided with appropriate permissions and attributions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">3. User Conduct</h2>
              <p className="text-muted-foreground">Users agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Copy or redistribute game content without permission</li>
                <li>Modify or create derivative works of our games</li>
                <li>Use the platform for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the service or servers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">4. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</li>
                <li>Support: {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</li>
              </ul>
              <div className="mt-4">
                <p className="text-muted-foreground">Follow us on social media:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Twitter: {process.env.NEXT_PUBLIC_TWITTER_HANDLE}</li>
                  <li>Discord: {process.env.NEXT_PUBLIC_DISCORD_INVITE}</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 