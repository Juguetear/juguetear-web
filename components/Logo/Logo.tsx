import BlueLogo from "./svg/BlueLogo";
import WhiteLogo from "./svg/WhiteLogo";

interface LogoProps {
  darkBackground?: boolean;
}

export const Logo = ({ darkBackground = false }: LogoProps) => {
  return <>{darkBackground ? <WhiteLogo /> : <BlueLogo />}</>;
};
