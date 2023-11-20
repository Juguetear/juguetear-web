"use client";

import Notification from "components/HighlightedWrapper/HighlightedWrapper";
import EnvelopeIcon from "components/assets/EnvelopeIcon";
import { postClient } from "lib/sanity-client";
import { useState } from "react";

interface ContactFormProps {
  children: React.ReactNode;
}

export const ContactForm = ({ children }: ContactFormProps) => {
  const [displayNotif, setDisplayNotif] = useState<boolean>(false);
  const [notifMsg, setNotifMsg] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // TODO: Add validation
    const { name, email, body } = Object.fromEntries(formData);

    const response = await postClient
      .create({
        _type: "_message",
        name,
        email,
        body,
      })
      .then(() =>
        setNotifMsg("¡Tu mensaje fue enviado! Te responderemos a la brevedad.")
      )
      .catch(() =>
        setNotifMsg(
          "Hubo un error al intentar enviar tu mensaje, intentalo nuevamente."
        )
      )
      .finally(() => setDisplayNotif((display) => !display));
    return response;
  };

  const handleClick = () => {
    setDisplayNotif((display) => !display);
  };

  return (
    <>
      {displayNotif ? (
        <Notification>
          <div className="flex justify-center">
            {/* TODO: Display another icon than EnvelopeIcon in case of an error. */}
            <EnvelopeIcon className="shrink-0" />
            <div className="ml-5 text-center">
              <p>{notifMsg}</p>
              <button className="font-semibold" onClick={handleClick}>
                Enviar otro mensaje
              </button>
            </div>
          </div>
        </Notification>
      ) : (
        <form className="container max-w-2xl" onSubmit={handleSubmit}>
          {children}
        </form>
      )}
    </>
  );
};
