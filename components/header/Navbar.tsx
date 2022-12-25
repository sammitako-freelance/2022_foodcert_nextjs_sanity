import { useAtom } from "jotai";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { clickedMenuJotai, showMenuJotai } from "../../libs/jotai";
import { headerMenus, subMenus } from "../../libs/header-menus";

const Navbar = () => {
  const [show, setShow] = useAtom(showMenuJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);

  return (
    <>
      <header className="w-full bg-[#243665] uppercase font-bold font-Noto text-[#F1F1E7]">
        <div className="flex justify-between items-center px-5 py-3 md:px-10 md:py-5">
          <Link href="/">
            <div className="hover:text-gray-200 uppercase">House Boutique</div>
          </Link>
          <div
            data-cy="nav-btn"
            className="flex md:hidden hover:cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <MdOutlineClose className="w-5 h-8 text-[#F1F1E7]" />
            ) : (
              <GiHamburgerMenu className="w-5 h-8" />
            )}
          </div>

          {/* DEFAULT */}
          <ul className="hidden space-x-8 md:flex">
            {headerMenus?.map((menu) => (
              <li key={menu?.title} className="relative group">
                <Link
                  href={
                    menu?.title.toLowerCase() == "home" ? "/" : `/${menu.slug}`
                  }
                >
                  <div
                    data-cy="nav-item"
                    id={`${
                      clickedMenu != menu?.title.toLowerCase()
                        ? "hover-line"
                        : ""
                    }`}
                    className={`${
                      clickedMenu == menu?.title.toLowerCase()
                        ? "border-b-[3px] border-[#f1f1e7] inline-block"
                        : ""
                    }`}
                    onClick={() => setClickedMenu(menu?.title.toLowerCase())}
                  >
                    {menu?.title}
                  </div>
                  <div className="w-full absolute pt-1 hidden group-hover:block">
                    {menu.childItems > 0 ? (
                      <ul className="bg-black py-2 text-center space-y-1">
                        {subMenus.map((item) => (
                          <li key={item.title}>
                            <Link href={`/${item.slug}`}>
                              <div
                                id={`${
                                  clickedMenu != item?.title.toLowerCase()
                                    ? "hover-line"
                                    : ""
                                }`}
                                className={`${
                                  clickedMenu == item?.title.toLowerCase()
                                    ? "border-b-[3px] border-[#f1f1e7] inline-block"
                                    : ""
                                }`}
                                onClick={() =>
                                  setClickedMenu(item?.title.toLowerCase())
                                }
                              >
                                {item.title}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <style jsx>{`
        #hover-line {
          position: relative;
          display: inline-block;
          height: 100%;
        }
        #hover-line:after {
          display: block;
          content: "";
          border-bottom: solid 3px #f1f1e7;
          transform: scaleX(0);
          transition: transform 250ms ease-in-out;
        }
        #hover-line:hover:after {
          transform: scaleX(1);
        }
        #hover-line:after {
          transform-origin: 0% 50%;
        }
      `}</style>
    </>
  );
};

export default Navbar;
