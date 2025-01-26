export default function Copyright() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Copyright & DMCA Policy</h1>
          <div className="space-y-8">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">1. Copyright Notice</h2>
              <p className="text-muted-foreground">
                The content on {process.env.NEXT_PUBLIC_SITE_NAME} is protected by copyright laws. All rights are reserved 
                to their respective owners.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">2. DMCA Compliance</h2>
              <p className="text-muted-foreground">
                We respect intellectual property rights and expect our users to do the same. If you believe your work has 
                been copied in a way that constitutes copyright infringement, please provide us with the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Description of the copyrighted work</li>
                <li>Location of the infringing material on our site</li>
                <li>Your contact information</li>
                <li>A statement of good faith belief</li>
                <li>A statement of accuracy under penalty of perjury</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1864ab]">3. Contact Information</h2>
              <p className="text-muted-foreground">
                DMCA notices can be sent to:
              </p>
              <p className="text-muted-foreground">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 