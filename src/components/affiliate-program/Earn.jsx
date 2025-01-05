import Rectangle2 from "@/assets/images/affiliate/Rectangle2.png";
import desk from "@/assets/images/affiliate/desk.png";
import Image from "next/image";

const Earn = ({ locale }) => {
  const bangla = locale != "en";
  return (
    <div className="bg-white relative z-[1]">
      <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10 lg:place-items-center lg:pt-20 lg:pb-32 pb-10 container px-5 lg:px-10">
        <div className="lg:justify-self-start justify-self-center mt-20 lg:w-full">
          <div className="pl-5 relative">
            <Image
              width={500}
              height={500}
              src={desk}
              alt="ebitans image"
              className="relative z-[1] h-auto w-auto"
            />
            <Image
              width={500}
              height={500}
              src={Rectangle2}
              alt="ebitans image"
              className="absolute left-0 top-5 h-full w-auto"
            />
          </div>
        </div>
        <div className="lg:justify-self-end justify-self-center space-y-4">
          <h1 className="text-3xl font-semibold max-w-[500px]">
            {!bangla
              ? "Free to start, easy to earn!"
              : "বিনামূল্যে শুরু করুন, সহজে উপার্জন করুন!"}
          </h1>
          <p className="max-w-[500px]">
            {!bangla
              ? `Join the eBitans Affiliate Program for free and start earning effortlessly. Share your unique affiliate link, and every time a merchant upgrades to an eBitans paid plan through your link, you’ll earn a 20% lifetime commission on their store. Track your progress easily with our affiliate dashboard, where you can monitor your referrals and watch your earnings grow. Start earning today with Bangladesh’s top e-commerce website builder!`
              : `বিনামূল্যে eBitans অ্যাফিলিয়েট প্রোগ্রামে যোগ দিন এবং সহজে আয় করা শুরু করুন। আপনার ইউনিক অ্যাফিলিয়েট লিঙ্ক শেয়ার করুন, এবং যখনই কোনো মার্চেন্ট আপনার লিঙ্কের মাধ্যমে eBitans এর পেইড প্ল্যানে আপগ্রেড করবেন, আপনি তাদের স্টোর থেকে আজীবন ২০% কমিশন উপার্জন করবেন। আমাদের অ্যাফিলিয়েট ড্যাশবোর্ডের মাধ্যমে সহজেই আপনার অগ্রগতি ট্র্যাক করুন, যেখানে আপনি আপনার রেফারেল এবং আয় দেখার সুযোগ পাবেন। বাংলাদেশের শীর্ষ ই-কমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্মের সাথে আজই আয় শুরু করুন!`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Earn;
