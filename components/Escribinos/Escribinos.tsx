import { Button } from "components/Button/Button";
import Input from "components/Input/Input";
import TextArea from "components/TextArea/TextArea";
import { ContactForm } from "./ContactForm";

export const Escribinos = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container max-w-3xl">
        <h2 className="mb-8 text-center">Escribinos</h2>
        <p className="mb-8 text-center">
          Los campos que contengan * son obligatorios
        </p>
        <ContactForm>
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
            id="email"
            name="email"
            label="Email:"
            type="email"
            required
          />
          <TextArea
            helperText="Mensaje:"
            label="Mensaje:"
            name="body"
            required
          />
          <div className="flex justify-center md:justify-end">
            <Button appearance="button" type="submit">
              Enviar
            </Button>
          </div>
        </ContactForm>
      </div>
    </section>
  );
};
