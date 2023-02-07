import { Button } from "components/Button/Button";
import Image from "next/image";
import PdfSvg from "../components/assets/pdf.svg";

function Home() {
  return (
    <div>
      <main>
        <h1>Hola!</h1>
        <Button appearance="buttonWithIcon" icon={PdfSvg} text={"button"} />
      </main>

      <footer>
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}

export default Home;
