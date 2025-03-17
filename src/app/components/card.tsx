import Image from "next/image";

const Card = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className="group relative bg-surface shadow-lg rounded-xl border border-foreground hover:shadow-xl transition-all overflow-hidden">
      {/* Gambar (Aspect Ratio 4:3) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Efek Hover Blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white text-sm font-semibold bg-white/20 px-4 py-2 rounded-md backdrop-blur-lg">
          Selengkapnya
        </span>
      </div>

      {/* Judul & Deskripsi */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-secondary mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
