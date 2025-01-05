"use client"
import { Accordion } from 'keep-react'
import styles from "@/components/home/home.module.css"

const FaqContent = () => {
    
  const styleCss = `
  .red-link {
      color: blue;
    }
  `
    return (
        <div className='container px-5 lg:px-10 py-10 gap-4 grid grid-cols-1 lg:grid-cols-2 w-full'>
                  <style>{styleCss}</style>
            <div className='flex flex-col gap-4 w-full'>
                <Accordion openFirstPanel={true} flush={true}>
                    {
                        faqdata.slice(0, 5)?.map(item =>
                            <Accordion.Panel key={item?.id} className="w-full h-auto px-4 mb-2 rounded border lg:cursor-pointer">
                                <Accordion.Container className='text-left'>
                                    <h3 className={`${styles.archivo} text-sm sm:text-lg mr-2`}>{item?.title}</h3>
                                    <Accordion.Icon />
                                </Accordion.Container>
                                <Accordion.Content className={`${styles.archivo} ${styles.paragraph}`}>
                                    <p dangerouslySetInnerHTML={{ __html: item?.desc }}></p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        )
                    }
                </Accordion>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <Accordion openFirstPanel={false} flush={true}>
                    {
                        faqdata.slice(5, 10)?.map(item =>
                            <Accordion.Panel key={item?.id} className="w-full h-auto px-4 mb-2 rounded border lg:cursor-pointer">
                                <Accordion.Container className='text-left'>
                                    <h3 className={`${styles.archivo} text-sm sm:text-lg mr-2`}>{item?.title}</h3>
                                    <Accordion.Icon />
                                </Accordion.Container>
                                <Accordion.Content className={`${styles.archivo} ${styles.paragraph}`}>
                                    <p dangerouslySetInnerHTML={{ __html: item?.desc }}></p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        )
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default FaqContent

const faqdata = [
    {
      id: 1,
      title: "eBitans সর্ম্পকে বিস্তারিত জানতে চাই?",
      desc: "eBitans হচ্ছে একটি ই-কমার্স ওয়েবসাইট বিলডারস প্লাটফর্ম। যেখান থেকে আপনি নিজেই অটোমেটিকালি একটি ইকমার্স ওয়েবসাইট তৈরি করেতে পারবেন, আপনার মোবাইল নাম্বার এবং পাসওয়ার্ড দিয়ে রেজিস্ট্রেশন করে। তারপর আপনার স্টোর/ব্যবসার নাম এবং ধরন সিলেক্ট করে ওয়েবসাইট তৈরি করে নিতে পারবেন। এর জন্য আপনার কোন টেকনিকাল বা coding জ্ঞান থাকার প্রয়োজন নেই। ওয়েবসাইট তৈরি হয়ে যাওয়ার পর আপনাকে একটা অ্যাডমিন প্যানেল দেয়া হবে যেখান থেকে আপনি প্রোডাক্ট আপলোড, ওয়েবসাইট কাস্টমাইজেশন, অর্ডার ম্যানেজমেন্ট  সিস্টেম, ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম, কাস্টমার ম্যানেজমেন্ট সিস্টেম, ডিসকাউন্ট/ অফার/ কুপন ম্যানেজমেন্ট সিস্টেম এবং আরও অনেক কিছু পাচ্ছেন এই  এক অ্যাডমিন প্যানেল থেকেই।"
    },
    {
      id: 2,
      title: "ফ্রি ওয়েবসাইট দিয়ে eBitans এর লাভ কী ?",
      desc: "বাংলাদেশে অটোমেটিক ইকমার্স ওয়েবসাইট কনসেপ্টটা একদমই নতুন এবং অনেকেই এই  বিষয়ে এখনও জানে না। তাই আমরা অল্প সময়ে অনেক বেশি মানুষের কাছে আমাদের সার্ভিসটা পৌছানোর জন্য একটিফ্রী ইকমার্স ওয়েবসাইট প্যাকেজ দিচ্ছি। এর সাথে আমাদের পেইড প্যাকেজও থাকছে।"
    },
    {
      id: 3,
      title: "আমি কি আমার ডোমেইন এড করতে পারবো?",
      desc: "জী অবশ্যই আপনার পার্সনাল ডোমেইন এড করতে পারবেন। এর জন্য আপনাকে আমাদের যেকনো একটা পেইড প্যাকেজ  নিতে হবে।"
    },
    {
      id: 4,
      title: "হোস্টিং কি আপনারা দিবেন? নাকি এর জন্য আলাদা পেমেন্ট করতে হবে?",
      desc: "জী স্যার হোস্টিং আমারাই দিচ্ছি।এর জন্য আপনাকে কোন এক্সট্রা পেমেন্ট করতে হবে না। আমাদের প্যাকেজের প্রাইসিং এর ভিতরেই হোস্টিং এর প্রাইস সংযুক্ত করা আছে।"
    },
    {
      id: 5,
      title: "কিভাবে আমি পেমেন্ট গেটওয়ে অপশন এড করবো?",
      desc: "জী আপনি অবশ্যই পেমেন্ট গেটওয়ে এড করতে পারবেন ।এর জন্য আপনাকে আমাদের এড-অনসসার্ভিস নিতে হবে যার প্রাইজ মাত্র ১০০০ টাকা ।(আপনি যাদের(বিকাশ/ নগদ/ SSL commerce, etc ) পেমেন্ট গেটওয়ে নিতে চাচ্ছেন তাদের API  আমাদের সাথে শেয়ার করলে আমরা আপনার ওয়েবসাইট এর সাথে পেমেন্ট গেইটওয়ে যুক্ত করে দিব।)"
    },
    {
      id: 6,
      title: "ওয়েবসাইট কিংবা সিস্টেম এর ডেমো দেখা যাবে?",
      desc: ` স্যার আপনি চাইলেই খুব সহজেই রেজিস্ট্রেশন করে আমাদের প্লাটফর্ম থেকে ফ্রি ওয়েবসাইট তৈরি করে ব্যবহার করতে পারবেন। এর জন্য আমারা ডেমো লিংক প্রোভাইড করি না। </br> তবে আমাদের অসংখ্য থিম আছে চাইলে আপনি সেগুলো চেক আউট করতে পারেন রেজিস্ট্রেশন করে <a href="https://ebitans.com/" target="_blank" class="red-link">https://ebitans.com/ </a> </br> থিম লিংক/ডেমো লিংক : <a href="https://ebitans.com/all-theme" target="_blank" class="red-link">https://ebitans.com/all-theme</a>`
  
    },
    {
      id: 7,
      title: "সিকিউরিটি কেমন?",
      desc: "আমাদের প্রত্যেকটা ওয়েবসাইট এর সাথেই থাকছে valid SSL সার্টিফিকেশন। যার কারণে ওয়ার্ল্ড এর অন্যান্য সকল ওয়েবসাইট এর মতো সেইম সিকিউরিটি পাচ্ছেন। এবং যদি আপনি আপনার প্রোডাক্ট, কাস্টমার বা অর্ডার এর data সিকিউরিটির কথা বলেন তাহলে database হিসেবে আমরা mySQL ব্যবহার করছি যা ওয়ার্ল্ড ওয়াইড অনেক বেশি সিকিউর এছাড়াও আমাদের প্রত্যেকটি 'Data' 'end to end encrypted' তাই আপনার ব্যবসায়ীক তথ্য ফাঁস হওয়ার কোনো সম্ভাবনা নেই এবং ট্রাস্টেড হিসেবে পরিচিত। তাই  স্যার আপনার ওয়েবসাইট এর সিকিউরিটির ব্যপারে কোন টেনশন করতে হবে না।"
    },
    {
      id: 8,
      title: "এই ওয়েবসাইট গুলো কী wordpress  দিয়ে তৈরি নাকি?",
      desc: "আমরা আমাদের কাস্টমারদেরকে যে ই-কমার্স ওয়েবসাইট সেবা দিচ্ছি তা খুবই জনপ্রিয় এবং বর্তমানে সর্বাধিক ব্যবহৃত টেকনোলজি React.JS এবং Next.JS এর সমন্বয়ে তৈরি, যার ফলে আপনার ওয়েবসাইটটি খুবই দ্রুততার সাথে কাজ করবে, একই সাথে আপনার কাস্টমাররা আপনার ওয়েবসাইট থেকে সেরা এক্সপেরিয়ান্স উপভোগ করতে পারবে।"
    },
    {
      id: 9,
      title: "এটা কোন ফাঁদ নয়তো? দেখা গেলো আমি ব্যবসা শুরু করে দিয়েছি পরে আপনারা সাইট ভ্যানিশ করে দিলেন?",
      desc: "স্যার আপনার ওয়েবসাইট মেইন্টেইন করলে আমাদের লাভ। ভ্যানিশ করলে তো আমাদেরই ক্ষতি। আপনার ওয়েবসাইট থাকলেই তো  আমরা মান্থলি টাকা পাবো।"
    },
    {
      id: 10,
      title: "eBitans এর ফ্রি এবং পেইড প্যাকেজ গুলোর মধ্যে পার্থক্য কি?",
      desc: "ট্রায়াল প্যাকেজে আপনি সর্বোচ্চ ২০টি প্রোডাক্ট আপলোড করতে পারবেন এবং একটি সাব ডোমেইন পাবেন। যেখানে আপনি নিজের Domain যুক্ত করতে পারবেন না। কিন্তু আমাদের পেইড প্যাকেজ ভেদে আপনি ৪০ টা থেকে শুরু করে ৪০০ টা পর্যন্ত প্রোডাক্ট যুক্ত করতে পারবেন, নিজেস্ব doamin যুক্ত করা সহ আরও অনেক প্রিমিয়াম ফিচার্স ব্যবহার করতে পারবেন।"
    },
  
  ]
  