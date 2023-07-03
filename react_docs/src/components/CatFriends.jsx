import { useRef } from "react";

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function scrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function scrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function scrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav className="flex gap-2 mb-5">
        <button
          onClick={scrollToFirstCat}
          className="p-1 w-32 bg-slate-950 text-white font-semibold"
        >
          Tom
        </button>
        <button
          onClick={scrollToSecondCat}
          className="p-1 w-32 bg-slate-950 text-white font-semibold"
        >
          Maru
        </button>
        <button
          onClick={scrollToThirdCat}
          className="p-1 w-32 bg-slate-950 text-white font-semibold"
        >
          Jellylorum
        </button>
      </nav>
      <div>
        <ul className="flex flex-wrap">
          <li>
            <img
              ref={firstCatRef}
              src="https://placekitten.com/g/200/200"
              alt="Tom"
            />
          </li>
          <li>
            <img
              ref={secondCatRef}
              src="https://placekitten.com/g/300/200"
              alt="Maru"
            />
          </li>
          <li>
            <img
              ref={thirdCatRef}
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
