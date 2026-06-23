import { ShieldCheck, Lock, EyeOff, MailCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Data Protection",
  description: "Read our privacy policy to understand how Suasion Group handles and protects your personal inquiries and contact information.",
};

export default function Privacy() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
          Privacy Assurance
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy">
          Privacy Policy
        </h1>
      </div>

      <div className="bg-white rounded-xl border border-gold/15 p-8 space-y-8 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
        
        <p className="text-sm font-medium text-navy">
          Last Updated: June 23, 2026
        </p>

        <p>
          At Suasion Group, we are committed to safeguarding the privacy and confidentiality of our clients, prospects, and website visitors. This privacy policy explains what data we collect, how we store and process it, and your rights regarding your personal information.
        </p>

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-base font-serif font-bold text-navy flex items-center gap-2">
            <Lock className="h-4.5 w-4.5 text-gold shrink-0" />
            1. Information We Collect
          </h2>
          <p>
            We collect personal information that you voluntarily provide to us when you submit forms on our website, such as:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Inquiry Details:</strong> Name, phone number, email address, city, preferred contact method, and message details when submitting a general or service inquiry.</li>
            <li><strong>Newsletter Subscriptions:</strong> Email address when subscribing to our financial insights newsletter.</li>
            <li><strong>Contact Submissions:</strong> Name, phone, email, and message content when using general contact forms.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-base font-serif font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-gold shrink-0" />
            2. Purpose of Collection & Storage
          </h2>
          <p>
            We use your data strictly for the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>To process and respond to your borrowing, protection, real estate, or wealth management inquiries.</li>
            <li>To contact you via your preferred communication channel (Phone, Email, or WhatsApp) for scheduled consultations.</li>
            <li>To deliver monthly financial newsletters (you may unsubscribe at any time).</li>
          </ul>
          <p>
            All submitted inquiries are stored securely in our centralized PostgreSQL database. Access to this database is limited strictly to authorized directors and client relationship managers.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-base font-serif font-bold text-navy flex items-center gap-2">
            <EyeOff className="h-4.5 w-4.5 text-gold shrink-0" />
            3. No Unauthorized Sharing
          </h2>
          <p>
            We hold client trust in high regard. <strong>We do not sell, rent, trade, or share your personal information</strong> with any third-party marketing companies. Your details are shared with our verified corporate insurance partners (Bajaj Allianz, LIC, Aditya Birla) only after your explicit consent and during formal policy application cycles.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-base font-serif font-bold text-navy flex items-center gap-2">
            <MailCheck className="h-4.5 w-4.5 text-gold shrink-0" />
            4. Your Rights (Update & Deletion)
          </h2>
          <p>
            You have the right to request a copy of the personal data we hold about you. Furthermore, you may request us to update, correct, or permanently delete your contact information from our active databases. 
          </p>
          <p>
            To exercise these rights, please contact our data manager at: <a href="mailto:info@suasion.in" className="text-navy hover:text-gold font-bold transition-colors">info@suasion.in</a>. We will process your request within 48 business hours.
          </p>
        </div>

      </div>

    </div>
  );
}
