import Link from 'next/link'
// import { headers } from 'next/headers'

export default async function NotFound() {
  // const headersList = headers()
  // const domain = headersList.get('host')
  // const data = await getSiteData(domain)
  return (
    <div className='pt-32 pb-20 h-screen relative z-[1] flex flex-col gap-3 justify-center items-center'>
      {/* <h2>Not Found: {domain}</h2> */}
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Return Home</Link>
      </p>
    </div>
  )
}