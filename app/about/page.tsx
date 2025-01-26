import { FaGamepad, FaUsers, FaLightbulb, FaTrophy } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Welcome to {process.env.NEXT_PUBLIC_SITE_NAME}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your premier destination for HTML5 gaming entertainment, where passion for gaming meets 
          cutting-edge technology.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-card p-6 rounded-lg shadow-lg text-center">
          <div className="bg-[#1864ab]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaGamepad className="w-8 h-8 text-[#1864ab]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Curated Games</h3>
          <p className="text-muted-foreground">
            Carefully selected games ensuring quality and entertainment value.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-lg text-center">
          <div className="bg-[#1864ab]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUsers className="w-8 h-8 text-[#1864ab]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Community First</h3>
          <p className="text-muted-foreground">
            Built around our passionate gaming community.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-lg text-center">
          <div className="bg-[#1864ab]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaLightbulb className="w-8 h-8 text-[#1864ab]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-muted-foreground">
            Constantly updating our platform with the latest gaming technology.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-lg text-center">
          <div className="bg-[#1864ab]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaTrophy className="w-8 h-8 text-[#1864ab]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality First</h3>
          <p className="text-muted-foreground">
            Only the best games make it to our platform.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-card p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
          To provide an exceptional gaming experience that brings together players from around the world. 
          We believe in creating a platform where everyone can enjoy high-quality games, connect with 
          fellow gamers, and discover new gaming experiences.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</li>
            <li>Support: {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</li>
          </ul>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Twitter: {process.env.NEXT_PUBLIC_TWITTER_HANDLE}</li>
            <li>Discord: {process.env.NEXT_PUBLIC_DISCORD_INVITE}</li>
            <li>Facebook: {process.env.NEXT_PUBLIC_FACEBOOK_URL}</li>
            <li>Instagram: {process.env.NEXT_PUBLIC_INSTAGRAM_URL}</li>
          </ul>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p className="text-muted-foreground">
            We`re a global company with team members working remotely across the world to bring you 
            the best gaming experience possible.
          </p>
        </div>
      </div>
    </div>
  );
} 