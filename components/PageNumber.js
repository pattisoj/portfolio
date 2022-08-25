export default function PageNumber({ pageNumber, id }) {
  const numberDisplay = `${pageNumber} - 4`;
  return (
    <p
      className="absolute w-16 self-center rotate-90 ml-80 mt-[29rem] mr-36 sm:mr-0 tracking-tighter opacity-50 text-base font-Graduate"
      id={id}
    >
      {numberDisplay}
    </p>
  );
}
