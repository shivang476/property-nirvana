export default function GuideEntry({
  title,
  points,
  id,
  children,
}: {
  title: string;
  points?: string[];
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col" id={id}>
      <h4 className="text-xl md:text-2xl font-semibold font-platypi">
        {title}
      </h4>
      <p className="mt-2 md:mt-4 text-zinc-700">{children}</p>
      <ul className="grid list-disc list-inside gap-1 mt-2 md:mt-4">
        {points?.map((point, index) => (
          <li key={index} className="text-zinc-700">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
