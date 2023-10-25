import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>Addoussisseur d'eau</li>
        <li>Piscine</li>
        <li>Contact</li>
      </ul>
      <Image
        src="/ODouce.png"
        alt="logo de ODouce service"
        width="64"
        height="64"
      />
    </nav>
  );
}
