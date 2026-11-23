
"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Contact Information */}
        <div className="bg-[#00B8DB] text-white p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5">
            School Contact
          </h1>

          <p className="text-blue-100 leading-7 mb-8">
            Have questions about admission, classes or school activities?
            Contact us. We are always happy to help you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Address */}
            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p className="text-blue-100 text-sm mt-2 leading-6">
               Vill: Sultanabad, Post Sultanabad, P/S: Mirzaganj,  8610
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <a
                href="tel:+8801234567890"
                className="text-blue-100 text-sm mt-2 block hover:text-white"
              >
                +880 1234-567890
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-semibold text-lg">✉ Email</h3>
              <a
                href="mailto:info@school.com"
                className="text-blue-100 text-sm mt-2 block hover:text-white"
              >
                info@school.com
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="p-4 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Our Location
          </h2>

          <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2241137086166!2d90.17978581372407!3d22.269498780191544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aabd094aead9a1%3A0x972fb99f9c55cb38!2sSultanabad%20High%20School!5e0!3m2!1sen!2sbd!4v1795455582036!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Sultanabad High School Location"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
