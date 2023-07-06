import { Button } from "components/Button/Button";
import TextArea from "components/TextArea/TextArea";
import Input from "components/Input/Input";
import React from "react";
import { Link } from "components/Link/Link";

export const LoanRequestForm = () => {
  return (
    <section className="p-10">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-8 text-center">
          Formulario para solicitar el préstamo
        </h3>
        <p className="mb-12 text-center md:text-left">
          Para pedir prestado un juguete te pedimos que completes el siguiente
          formulario. Una vez que lo recibamos, nos pondremos en contacto con
          vos para coordinar la entrega del juguete. Si tenés dudas podés leer
          <Link href="##" /** TODO add link to FAQ */ appearance="link">
            las preguntas frecuentes.
          </Link>
        </p>

        <form action="" className="mx-auto max-w-2xl" method="POST">
          <h4 className="mb-8">
            Paso 1 de 2: <br />
            Completá los datos del formulario.
          </h4>
          <p className="mb-16">Los campos con * son obligatorios</p>
          <p className="mb-8 border-b border-blue pb-4 font-outfit font-medium text-blue md:border-none">
            Datos del adulto responsable
          </p>
          <Input
            helperText="Ej: Marísol Hernández"
            id="fullname"
            name="fullname"
            label="Nombre y apellido:"
            placeholder="Ej: Marísol Hernández"
            type="text"
            required
          />
          <Input
            helperText="Ej: 35764532 (sin puntos)"
            id="dni"
            name="dni"
            label="DNI:"
            placeholder="Ej: 35764532 (sin puntos)"
            type="number"
            required
          />
          <div className="grid grid-cols-[1fr_1fr] grid-rows-2 gap-4 md:grid-cols-[6fr_2fr_2fr] md:grid-rows-1">
            <Input
              helperText="Ej: Mitre"
              id="calle"
              name="calle"
              label="Calle:"
              placeholder="Ej: Mitre"
              type="text"
              required
            />
            <Input
              helperText="Ej: 1200"
              id="altura"
              name="altura"
              label="Altura:"
              placeholder="Ej: 1200"
              type="number"
              required
            />
            <div className="col-span-2 md:col-span-1">
              <Input
                helperText="Ej: 4B"
                id="depto"
                name="depto"
                label="Piso y depto:"
                placeholder="Ej: 4B"
                type="text"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[6fr_4fr]">
            <Input
              helperText="Ej: Mitre"
              id="localidad"
              name="localidad"
              label="Localidad:"
              placeholder="Ej: Mitre"
              type="text"
              required
            />
            <Input
              helperText="Ej: 1870"
              id="postal"
              name="postal"
              label="Codigo postal:"
              placeholder="Ej: 1870"
              type="number"
              required
            />
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_5fr_4fr]">
            <Input
              helperText="Ej: 011"
              id="area"
              name="area"
              label="Area:"
              placeholder="Ej: 011"
              type="text"
              pattern="[0-9]{3}"
              required
            />
            <Input
              helperText="Ej: 42229845"
              id="phone"
              name="phone"
              label="Teléfono de contacto:"
              placeholder="Ej: 42229845"
              type="tel"
              required
            />
            <Input
              helperText="Ej: mhernandez@gmail.com"
              id="email"
              name="email"
              label="Email de contacto:"
              placeholder="Ej: mhernandez@gmail.com"
              type="email"
              required
            />
          </div>
          <Input
            helperText="Vínculo con el niño o niña:"
            id="child-link"
            name="child-link"
            label="Vínculo con el niño o niña:"
            type="url"
            required
          />
          <p className="mb-8 mt-6 border-b border-blue pb-4 font-outfit font-medium text-blue md:border-none">
            Datos del niño o niña
          </p>
          <Input
            helperText="Ej: María Fernández"
            id="child-fullname"
            name="child-fullname"
            placeholder="Ej: María Fernández"
            label="Nombre y apellido del niño o niña:"
            type="text"
            required
          />
          <Input
            helperText="Ej: 35764532 (sin puntos)"
            id="child-dni"
            name="child-dni"
            label="DNI del niño o niña:"
            placeholder="Ej: 35764532 (sin puntos)"
            type="number"
            required
          />
          <TextArea
            helperText="¿Qué problemática motriz tiene?:"
            label="¿Qué problemática motriz tiene?"
            required
            rows={5}
          />
          <TextArea
            helperText="Información relevante:"
            label="Información relevante:"
            rows={5}
          />

          <div className="flex justify-center md:justify-end">
            <Button appearance="button" type="submit">
              Revisar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
