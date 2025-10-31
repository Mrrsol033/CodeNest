import Image from "next/image";

interface Props {
  title: string;
  level: string;
  image?: string;
}

export default function CourseCard({ title, level, image }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {image && <Image src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{level}</p>
      </div>
    </div>
  );
}
