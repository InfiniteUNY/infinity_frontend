import Image from 'next/image';

export function Roles() {
  return (
    <section className="px-6 text-gray-700 xs:px-12 md:px-24 lg:px-36">
      <div className="max-w-5xl mx-auto">
        <h2>Roles</h2>
        <div className="flex flex-col justify-center">
          <Image src="/assets/images/roles.svg" width={308} height={289} alt="Tentang Kami" />
          <div>
            <div>
              <h3>Hustler</h3>
              <p>
                Seseorang yang memiliki peran dalam memperkenalkan dan memasarkan produk kepada
                konsumen.
              </p>
              <p>Skills: management, negotiation, writing, critical thinking.</p>
            </div>
            <div>
              <h3>Hipster</h3>
              <p>
                Seseorang yang memiliki peran dalam menyajikan dan memastikan estetika tampilan
                serta pengalaman pengguna dari sebuah produk.
              </p>
              <p>Skills: design, dopywriting, research, ideation.</p>
            </div>
            <div>
              <h3>Hacker</h3>
              <p>
                Seseorang yang memiliki peran dalam mengembangkan teknologi yang ada dalam produk
                (coding).
              </p>
              <p>Skills: programming, software development, network security, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
