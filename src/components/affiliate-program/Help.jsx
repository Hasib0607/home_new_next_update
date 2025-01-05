import Image from "next/image";
import team from "@/assets/images/affiliate/team.png";
import commission from "@/assets/images/affiliate/comission.png";
import graph from "@/assets/images/affiliate/graph.png";
import design2 from "@/assets/images/affiliate/design2.png";

const Help = ({ locale }) => {
  const bangla = locale !== "en";
  return (
    <div className="bg-[#FBD8D1] relative z-[1]">
      <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10 lg:place-items-center lg:py-20 py-10 container px-5 lg:px-10">
        <div className="lg:justify-self-start justify-self-center space-y-4">
          <h1 className="text-3xl font-semibold max-w-[500px]">
            {!bangla
              ? "Join the eBitans Partner Program!"
              : "eBitans পার্টনার প্রোগ্রামে যোগ দিন!"}
          </h1>
          <p className="max-w-[500px]">
            {!bangla ? (
              <>
                <p>
                  Are you looking for the best{" "}
                  <a
                    href="https://www.ebitans.com.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f1593a] underline"
                  >
                    e-commerce website builder
                  </a>{" "}
                  in Bangladesh?
                  <br />
                  Join the eBitans Partner Program and earn money while
                  empowering entrepreneurs to sell online.
                  <br />
                  With eBitans, you’ll learn:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    How to create and sell professional e-commerce websites.
                  </li>
                  <li>Step-by-step strategies to help startups succeed.</li>
                  <li>
                    Proven techniques to grow your online business skills.
                  </li>
                </ul>
                <p>
                  Whether you're a beginner or an expert, eBitans makes it easy
                  to build amazing e-commerce websites.
                  <br />
                  Help others succeed while earning a steady income.
                  <br />
                  Join the eBitans Partner Program today and become a part of
                  Bangladesh’s top e-commerce website builder community!
                </p>
              </>
            ) : (
              <>
                <p>
                  আপনি কি বাংলাদেশের সেরা{" "}
                  <a
                    href="https://www.ebitans.com.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f1593a] underline"
                  >
                    ই-কমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম
                  </a>{" "}
                  খুঁজছেন?
                  <br />
                  eBitans পার্টনার প্রোগ্রামে যোগদান করুন এবং উদ্যোক্তাদের
                  অনলাইনে পণ্য বিক্রি করতে সাহায্য করার মাধ্যমে আয় করুন।
                  <br />
                  eBitans থেকে আপনি শিখবেন:
                </p>
                <ul className="list-disc pl-6">
                  <li>পেশাদার ই-কমার্স ওয়েবসাইট তৈরি এবং বিক্রির উপায়।</li>
                  <li>স্টার্টআপদের সফল হতে সাহায্য করার ধাপে ধাপে কৌশল।</li>
                  <li>আপনার অনলাইন ব্যবসার দক্ষতা বাড়ানোর পরীক্ষিত পদ্ধতি।</li>
                </ul>
                <p>
                  আপনি নতুন হন বা বিশেষজ্ঞ, eBitans এর মাধ্যমে চমৎকার ই-কমার্স
                  ওয়েবসাইট তৈরি করা সহজ।
                  <br />
                  অন্যদের সাফল্যের পথে সাহায্য করুন এবং একটি স্থির আয় উপার্জন
                  করুন।
                  <br />
                  আজই eBitans পার্টনার প্রোগ্রামে যোগদান করুন এবং বাংলাদেশের
                  সেরা ই-কমার্স ওয়েবসাইট নির্মাণ সম্প্রদায়ের অংশ হন!
                </p>
              </>
            )}
          </p>
          <div className="relative w-max shadow-xl">
            <a href="https://admin.ebitans.com/register">
              <p
                className={`py-3 px-6 font-medium tracking-widest text-white bg-[#f1593a] rounded border-2 border-[#f1593a] hover:text-[#f1593a] hover:bg-white lg:cursor-pointer shadow-[5px_5px_1px_1px_black] hover:shadow-none duration-500`}
              >
                {!bangla ? "Let’s Work Together" : "Let’s Work Together"}
              </p>
            </a>
          </div>
        </div>

        <div className="lg:justify-self-end justify-self-center">
          <div className="relative lg:mr-24 mr-10 ml-11 lg:ml-0">
            <Image
              width={500}
              height={500}
              src={team}
              alt="ebitans image"
              className="h-auto w-auto"
            />
            <Image
              width={500}
              height={500}
              src={commission}
              alt="ebitans image"
              className=" absolute z-[1] lg:-right-24 -right-10 top-2 shadow-2xl h-auto w-auto"
            />
            <Image
              width={500}
              height={500}
              src={graph}
              alt="ebitans image"
              className="absolute z-[1] -left-16 bottom-0 h-auto w-auto"
            />
            <Image
              width={500}
              height={500}
              src={design2}
              alt="ebitans image"
              className="absolute z-[1] -right-10 -bottom-6 h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
