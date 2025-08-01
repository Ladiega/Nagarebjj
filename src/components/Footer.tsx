import Image from "next/image";
import Link from "next/link";
import imageFooter from "../../public/img/NagareNav.png";
import instagram from "../../public/img/iconinstagram.png";
import facebook from "../../public/img/iconfacebook.png";
export default function Footer() {
  return (
    <footer className="">
      <div className="absolute z-0 bg-black w-full  md:pl-20">
        <Image
          src={imageFooter}
          alt="footer image"
          className=" opacity-50
        "
        />
      </div>
      <div className="flex justify-between">
        <div className="ml-5 flex flex-col text-white relative z-10 pt-10 ">
          <div className="">
            <h4 className=" ">Dirección:</h4>
          </div>
          <div className="text-sm">
            <h4>Bogotá D.C.</h4>
            <p>Cra. 20b #73-52, Bogotá, Barrio San Felipe</p>
            <p>Piso 3.</p>
          </div>
          <div className="flex gap-5 pt-5 ">
            <div>
              <Link href="https://www.instagram.com/nagarebjj/" target="_blank">
                <Image src={instagram} alt="instagram icon" width={30} />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image src={facebook} alt="facebook icon" width={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white relative pt-10 pr-5 text-sm">
          <ul className="flex flex-col gap-3 text-right ">
            <li>
              <Link href="/" className="hover:text-red-700">
                NOSOTROS
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-red-700">
                CLASES
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-red-700">
                HORARIOS
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-red-700">
                UBICACIÓN
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center p-5 bg-black  text-white text-sm font-extralight">
        NAGARE BJJ © 2025
      </div>
    </footer>
  );
}
