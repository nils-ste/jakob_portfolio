import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/images/globalFacism.jpg"
        alt="Global Facism"
        width={1200}
        height={800}
        className="mb-2 max-w-full h-auto"
      />
    </main>
  );
}
