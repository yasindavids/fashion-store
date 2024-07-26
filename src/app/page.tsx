import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover object-center "
        src="/images/webpic2.jpeg"
        alt="nocta"
        layout="fill"
        priority={true}
      />
    </div>
  );
}
