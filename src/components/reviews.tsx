

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa";
import ReviewsCarousel, { Stars, type Review } from "@/components/Reviewscarousel";

export const metadata = {
  title: "Customer Reviews",
  description:
    "Read what our customers say about Dev Fashion boutique: handcrafted bridal blouses, Aari embroidery and perfect-fit tailoring, delivered across India and 15+ countries.",
};


/* The numbers shown in the heading. Use your REAL Google numbers. */
const REVIEW_COUNT = "250+"; // placeholder
const GOOGLE_RATING = "4.9"; // placeholder

/* How long each review stays in the centre before the slider moves on */
const AUTOPLAY_SECONDS = 1.5;

/* Where "Read more on Google" goes.
   Best: open your business on Google Maps, click Share, copy the link. */
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Dev+Fashion+Bridal+Blouse+Designer+Coimbatore";

/* Optional "write a review" link (Google Business Profile > Ask for reviews).
   Leave "" to hide it. */
const GOOGLE_WRITE_URL = "";

/* Background image of the page heading */
const HEADER_IMAGE = "/images/dev_fashion/abt.png";

/* ================================================================== */
/*  2. YOUR REVIEWS (all names and reviews are placeholders)           */
/*                                                                     */
/*  photo: optional, e.g. "/images/dev_fashion/ammu.jpeg"              */
/*         The file name must match EXACTLY, including capital         */
/*         letters (the live server is case-sensitive).                */
/*         Best photo: a clear, front-facing face, at least 300x300.   */
/*         Without a photo, the customer's initials are shown.         */
/* ================================================================== */
const reviews: Review[] = [
  {
    name: "Nisha Balachandra",
    location: "Coimbatore",
    rating: 5,
    photo: "/images/reviews/nisha_rw.png",
    text: "Dev Tailor Durga is incredibly talented and has an amazing eye for bridal blouse designs. She understands exactly what suits you and creates beautiful patterns with perfect stitching. Once you give her your measurements, you never have to worry about the fit, it’s always perfect. She is also very reliable and delivers on time, even when you need it urgently. I’m extremely happy with her work and am already looking forward to getting my next lot of salwars stitched by her. Highly recommended 🎉✌️❤️",
  },
  {
    name: "SNEGHA R",
    location: "coimbatore, IN",
    rating: 5,
    photo: "/images/reviews/",
    text: "Absolutely loved the blouse. The fitting is perfect and very comfortable. The embroidery work is neat and beautifully finished. The stitching is excellent and the blouse looks exactly like the pictures which I gave as reference. Very happy. Highly Satisfied.",
  },
  {
    name: "Dishyantha B",
    location: "Chennai",
    rating: 5,
    photo: "/images/reviews/Dishyantha.png",
    text: "Best customer service and I liked the blouse stitching and ari work.I liked the designs of the blouse.It was same as I mentioned.I thank Dev mam for being much customer friendly and on time delivery actually before one day.Thank you for the service.",
  },
  {
    name: "Subiksha Manoharan",
    location: "Coimbatore",
    rating: 5,
    photo: "/images/reviews/",
    text: "I got my engagement blouse stitched at Dev Fashions and the blouse fitting and design came out so beautifully ❤️ Everyone kept complimenting it and saying the same too. I absolutely loved how perfectly it fit and how elegant the design looked. Also, thank you so much for delivering it on time that made the whole experience even better. Truly happy and satisfied with your work 😊",
  },
  {
    name: "Aashika Prasad",
    location: "Bengaluru",
    rating: 5,
    photo: "/images/reviews/",
    text: "An absolute gem of a find! We started giving our blouses here for other occasions a few months ago and because of their flawless work, we chose them for my marriage and reception outfits as well. Each and every blouse turns out to be a masterpiece with consistent quality and premium finishing. Finding a tailor you can blindly trust for your wedding is rare and they are truly the best!",
  },
  {
    name: "Prathiba Nair",
    location: "London, UK",
    rating: 5,
    photo: "/images/reviews/prathipa.png",
    text: "I went in looking just to get some function blouses stitched, little did I know that I would comd back home with a whole luggage of stiched blouses and salwars. The stitching is exceptional and delivered on time! Durga also suggested different patterns patiently and catered for what I need.What I loved was how Dev fashions was a one stop shop. Durga was happy to go shopping for me and buy some of the blouse materials in my preferred colour. She also made sure she was there when I came to pick up the blouses to ensure she could fix any issues when I tried them on. Overall ir has been an amazing experience and so glad I found her.Highly recommend Dev fashions!",
  },
  {
    name: "Puja Prasad",
    location: "Singapore",
    rating: 5,
    text: "Got a few blouses stitched here and loved all of them! The stitching, designs and embroidery work are really neat and the fitting always comes out perfect. We found this shop a few months ago and now it’s our regular place for blouses for every occasion.",
  },
  {
    name: "Acshaya Narayanan",
    location: "Tiruppur",
    rating: 5,
    photo: "/images/reviews/Acshaya.png",
    text: "I had my reception blouse designed and stitched at Dev Fashion, and the entire experience exceeded my expectations. From understanding my ideas to executing every little detail so neatly, their work truly stood out. The blouse turned out stunning and fit me perfectly, which made me feel so confident and happy on my special day. What impressed me most was their patience, creativity, and commitment to quality. Everything was completed right on schedule, and the final result was simply beautiful. I’m genuinely thankful for the effort they put into making my outfit so special — highly recommended!",
  },
  {
    name: "Ashitha Nair",
    location: "Coimbatore",
    rating: 5,
    text: "I gave my bridal blouse and my mom's blouse for stitching and aari work here and I am so impressed by their work, they gave us exactly what we asked for and in a week's time! Really happy with the service.",
  },
  {
    name: "Nivaetha",
    location: "Coimbatore",
    rating: 5,
    photo:"/images/reviews/Nivaetha,png",
    text: "I totally loved the work, and the fit was perfect! Even though I reached out at the last minute, they delivered excellent work right on time. Everything was handled professionally, and the timing was absolutely perfect.",
  },
  {
    name: "beaula selwyn",
    location: "coimbatore",
    rating: 5,
    photo: "/images/reviews/",
    text: "Had a great experience stitching my blouse at Dev Fashions! Truly appreciate Durga for delivering the blouse on very short notice. I had approached her a day before one of my important events, she agreed to stitch my blouse in a day and delivered it on time. The fit was amazing. Would highly recommended!",
  },
  {
    name: "Vikki M. Kumar",
    location: "Chennai",
    rating: 5,
    photo: "/images/reviews/Vikki.webp",
    text: "I had a great experience with bridal blouse stitching. The design turned out exactly how I wanted and it was a perfect fit. Highly recommend Durga & her design team for their work!",
  },
  {
    name: "Keerthi Balachandar",
    location: "coimbatore",
    rating: 5,
    photo: "/images/reviews/Keerthi.png",
    text: "Appreciate awesome work done for my blouse and my daughter’s frock. Both are sooo prefect, final output crossed my expectation. Chose of my daughter’s dress material was great, she was comfortable with the silk dress for the whole day.We got lot of compliments from relatives and friends. Extremely happy to work with you in future. Thank you for the wonderful work and best wishes to you and the team!",
  },
  {
    name: "lakshmi praba",
    location: "Bengaluru",
    rating: 5,
    text: "I got my wedding reception blouse stitched at Dev Fashion, and I must say, it was absolutely mind-blowing! They recreated the design I showed them with even more beauty and elegance than I imagined. The fitting was flawless — perfect in every way. I truly appreciate the passion and dedication they put into their work. The on-time delivery was another big plus. Overall, I had a wonderful experience. Thank you so much 😊, and keep up the amazing work!",
  },
  {
    name: "praveena paru",
    location: "coimbatore, IN",
    rating: 5,
    photo: "/images/reviews/praveena.png",
    text: "I am extremely satisfied with the stitching of my marriage blouse. It came out exactly as I imagined. Thank you for your wonderful work ,timely delivery and making my special day even more special. I gave measurements from outside the country and provided my measurements online. Even then, the blouse came out perfectly with an excellent fit.❤️",
  },
  {
    name: "Sakthi Bawadaarini",
    location: "coimbatore",
    rating: 5,
    photo: "/images/reviews/Sakthi_Bawadaarini.png",
    text: "Very good designer, very responsive. She goes out of the box to satisfy her clients. I am very happy that I got all my wedding blouses stitched from her. Couldn't have asked for more.",
  },
  {
    name: "Nandhu NS",
    location: "Tiruppur",
    rating: 5,
    photo: "/images/reviews/Nandhu.png",
    text: "Full-figured and Fabulous indeed! I just got my order and I LOVE everything! Well-made, flattering and reasonably priced. Great service, Great clothes and FAST delivery. You can blindly trust Dev fashion bridal blouse for sure.",
  },
  {
    name: "Swathi sweto",
    location: "coimbatore",
    rating: 5,
    // photo: "/images/reviews/Nandhu.png",
    text: "From the moment I walked into your store to the final fitting,the experience was nothing short of exceptional.The stitching of my cloths truly exceeded my expectations.The precious in measurements and the over all fit of the garments were impeccable. And the aari work on the blouse is nothing short of a masterpiece.",
  },
  {
    name: "Mary Priscilla",
    location: "coimbatore",
    rating: 5,
    photo: "/images/reviews/Mary_Priscilla.png",
    text: "I had a great experience with Dev designers! The blouse was designed exactly how I wanted it — elegant, perfectly fitted, and with such beautiful aari work. Every detail was so perfectly done. The fit was absolutely on point, and I didn’t need a single alteration. I’m so happy with how it turned out and received so many compliments. Highly recommend for anyone looking for quality, precision, and graceful designs!",
  },
  {
    name: "RajaPreethi T",
    location: "Tiruppur",
    rating: 5,
    photo: "/images/reviews/RajaPreethi.png",
    text: "I had given two of my blouses and my daughter’s Pattu pavadai. Durga did a fabulous work for us. Actually I haven’t been to her shop in person . Design selection, measurement all done in online . Fitting of blouse s perfect and finishing s soo good. My daughter’s Pattu pavadai also wonderful. It fit her so well and the fleats were looking very nice .Thank u DEV FASHION for our wonderful and memorable outfit🙏😊",
  },
  {
    name: "Rajalekshmy M",
    location: "Erode",
    rating: 5,
    photo: "/images/reviews/Rajalekshmy.png",
    text: "Excellent stitching and Quick delivery . Thank you Durga Mam. I got my fav blouse design stitched with in 2 days of time. Best place for stitiching.",
  },
  {
    name: "Aathyra kathirvel",
    location: "Coimbatore",
    rating: 5,
    // photo: "/images/reviews/Nandhu.png",
    text: "I recently got my outfit stitched and designed here, and I couldn't be happier with the result! The stitching is absolutely perfect—neat, clean, and holds the shape really well. There were no loose threads, and the finishing was super professional. As for the design, it was beyond what I expected! Elegant, well-thought-out, and tailored exactly to suit my body and style. The attention to detail, from the color choices to the little design elements, really made it stand out. I got so many compliments wearing it! Highly recommend this place for anyone looking for quality stitching and creative designing. Totally worth it! 💖✨",
  },
  {
    name: "Suguna V",
    location: "Tiruppur",
    rating: 5,
    // photo: "/images/reviews/Nandhu.png",
    text: "Absolutely loved our experience with Dev Fashion! We got a beautifully stitched blouse from them and it turned out even better than we expected. The fit was perfect, the finishing was neat, and the design matched our vision exactly. Their attention to detail and professionalism truly stood out. Highly recommend for anyone looking for elegant, custom-stitched outfits!",
  },
  {
    name: "Dharani R",
    location: "Coimbatore",
    rating: 5,
    // photo: "/images/reviews/Nandhu.png",
    text: "I had a wonderful experience with this tailoring shop! ❤️ They provided excellent fitting and beautiful finishing for both my blouse and my little one’s pattu pavadai, making them perfect for a marriage function. The customization process was smooth, and the design discussions were very friendly and comfortable. They patiently listened to my ideas, understood my preferences, and suggested lovely designs for both outfits. The pattu pavadai for my little girl turned out absolutely beautiful, with a perfect fit and elegant finishing. Their attention to detail, neat workmanship, and dedication to customer satisfaction are truly appreciable. I’m extremely happy with their work and highly recommend this shop to anyone looking for customized blouse designs, beautiful pattu pavadai, and perfect fitting. Definitely worth visiting! ✨❤️",
  },
  {
    name: "Rathna Sakthivel",
    location: "selam",
    rating: 5,
    photo: "/images/reviews/rathana_sakthi.jpeg",
    text: "The entire experience was 10/10! Working with Durga Devi was so nice, the design and fit is absolutely stunning! I’ve been wearing it for months and have gotten so many compliments. I love that it’s a woman owned brand and made here in the coimbatore. That doesn’t come often anymore. Can’t wait to get more Blouses!",
  },
  {
    name: "sowmiya rajasekaran",
    location: "Coimbatore",
    rating: 5,
    photo: "/images/reviews/sowmiya_rajasekaran.png",
    text: "The fitting was perfect and the aari work done was flawless. Thanks Durga!!",
  },
  {
    name: "Sindhuja Muthusamy",
    location: "Tiruppur",
    rating: 5,
    // photo: "/images/reviews/Nandhu.png",
    text: "Last month I had stitched my blouse with pattern....it's really superb... perfect fitting and quick delivery 🚚.... really trustable place dev fashion ❤️🥰 now I plan to another one blouse with aari wrk pattern ....😍",
  },
  {
    name: "Priya sasidharan",
    location: "Coimbatore",
    rating: 5,
    // photo: "/images/reviews/Nandhu.png",
    text: "Finally I found one perfect designer in coimbatore. Durga is extremely talented and friendly. She patiently listens to our requirement and shared ideas from her side. I felt very comfortable around her, just felt like my own sister ❤️ She is easily reachable. All my embroidery blouses and my daughter's pattu pavadai, lehengha looked great.. fitting was perfect.. Highly recommend for her extraordinary work and humble nature. Lastly, I felt the cost was also reasonable",
  },
  {
    name: "Akshara Mishra",
    location: "Coimbatore",
    rating: 5,
    // photo: "/images/reviews/Nandhu.png",
    text: "Durga is a hard worker who listens patiently, is very invested and understands exactly what you envision. It didn't take a lot of time for us to finalise the embroidery on the blouse, which turned out beautiful! Very happy with her attitude and service. She accomodated my request and gave my blouse in a short span of time.",
  },
  {
    name: "keerthana G",
    location: "coimbatore",
    rating: 5,
    photo: "/images/reviews/keerthana.png",
    text: "I stitched two blouses for this shop, and the Ari work design was very nice. The stitching was also neat and well-fitted. They did extra work on the blouses at an affordable price. I really love their work. You must visit this shop ❤️.",
  },
  {
    name: "Ilamathi Kannan",
    location: "Gandhipuram",
    rating: 5,
    photo: "/images/reviews/Ilamathi.png",
    text: "I got my engagement blouses designed here....they made the blouse design exactly how I wanted, and got a lot of compliments from friends and family for the same. I am planning to get my wedding blouses also stitched here. Durga mam is very patient and excellent in her work",
  },
  {
    name: "Jayanthi Gunasekaran",
    location: "Neelambur",
    rating: 5,
    photo: "/images/reviews/Jayanthi.png",
    text: "I got my engagement blouses designed here....they made the blouse design exactly how I wanted, and got a lot of compliments from friends and family for the same. I am planning to get my wedding blouses also stitched here. Durga mam is very patient and excellent in her work",
  },
  {
    name: "Priya dharsini",
    location: "Coimbatore",
    rating: 5,
    photo: "/images/reviews/Priya_dharsini.png",
    text: "Thank u so much @Durga Mam (Dev Fashion). Blouse comes out really good. Lovely service and attention. Perfect finishing and timely delivery. Super happy with the service.",
  },
  {
    name: "Vaishnavi S",
    location: "Coimbatore",
    rating: 5,
    photo: "/images/reviews/Vaishnavi.png",
    text: "The blouse I stitched was so perfect with one time stitching and I didn't do any changes for second time ... And it's so lovely and good fit for me..",
  },
   {
    name: "Preethika Parasuraman",
    location: "Coimbatore",
    rating: 5,
    photo: "/images/reviews/Preethika.png",
    text: "Excellent work done 👍 the blouse fitting is too good and service is also nice",
  },
  
];

/* ---------- helpers (no need to touch) ---------- */
const delay = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties;

/* "Google" in Google's colours, as plain text */
function GoogleWord() {
  const letters = [
    ["G", "#4285F4"],
    ["o", "#EA4335"],
    ["o", "#FBBC05"],
    ["g", "#4285F4"],
    ["l", "#34A853"],
    ["e", "#EA4335"],
  ];
  return (
    <span className="font-semibold">
      {letters.map(([c, color], i) => (
        <span key={i} style={{ color }}>
          {c}
        </span>
      ))}
    </span>
  );
}

/* ---------- page animations: pure CSS ---------- */
const css = `
@keyframes gr-rise {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}

/* Heading text rises in when the page opens */
.gr-in { opacity: 0; animation: gr-rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) forwards; }

/* Sections fade up when you scroll to them (browsers without support just show them) */
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .gr-reveal {
      animation: gr-rise linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 45%;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .gr-in { opacity: 1; animation: none; }
}
`;

export default function ReviewsPage() {
  return (
    <div className="w-full bg-white pt-4">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ================= Page heading (with background image) ================= */}


        <section className="relative py-24 sm:py-50 border-b border-gold-100 text-center bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{
          backgroundImage: "url('/images/dev_fashion/abt.png')",
        }}>


        {/* Dark/white overlay */}
        <div className="absolute inset-0 bg-black/65" />

         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3"
            style={delay(0.1)}
          >
             ✦ Customer Reviews ✦
          </p>
          <h1
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white mb-6"
            style={delay(0.25)}
          >
            Kind words from the women we dress.
          </h1>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" style={delay(0.4)} />
          <p
            className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
            style={delay(0.55)}
          >

            Dev Fashion is trusted by women across India and 15+ countries. To all who have walked with us, 
            from our very first customers to our growing family today — you are the thread that keeps dev fashion alive as we weave the chapters ahead.
          </p>
        </div>
        
      </section>





      {/* ================= Google reviews slider ================= */}
      <section className="overflow-hidden py-16 sm:py-24">
        {/* Heading */}
        <div className="gr-reveal mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-medium leading-[1.25] text-stone-900 sm:text-5xl">
            Over <span className="font-bold">{REVIEW_COUNT}</span> reviews on
            <br />
            <GoogleWord /> from our{" "}
            <em className="font-serif font-normal italic">clients</em>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm font-semibold text-stone-800">
            <span>{GOOGLE_RATING}/5.0</span>
            <Stars n={5} className="h-4 w-4" />
          </div>
        </div>

        {/* Swipeable carousel: the centre review is bigger, endless loop */}
        <div className="gr-reveal mt-8 sm:mt-12">
          <ReviewsCarousel
            reviews={reviews}
            autoplaySeconds={AUTOPLAY_SECONDS}
            googleUrl={GOOGLE_REVIEWS_URL}
          />
        </div>

        {/* Google link + social icons */}
        <div className="mx-auto mt-5 flex flex-col items-center gap-5 px-4 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-800 underline decoration-gold-500 decoration-2 underline-offset-8 transition-colors hover:text-gold-600"
          >
            Read more on Google
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>

         <div className="flex gap-2">
                      <a
                        href="https://www.facebook.com/devblouse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex h-12 w-12 items-center justify-center text-[#3b5998] transition-colors hover:bg-[#3b5998] hover:text-white"
                      >
                        <FaFacebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/devfashion_bridalblouse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-12 w-12 items-center justify-center text-[#c13584] transition-colors hover:bg-[#c13584] hover:text-white"
                      >
                        <FaInstagram className="h-6 w-6" />
                      </a>
                    </div>
        </div>
      </section>

      {/* ================= Thank you + Google button ================= */}
      <section className="border-t border-gold-100 bg-stone-50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Photo, framed like the story image on your About page */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md border border-gold-300 bg-white p-3 shadow-xl">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/reviews/durga_google_review.png"
                alt="Durga Devi, founder of Dev Fashion"
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover object-[35%_center]"
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
              Thank you
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-wide text-stone-950 sm:text-5xl">
              Read every review on Google.
            </h2>
            <div className="my-6 h-px w-16 bg-gold-500" />
            <p className="max-w-lg text-sm leading-[1.9] text-stone-600 sm:text-base">
              Every kind word from you is what keeps Dev Fashion going. If you would like to see them all, or share your own experience, you will find us on Google.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-stone-900 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-md transition-colors duration-300 hover:bg-gold-600"
              >
                <FaGoogle className="h-4 w-4" aria-hidden />
                Read all reviews on Google
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              {GOOGLE_WRITE_URL && (
                <a
                  href={GOOGLE_WRITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-widest text-stone-700 underline decoration-gold-500 decoration-2 underline-offset-8 transition-colors hover:text-gold-600"
                >
                  Write a review
                </a>
              )}
            </div>

            <p className="mt-10 text-sm leading-relaxed text-stone-600">
              With love and gratitude,
              <br />
              <span className="font-serif text-lg text-stone-950">Dev Fashion Boutique Team</span>
            </p>

            <p className="mt-8 text-xs text-stone-500">
              Ready for your own blouse?{" "}
              <Link href="/contact#booking" className="font-semibold text-gold-600 underline-offset-4 hover:underline">
                Book a consultation
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}