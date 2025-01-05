import Image from "next/image";
import styles from "@/components/home/home.module.css";
import ContactStyles from "./contact.module.css";
import images from "@/lib/images";
import ContactForm from "@/components/contact/ContactForm";
import Registration from "@/components/pricing/Registration";

export const metadata = {
  title: "Contact Us",
  description:
    "Have a question or feedback? We’re hare to help. Send us a message, and we’ll respond within 24 hours.",
};

const Contact = ({ params: { locale } }) => {
  const bangla = locale !== "en";
  return (
    <div className="bg-[#F9F7F6] lg:pt-28 pt-20 relative">
      <div className="container px-5 lg:px-10 relative z-[4]">
        <div className="relative bg-[#F9F7F6]">
          <h1 className={`${styles.dream} ${styles.headerOne} text-center `}>
            GET IN TOUCH
          </h1>
          <div className="absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full"></div>
        </div>
        <div className="text-center lg:-mt-20 relative z-[2]">
          <div
            className={`${ContactStyles.bgAnimate} w-[345px] h-[345px] bg-[#F3BEB3] bg-opacity-50 blur-3xl rounded-full`}
          ></div>
          <h1
            className={`${styles.archivo} ${styles.headerOne} uppercase max-w-[893px] mx-auto`}
          >
            {bangla
              ? "চলুন সংযুক্ত হই এবং একে অপরকে জানি"
              : "Let’s Connect and get to know each other"}
          </h1>
          <h5
            className={`${styles.archivo} ${styles.headerFive} font-normal py-10 max-w-[490px] mx-auto`}
          >
            {bangla
              ? "আপনার কোনো প্রশ্ন বা মতামত আছে? আমরা সাহায্য করতে প্রস্তুত। আমাদের একটি মেসেজ পাঠান, এবং আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেব।"
              : `Have a question or feedback? We’re hare to help. Send us a message,
            and we’ll respond within 24 hours.`}
          </h5>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 relative z-[4]">
          <div className="bg-[#F8E5E1] rounded-2xl p-10 ">
            <ContactForm />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <div style={{ width: "100%" }}>
              <iframe
                title="map"
                width={"100%"}
                height={"466"}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5349467308806!2d90.41258811090648!3d23.835130778523602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c067b46d360c89d%3A0xa80e5092b1d358f6!2seBitans!5e0!3m2!1sen!2sbd!4v1712200881217!5m2!1sen!2sbd"
              ></iframe>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-lg p-5">
                <Image
                  src={images?.email}
                  alt="ebitans image"
                  className="mb-2"
                />
                <p className={`${styles.archivo} ${styles.paragraph}`}>
                  info@ebitans.com
                </p>
                <p className={`${styles.archivo} ${styles.paragraph}`}>
                  assist@ebitans.com
                </p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <Image
                  src={images?.phone2}
                  alt="ebitans image"
                  className="mb-2"
                />
                <p className={`${styles.archivo} ${styles.paragraph}`}>
                  +88 01886 515579
                </p>
                <p className={`${styles.archivo} ${styles.paragraph}`}>
                  +88 01886 515578
                </p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <Image
                  src={images?.contactLocation}
                  alt="ebitans image"
                  className="mb-2"
                />
                <p className={`${styles.archivo} ${styles.paragraph}`}>
                  4th Floor, H:39, Rd:20, Nikunja 2, Dhaka-1229
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 lg:px-10">
        <Registration />
      </div>
    </div>
  );
};

export default Contact;
