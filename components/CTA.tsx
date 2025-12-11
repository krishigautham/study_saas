import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge font-bold" >Start learning Your Way</div>
      <h2 className="text-3xl font-bold">Build and Personalize Learning Companion</h2>
      <p>Pick a name, subject, voice & personality - and start learning through voice conversations that feel natural and fun.</p>
      <Image src="images/cta.svg" alt="cta" width={362} height={232} />
      <Link
        href="/companions/new"
        className="btn-primary w-full justify-center gap-2 bg-[#FE5933] hover:bg-[#fe5933]/90 text-white px-4 py-3 max-sm:px-3"
      >
        <Image src="icons/plus.svg" alt="plus" width={12} height={12} />
        <span>Build a New Companion</span>
      </Link>
    </section>
  )
}

export default CTA