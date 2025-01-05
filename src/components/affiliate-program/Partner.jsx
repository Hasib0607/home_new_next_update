import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import hands from "@/assets/images/affiliate/hands.png";
import Rectangle from "@/assets/images/affiliate/Rectangle.png";
import Ellipse from "@/assets/images/affiliate/Ellipse.png";

const Partner = ({ locale }) => {
  const bangla = locale !== "en";
  return (
    <div className="bg-[#BBD0E8] relative z-[1]">
      <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10 place-items-center lg:pt-20 lg:pb-20 pt-10 pb-20 container px-5 lg:px-10">
        <div className="lg:justify-self-start justify-self-center space-y-4">
          <h1 className="text-3xl font-semibold">
            {!bangla
              ? "Anyone Can Join the eBitans Affiliate Program!"
              : "eBitans অ্যাফিলিয়েট প্রোগ্রামে যে কেউ যোগ দিতে পারেন!"}
          </h1>
          <p className="max-w-[500px]">
            {!bangla ? (
              <>
                eBitans welcomes everyone, including store owners, website
                managers, influencers, bloggers, sales graduates, and
                freelancers. No experience is needed to get started. It’s
                completely free to join and simple to use. Turn your network
                into a steady source of income with Bangladesh’s best e-commerce
                website builder.
                <br />
                <a
                  href="https://www.ebitans.com.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1593a] underline"
                >
                  Join today!
                </a>
              </>
            ) : (
              <>
                eBitans স্বাগতম জানায় সকলকে, যার মধ্যে রয়েছেন দোকান মালিক,
                ওয়েবসাইট ম্যানেজার, প্রভাবক, ব্লগার, বিক্রয় গ্র্যাজুয়েট, এবং
                ফ্রিল্যান্সার। শুরু করার জন্য কোনো অভিজ্ঞতার প্রয়োজন নেই। এটি
                সম্পূর্ণ বিনামূল্যে এবং ব্যবহার করতে সহজ। আপনার নেটওয়ার্ককে
                বাংলাদেশের সেরা ই-কমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্মের সাথে
                একটি স্থির আয়ের উৎসে পরিণত করুন।
                <br />
                <a
                  href="https://www.ebitans.com.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1593a] underline"
                >
                  আজই যোগ দিন!
                </a>
              </>
            )}
          </p>
          <div className="relative w-max flex items-center gap-2 font-bold">
            <a href="https://admin.ebitans.com/register">
              <p className={``}>
                {!bangla ? "Let’s Work Together" : "Let’s Work Together"}
              </p>
            </a>
            <BsArrowRight />
          </div>
        </div>

        <div className="lg:justify-self-end justify-self-center">
          <div className="relative lg:mr-8 mr-8">
            <Image
              width={500}
              height={500}
              src={hands}
              alt="ebitans image"
              className="relative z-[2] h-auto w-auto"
            />
            <Image
              width={500}
              height={500}
              src={Rectangle}
              alt="ebitans image"
              className=" absolute z-[1] -right-8 lg:top-8 top-8 h-full w-auto"
            />
          </div>
          <Image
            src={Ellipse}
            alt="ebitans image"
            className="absolute right-0 top-0 lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Partner;
