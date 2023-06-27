import Input from "components/Input/Input";
import TextArea from "components/TextArea/TextArea";
import { Button } from "components/Button/Button";
import React from "react";

export const Escribinos = () => {
  return (
    <section className="p-10">
      <h2 className="mb-10 text-center text-3xl font-bold text-blue">
        Escribinos
      </h2>
      <p className="mb-10 text-center">
        Los campos que contengan * son obligatorios
      </p>
      <form action="" method="POST">
        <Input
          helperText="Nombre"
          id="name"
          name="name"
          label="Nombre completo:"
          type="text"
          required
        />
        <Input
          helperText="Email"
          id="enail"
          name="email"
          label="Email:"
          type="email"
          required
        />
        <TextArea helperText="Mensaje:" label="Mensaje:" required />
        <div className="flex justify-center md:justify-end">
          <Button appearance="button" type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </section>
  );
};
