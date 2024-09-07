import Link from "next/link";
import Img from "@/assets/img/logo.svg";

interface LogoProps {
    h?: number;
}

export default function Logo({ h = 50 }: LogoProps) {
    return (
        <Link href="/">
            <Img height={h} />
        </Link>
    );
}