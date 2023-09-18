import { Link } from "components/Link/Link";
import React from "react";

function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-5">
      <span className="font-inter text-[3.5rem] font-bold">404</span>
      <h2 className="mb-6">Página no encontrada</h2>
      <p className="mb-6">No pudimos encontrar el recurso solicitado.</p>
      <p>
        Volver al{" "}
        <Link appearance="link" href="/">
          página de inicio.
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
