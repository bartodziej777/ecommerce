export default function Hamburger({
  clickHandler,
  active,
}: {
  clickHandler: () => void;
  active: boolean;
}) {
  return (
    <button
      className="w-8 aspect-square relative bg-transparent ml-2 cursor-pointer md:hidden"
      onClick={clickHandler}
    >
      <div
        className={`absolute w-full h-1.5  top-1/2 -translate-y-1/2 before:content-[''] before:absolute before:w-full before:block before:h-1.5 before:bg-textLight1 dark:before:bg-textDarkt1  after:content-[''] after:absolute after:w-full after:block after:h-1.5 after:bg-textLight1 dark:after:bg-textDarkt1 duration-200 before:duration-200 after:duration-200 ease-in before:ease-in after:ease-in ${active ? "bg-transparent before:rotate-45 after:-rotate-45 before:-translate-y-1 after:-translate-y-1" : "before:-translate-y-2 after:translate-y-2 bg-textLight1 dark:bg-textDark1"}`}
      ></div>
    </button>
  );
}
