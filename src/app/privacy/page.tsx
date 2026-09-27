import { ShieldCheck, Lock, EyeOff, Key } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn how Dev Fashion protects your personal information, design copyrights, and measurement records securely and confidentially.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-gold-50/50 py-12 sm:py-16 border-b border-gold-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-2">
            ✦ Safe & Confidential
          </span>
          <h1 className="font-serif text-3xl font-bold tracking-wide text-stone-950 mb-3">
            Privacy Policy
          </h1>
          <div className="h-[1.5px] w-16 bg-gold-500 mx-auto" />
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-700 text-sm leading-relaxed space-y-8">
        
        {/* Highlight Alert Box */}
        <div className="bg-gold-50/50 border border-gold-250/70 p-6 flex gap-4 items-start">
          <ShieldCheck className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif font-bold text-stone-950 text-base mb-1">
              Customer Privacy is Our Highest Priority
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm">
              We understand that your measurement records, design sketches, and personal details are confidential. We employ strict digital security and store-level protocols to protect your information.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            1. Protected Measurement Records
          </h2>
          <p>
            Your physical and virtual measurement profiles are recorded onto secure digital client cards. These logs are strictly accessible only by your assigned master tailor and styling designer. We never sell, lease, or share your measurements with third-party entities under any circumstances.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            2. Confidential Design Discussions
          </h2>
          <p>
            Any reference images, customized drawings, necklines sketches, or fabric swatches you share during consultations are treated as proprietary lookbook files. We protect your custom bridal designs and special event details to maintain uniqueness for your occasion.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <Key className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            3. Safe Online Communication & Transactions
          </h2>
          <p>
            All online booking forms and messages sent via our website or direct WhatsApp links are handled over secure SSL/TLS channels. We do not store financial payment card details on our local servers. All invoices are generated securely via authorized, compliant merchant services.
          </p>
        </div>

        <div className="space-y-4 border-t border-gold-150 pt-8">
          <h2 className="font-serif text-xl font-bold text-stone-900">
            4. Contacting Us
          </h2>
          <p>
            If you have questions about our privacy policy, wish to update your measurement records, or request deletion of your client profile, please email us at <a href="mailto:privacy@devfashion.com" className="text-gold-650 hover:underline">privacy@devfashion.com</a> or call our customer service helpdesk.
          </p>
        </div>

        {/* Date Stamp */}
        <div className="text-xs text-stone-400 pt-6">
          Last Updated: June 15, 2026
        </div>
      </section>
    </div>
  );
}
