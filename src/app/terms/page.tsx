import { FileText, RotateCcw, AlertTriangle, Truck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "Read the service terms, complimentary alterations timelines, measurement liabilities, fabric care guidelines, and international delivery rules of Dev Fashion.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-gold-50/50 py-12 sm:py-16 border-b border-gold-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-2">
            ✦ Studio Guidelines
          </span>
          <h1 className="font-serif text-3xl font-bold tracking-wide text-stone-950 mb-3">
            Terms & Conditions
          </h1>
          <div className="h-[1.5px] w-16 bg-gold-500 mx-auto" />
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-700 text-sm leading-relaxed space-y-8">
        
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            1. Bespoke Tailoring & Measurement Liabilities
          </h2>
          <p>
            Every custom blouse, wedding lehenga, and suit is designed and stitched based on unique measurements. 
            For measurements taken in person by our stylists at our studio, Dev Fashion assumes complete responsibility for matching those specifications. 
            For measurements provided virtually or measured by the client at home, the client assumes responsibility for the accuracy of the dimensions provided. We provide detailed guidelines and virtual video calls to minimize any discrepancies.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            2. Complimentary Alterations Policy
          </h2>
          <p>
            To ensure your complete satisfaction, we offer complimentary fitting adjustments and minor alterations within fifteen (15) days of product pick-up or shipment delivery. 
            Alterations requested beyond this 15-day period, or alterations involving significant design modifications (changing necklines, adding heavy embroidery after cutting, or restyling silhouettes) may incur additional material and labor fees.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <Truck className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            3. Turnaround Timelines & Delivery
          </h2>
          <p>
            Our standard stitching timeline is 7-10 business days, and 3-6 weeks for bridal wear. These timelines are estimates. 
            While we make every effort to meet delivery deadlines, Dev Fashion is not liable for delayed deliveries due to courier issues, severe weather, or custom clearance delays for international shipments. 
            Any import duties, customs taxes, or local charges levied in the destination country are the sole responsibility of the client.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-gold-600 stroke-[1.5]" />
            4. Fabric Limitations & Care Recommendations
          </h2>
          <p>
            Custom embroidery details, silk fabrics, zardozi work, and velvet garments are delicate. We strongly recommend <strong>Professional Dry Clean Only</strong> for all custom-tailored designer wear. Dev Fashion is not responsible for damage resulting from handwashing, machine washing, ironing at high temperatures, or color bleeding of delicate handlooms.
          </p>
        </div>

        <div className="space-y-4 border-t border-gold-150 pt-8">
          <h2 className="font-serif text-xl font-bold text-stone-900">
            5. Design Approvals
          </h2>
          <p>
            Design layout diagrams and embroidery sketches sent via email or WhatsApp must be reviewed and approved by the client before cutting. Once a design is approved and fabric cutting has commenced, cancelations or refunds cannot be processed.
          </p>
          <p className="mt-4">
            If you need to discuss a design modification, please contact our helpline immediately at <a href="tel:+919025751328" className="text-gold-650 hover:underline">+91 98765 43210</a>.
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
