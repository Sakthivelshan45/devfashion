import { Truck, PackageCheck, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Shipping & Delivery Policy",
  description:
    "Learn about Dev Fashion's shipping, order processing, delivery timelines, and order handling.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="w-full bg-white pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-gold-50/50 py-12 sm:py-16 border-b border-gold-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-2">
            ✦ Carefully Prepared & Delivered
          </span>

          <h1 className="font-serif text-3xl font-bold tracking-wide text-stone-950 mb-3">
            Shipping & Delivery Policy
          </h1>

          <div className="h-[1.5px] w-16 bg-gold-500 mx-auto" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-700 text-sm leading-relaxed space-y-8">

        {/* Highlight Alert Box */}
        <div className="bg-gold-50/50 border border-gold-250/70 p-6 flex gap-4 items-start">
          <PackageCheck className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />

          <div>
            <h4 className="font-serif font-bold text-stone-950 text-base mb-1">
              Your Order, Prepared With Care
            </h4>

            <p className="text-stone-600 text-xs sm:text-sm">
              Every Dev Fashion order is carefully checked, packed, and
              prepared before it leaves our boutique. We work to ensure your
              outfit reaches you safely and in excellent condition.
            </p>
          </div>
        </div>

        {/* 1. Order Processing */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            1. Order Processing
          </h2>

          <p>
            Once your order is confirmed, our team begins preparing your
            outfit for dispatch. Ready-to-ship products are generally
            dispatched within <strong>2–4 business days</strong>.
          </p>

          <p>
            Made-to-order, customised, or specially tailored outfits may
            require additional preparation time. The estimated preparation
            period will be communicated at the time of purchase whenever
            applicable.
          </p>

          <p>
            Orders are processed on business days, excluding Sundays and
            public holidays.
          </p>
        </div>

        {/* 2. Delivery Timeline */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <Truck className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            2. Delivery Timeline
          </h2>

          <p>
            Delivery times depend on your location and the courier service
            used. For deliveries within India, orders generally arrive within
            <strong> 3–7 business days after dispatch</strong>.
          </p>

          <p>
            Customers in remote or extended-service areas may experience
            additional delivery time. Delivery estimates may also be affected
            by weather conditions, public holidays, courier delays, or other
            circumstances beyond our control.
          </p>
        </div>

        {/* 3. Shipping Charges */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <PackageCheck className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            3. Shipping Charges
          </h2>

          <p>
            Applicable shipping charges will be displayed at checkout before
            you complete your purchase.
          </p>

          <p>
            From time to time, Dev Fashion may offer free shipping on selected
            orders or during promotional periods. Any applicable shipping
            offer will be clearly mentioned on our website.
          </p>
        </div>

        {/* 4. Order Tracking */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <Truck className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            4. Order Tracking
          </h2>

          <p>
            Once your order has been dispatched, available tracking
            information will be shared through your registered contact
            details.
          </p>

          <p>
            You can use the tracking information provided to follow the
            progress of your shipment until it reaches you.
          </p>
        </div>

        {/* 5. Delivery Address */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            5. Delivery Address
          </h2>

          <p>
            Please ensure that your shipping address, phone number, and other
            contact details are entered correctly when placing your order.
          </p>

          <p>
            Dev Fashion cannot be held responsible for delays or unsuccessful
            deliveries resulting from incorrect or incomplete address details
            provided by the customer.
          </p>

          <p>
            If you notice an error in your delivery information, please
            contact us as soon as possible. We will do our best to assist you
            before your order is dispatched.
          </p>
        </div>

        {/* 6. Delayed Deliveries */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            6. Delayed Deliveries
          </h2>

          <p>
            While we work closely with our delivery partners to ensure timely
            delivery, unexpected delays may occasionally occur due to:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Severe weather conditions</li>
            <li>Public holidays</li>
            <li>Courier or logistics disruptions</li>
            <li>Remote delivery locations</li>
            <li>Incorrect or incomplete address information</li>
            <li>Other circumstances beyond our reasonable control</li>
          </ul>

          <p>
            If your order is significantly delayed, please contact us and our
            team will assist you in checking the status of your shipment.
          </p>
        </div>

        {/* 7. Damaged or Incorrect Orders */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <PackageCheck className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            7. Damaged or Incorrect Orders
          </h2>

          <p>
            Every order is carefully inspected and packaged before dispatch.
            If your package arrives damaged, or if you receive an incorrect or
            incomplete item, please contact us within{" "}
            <strong>48 hours of delivery</strong>.
          </p>

          <p>
            To help us resolve the issue, please provide your order number,
            clear photographs of the package and product, and a brief
            description of the issue.
          </p>

          <p>
            Our team will review the matter and assist you with the appropriate
            resolution.
          </p>
        </div>

        {/* 8. International Shipping */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            8. International Shipping
          </h2>

          <p>
            If international shipping is available for your order, shipping
            charges and delivery timelines may vary depending on the
            destination country.
          </p>

          <p>
            Customs duties, import taxes, or other charges imposed by the
            destination country may be the responsibility of the customer,
            unless otherwise stated at checkout.
          </p>

          <p>
            International deliveries may take additional time due to customs
            clearance and local delivery procedures.
          </p>
        </div>

        {/* 9. Contact Us */}
        <div className="space-y-4 border-t border-gold-150 pt-8">
          <h2 className="font-serif text-xl font-bold text-stone-900">
            9. Contacting Us
          </h2>

          <p>
            If you have questions about your order, shipping, or delivery,
            please contact us at{" "}
            <a
              href="mailto:info@devfashion.com"
              className="text-gold-650 hover:underline"
            >
              info@devfashion.com
            </a>{" "}
            or contact our customer service team.
          </p>

          <p>
            We are committed to making your Dev Fashion experience special
            from the moment you place your order to the moment it arrives at
            your doorstep.
          </p>
        </div>

        {/* Date Stamp */}
        <div className="text-xs text-stone-400 pt-6">
          Last Updated: September 22, 2026
        </div>
      </section>
    </div>
  );
}