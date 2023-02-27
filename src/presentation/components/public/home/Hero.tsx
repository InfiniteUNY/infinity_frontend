import Image from 'next/image';

export function Hero() {
  return (
    <section className="px-6 bg-[#3c7c60] text-white xs:px-12 md:px-24 lg:px-36">
      <div className="min-h-screen max-w-5xl mx-auto flex flex-col justify-center">
        <Image src="/assets/images/infinite-3d.png" width={290} height={193} alt="INFINITE UNY" />
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">INFINITE UNY</h1>
          <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Tempat para pecinta teknologi berkumpul &#129309;
          </p>
          <p>Divisi Teknologi Informasi &bull; UKM Rekayasa Teknologi UNY</p>
        </div>
      </div>
    </section>
  );
}
