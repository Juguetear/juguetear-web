import BlueLogo from "./assets/logo-blue.svg";
import WhiteLogo from "./assets/logo-white.svg";

interface LogoProps {
  darkBackground: boolean;
}

export const Logo = ({ darkBackground = false }: LogoProps) => {
  return <>{darkBackground ? <WhiteLogo /> : <BlueLogo />}</>;
};
