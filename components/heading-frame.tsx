export default function HeadingFrame({ heading }: { heading: string }) {
  return (
    <div className="py-20 border border-[#E59B50] bg-[#FFEEDB]">
      <h2 className="font-platypi text-3xl font-semibold text-center">
        {heading}
      </h2>
    </div>
  );
}
