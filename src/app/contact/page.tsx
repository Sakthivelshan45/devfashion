import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Contact & Book Consultation",
  description: "Schedule your in-person or virtual tailoring consultation. Get address directions to our Coimbatore boutique and direct styling support details.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white pt-24">
      {/* Page Header */}
      <section className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-fixed bg-no-repeat" 
      style={{
        backgroundImage: "url('/images/dev_fashion/lan_bls25.jpg')",
      }}>


     {/* Dark/white overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
          ✦ Get In Touch
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
          Contact & Consultation
        </h1>
        
        <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">Comments/questions? We'd love to hear from you!</p>

        <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

        <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        Pop in for a visit at our Coimbatore boutique or jump on a quick video call with us — 
        our stylists would love to help you find your perfect fit.
        </p>
      </div>






        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
            ✦ Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-stone-950 mb-6">
            Contact & Consultation
          </h1>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pop in for a visit at our Coimbatore boutique or jump on a quick video call with us — our stylists would love to help you find your perfect fit.
          </p>
        </div> */}



      </section>

      {/* Main Content: Info & Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-wide mb-4">
                Dev Fashion Bridel Blouse Designer & Boutique Studio 🪡
              </h2>
              <div className="h-[1px] w-12 bg-gold-500 mb-6" />
              <p className="text-stone-600 text-sm leading-relaxed">
                Reach out to us for anything you need — whether it's custom stitching, wedding blouse designs, taking your measurements or getting alterations done, we've got you covered.
              </p>
            </div>

            {/* List Details */}
            <div className="space-y-6 text-sm text-stone-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-950 mb-1">Our Location</h4>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    No.37, 9th Street,<br />
                    Tatabad, Gandhipuram, Coimbatore<br />
                    TamilNadu 641012, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-950 mb-1">Direct Call</h4>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    <a href="tel:+919025751328" className="hover:text-gold-600 transition-colors font-medium">+91 80985 58923</a>
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Styling inquiries & alterations follow-up, We're just a call/message away.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-950 mb-1">Send Email</h4>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    <a href="mailto:contact@devfashion.com" className="hover:text-gold-600 transition-colors font-medium">contact@devfashion.com</a>
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Business partnerships & bridal lookbook inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-950 mb-1">Operating Hours</h4>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Monday - Saturday: 8:00 AM - 9:00 PM<br />
                    Sunday: 11:00 AM - 5:00 PM (Appointments Only)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA Card */}
            <div className="bg-gold-50/50 border border-gold-250/65 p-6 relative overflow-hidden">
              <h4 className="font-serif text-lg font-semibold text-stone-900 mb-2">Need Instant Answers?</h4>
              <p className="text-stone-500 text-xs leading-relaxed mb-4">
                Chat directly with our styling team on WhatsApp for price estimates, fabric suggestions and quick slot confirmations.
              </p>
              <a
                href="https://wa.me/919025751328?text=Hi%20Dev%20Fashion%2C%20I%20have%20a%20tailoring%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-gold-600 text-white hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Chat with Stylist
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 scroll-mt-24" id="booking">
            <BookingForm />
          </div>

        </div>
      </section>

      {/* Google Maps Integration Section */}
      <section className="w-full border-t border-gold-150 relative h-[450px] bg-stone-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2334044079093!2d76.96140750957036!3d11.02110698909764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859e23b869429%3A0x2852f671c5d9772e!2sDev%20Bridal%20Blouse%20Designer!5e0!3m2!1sen!2sin!4v1781601054595!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dev Fashion Google Maps Location"
          id="google-maps-iframe"
        />
      </section>
    </div>
  );
}
