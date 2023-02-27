import Image from 'next/image';

export function About() {
  return (
    <section className="px-6 text-gray-700 xs:px-12 md:px-24 lg:px-36">
      <div className="max-w-5xl mx-auto">
        <h2>About Us</h2>
        <div className="flex flex-col justify-center">
          <Image src="/assets/images/about.svg" width={570} height={570} alt="Tentang Kami" />
          <div>
            <h3>INFINITE UNY?</h3>
            <p>Let&apos;s Make Infinite Technology</p>
            <p>
              INFINITE merupakan Divisi Teknologi Informasi yang berada dibawah naungan UKM Rekayasa
              Teknologi UNY. Sejak tahun 2014, INFINITE mewadahi mahasiswa dari berbagai jurusan
              yang memiliki minat dan bakat di bidang Teknologi Informasi.
            </p>
            <ul>
              <li>
                Berkolaborasi menciptakan karya dalam bentuk mobile apps, web apps, internet of
                things, machine learning untuk menjawab permasalahan di masyarakat.
              </li>
              <li>Kesempatan mengikuti lomba baik skala nasional dan internasional.</li>
              <li>Kesempatan mengembangkan CV dan portofolio.</li>
              <li>Basecamp 24 jam.</li>
              <li>Networking.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
