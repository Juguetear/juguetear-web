import Image from "next/image";
import { Accordion } from "../components/Accordion/Accordion";

function Home() {
  return (
    <div>
      <main>
        <h1>Hola!</h1>
        <Accordion text="Prueba" content="Contenido de prueba" />
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
