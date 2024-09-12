"use client";

import { Button } from "components/Button/Button";
import TextArea from "components/TextArea/TextArea";
import Input from "components/Input/Input";
import React from "react";
import { Link } from "components/Link/Link";
import { useFormState } from "react-dom";
import { loanReqFormAction } from "./form-action";

export const LoanRequestForm = () => {
  const [errorMsg, formAction] = useFormState(loanReqFormAction, {});

  return (
    <section className="py-5 md:py-10">
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

        <form action={formAction} method="POST" className="mx-auto max-w-2xl">
          <h4 className="mb-8">
            Paso 1 de 2: <br />
            Completá los datos del formulario.
          </h4>
          <p className="mb-16">Los campos con * son obligatorios</p>
          <p className="mb-8 border-b border-blue pb-4 font-outfit font-medium text-blue md:border-none">
            Datos del adulto responsable
          </p>
          <Input
            id="fullname"
            name="fullname"
            label="Nombre y apellido:"
            placeholder="Ej: Marísol Hernández"
            type="text"
            error={!!errorMsg.fullname}
            helperText={errorMsg.fullname?.at(0) || "Ej: Marísol Hernández"}
          />
          <Input
            id="dni"
            name="dni"
            label="DNI:"
            placeholder="Ej: 35764532 (sin puntos)"
            type="number"
            error={!!errorMsg.dni}
            helperText={errorMsg.dni?.at(0) || "Ej: 35764532 (sin puntos)"}
          />
          <div className="grid grid-cols-[1fr_1fr] grid-rows-2 gap-4 md:grid-cols-[6fr_2fr_2fr] md:grid-rows-1">
            <Input
              id="calle"
              name="calle"
              label="Calle:"
              placeholder="Ej: Mitre"
              type="text"
              error={!!errorMsg.calle}
              helperText={errorMsg.calle?.at(0) || "Ej: Mitre"}
            />
            <Input
              id="altura"
              name="altura"
              label="Altura:"
              placeholder="Ej: 1200"
              type="number"
              error={!!errorMsg.altura}
              helperText={errorMsg.altura?.at(0) || "Ej: 1200"}
            />
            <div className="col-span-2 md:col-span-1">
              <Input
                id="depto"
                name="depto"
                label="Piso y depto:"
                placeholder="Ej: 4B"
                type="text"
                error={!!errorMsg.depto}
                helperText={errorMsg.depto?.at(0) || "Ej: 4B"}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[6fr_4fr]">
            <Input
              id="localidad"
              name="localidad"
              label="Localidad:"
              placeholder="Ej: Mitre"
              type="text"
              error={!!errorMsg.localidad}
              helperText={errorMsg.localidad?.at(0) || "Ej: Mitre"}
            />
            <Input
              id="postal"
              name="postal"
              label="Codigo postal:"
              placeholder="Ej: 1870"
              type="number"
              error={!!errorMsg.postal}
              helperText={errorMsg.postal?.at(0) || "Ej: 1870"}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_5fr_4fr]">
            <Input
              id="area"
              name="area"
              label="Area:"
              placeholder="Ej: 011"
              type="text"
              pattern="[0-9]{3}"
              error={!!errorMsg.area}
              helperText={errorMsg.area?.at(0) || "Ej: 011"}
            />
            <Input
              id="phone"
              name="phone"
              label="Teléfono de contacto:"
              placeholder="Ej: 42229845"
              type="tel"
              error={!!errorMsg.phone}
              helperText={errorMsg.phone?.at(0) || "Ej: 42229845"}
            />
            <Input
              id="email"
              name="email"
              label="Email de contacto:"
              placeholder="Ej: mhernandez@gmail.com"
              type="email"
              error={!!errorMsg.email}
              helperText={errorMsg.email?.at(0) || "Ej: mhernandez@gmail.com"}
            />
          </div>
          <Input
            id="child-link"
            name="child-link"
            label="Vínculo con el niño o niña:"
            type="text"
            error={!!errorMsg["child-link"]}
            helperText={
              errorMsg["child-link"]?.at(0) || "Vínculo con el niño o niña:"
            }
          />
          <p className="mb-8 mt-6 border-b border-blue pb-4 font-outfit font-medium text-blue md:border-none">
            Datos del niño o niña
          </p>
          <Input
            id="child-fullname"
            name="child-fullname"
            placeholder="Ej: María Fernández"
            label="Nombre y apellido del niño o niña:"
            type="text"
            error={!!errorMsg["child-fullname"]}
            helperText={
              errorMsg["child-fullname"]?.at(0) || "Ej: María Fernández"
            }
          />
          <Input
            id="child-dni"
            name="child-dni"
            label="DNI del niño o niña:"
            placeholder="Ej: 35764532 (sin puntos)"
            type="number"
            error={!!errorMsg["child-dni"]}
            helperText={
              errorMsg["child-dni"]?.at(0) || "Ej: 35764532 (sin puntos)"
            }
          />
          <TextArea
            label="¿Qué problemática motriz tiene?"
            error={!!errorMsg.fullname}
            helperText={
              errorMsg.fullname?.at(0) || "¿Qué problemática motriz tiene?:"
            }
            rows={5}
          />
          <TextArea
            label="Información relevante:"
            rows={5}
            error={!!errorMsg.fullname}
            helperText={errorMsg.fullname?.at(0) || "Información relevante:"}
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
