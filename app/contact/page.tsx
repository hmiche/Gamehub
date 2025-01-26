export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded border bg-background"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded border bg-background"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 rounded border bg-background"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 rounded border bg-background"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#1864ab] text-white py-2 px-4 rounded hover:bg-[#1864ab]/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Email Us</h2>
            <p className="text-muted-foreground">
              support@yourgamesite.com
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Twitter: @YourGameSite</p>
              <p>Discord: discord.gg/yourgamesite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 