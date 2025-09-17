export default function GuideEntry({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <div className="flex flex-col">
      <h4 className="text-xl md:text-2xl font-semibold font-platypi">
        {title}
      </h4>
      <ul className="grid list-disc list-inside gap-1 mt-2 md:mt-4">
        {points.map((point, index) => (
          <li key={index} className="text-zinc-700">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
