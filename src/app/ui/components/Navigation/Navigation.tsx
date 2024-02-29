import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="border border-x-0 border-y-medium-gray w-full flex justify-between items-center px-24 py-4">
      <div>
        <Link href={"/"}>
          <Image src="/logo.png" alt="Logo" width={208} height={71} />
        </Link>
      </div>
      <ul className="flex text-sm font-semibold text-dark-blue gap-x-6">
        <li>
          <Link href={"/"}>Strona Główna</Link>
        </li>
        <li>
          <Link href={"/"}>O Nas</Link>
        </li>
        <li>
          <Link href={"/"}>Usługi</Link>
        </li>
        <li>
          <Link href={"/"}>Aktualnośći</Link>
        </li>
        <li>
          <Link href={"/"}>Kontakt</Link>
        </li>
      </ul>
      <div className="flex items-center gap-x-8">
        <div>
          <AccountCircleRoundedIcon
            fontSize="large"
            sx={{ color: "#25305E" }}
          />
        </div>
        <div>
          <ShoppingCartRoundedIcon fontSize="large" sx={{ color: "#25305E" }} />
        </div>
        <button className="bg-dark-blue px-8 py-4 rounded-xl text-white font-light">
          Lorem Ipsum
        </button>
      </div>
    </nav>
  );
};
