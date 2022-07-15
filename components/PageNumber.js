export default function PageNumber({ pageNumber }) {
  const numberDisplay = `${pageNumber} - 4`;
  return (
    <p className="w-16 self-center rotate-90 ml-80 mt-10 mr-36 sm:mr-0 tracking-tighter opacity-50 text-base font-Graduate">
      {numberDisplay}
    </p>
  );
}
