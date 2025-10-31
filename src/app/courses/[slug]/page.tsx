
interface Props {
  params: { slug: string };
}

export default function CourseDetailPage({ params }: Props) {
  const { slug } = params;
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold capitalize">{slug.replace("-", " ")}</h1>
      <p className="text-gray-600 mt-4">
        Detailed information and lessons for {slug} will appear here.
      </p>
    </main>
  );
}
