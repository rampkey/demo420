"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
type Message = {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
};
const initial: Message = {
  nombre: "",
  email: "",
  asunto: "Información de una referencia",
  mensaje: "",
};
export function ContactForm() {
  const [ready, setReady] = useState(false);
  const [values, setValues] = useState<Message>(initial);
  const [preview, setPreview] = useState<Message | null>(null);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    setReady(true);
  }, []);
  const change = (field: keyof Message, value: string) => {
    setValues((old) => ({ ...old, [field]: value }));
    setPreview(null);
  };
  const showPreview = () => {
    if (form.current?.reportValidity()) setPreview({ ...values });
  };
  return (
    <div className="cu-contact-form-shell">
      <div className="cu-form-heading">
        <p className="cu-kicker">
          <i aria-hidden="true" />
          SIMULACIÓN LOCAL
        </p>
        <h2>
          Tu mensaje.
          <br />
          <span>Solo una vista previa.</span>
        </h2>
        <p id="contact-simulation-note">
          Este formulario no envía ni guarda información. Puedes usar datos de
          ejemplo.
        </p>
      </div>
      <form
        ref={form}
        aria-label="Simulación del formulario de contacto"
        aria-describedby="contact-simulation-note"
        onSubmit={(event) => {
          event.preventDefault();
          showPreview();
        }}
      >
        <fieldset disabled={!ready}>
          <legend className="sr-only">
            Datos de ejemplo para la vista previa
          </legend>
          <div className="cu-form-row">
            <label htmlFor="contact-name">
              Nombre
              <input
                id="contact-name"
                autoComplete="off"
                placeholder="Nombre de ejemplo"
                value={values.nombre}
                onChange={(event) => change("nombre", event.target.value)}
                required
                maxLength={100}
              />
            </label>
            <label htmlFor="contact-email">
              Email
              <input
                id="contact-email"
                type="email"
                autoComplete="off"
                placeholder="nombre@example.com"
                value={values.email}
                onChange={(event) => change("email", event.target.value)}
                required
                maxLength={160}
              />
            </label>
          </div>
          <label htmlFor="contact-topic">
            Asunto
            <select
              id="contact-topic"
              value={values.asunto}
              onChange={(event) => change("asunto", event.target.value)}
            >
              <option>Información de una referencia</option>
              <option>Información general</option>
              <option>Otro asunto</option>
            </select>
          </label>
          <label htmlFor="contact-message">
            Mensaje
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Escribe un mensaje de ejemplo…"
              value={values.mensaje}
              onChange={(event) => change("mensaje", event.target.value)}
              required
              maxLength={2000}
            />
          </label>
          <button
            type="button"
            className="cu-button cu-button-primary"
            onClick={showPreview}
          >
            Ver vista previa <Icon name="arrow" />
          </button>
        </fieldset>
        {!ready && (
          <p className="cu-form-fallback">
            La simulación necesita JavaScript. Los campos permanecen
            desactivados para evitar cualquier envío.
          </p>
        )}
      </form>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="cu-preview-status"
      >
        {preview
          ? "Vista previa preparada. No se ha enviado ningún mensaje."
          : "Sin envíos. Sin almacenamiento. Sin conexiones con terceros."}
      </div>
      {preview && (
        <section
          className="cu-message-preview"
          aria-label="Vista previa del mensaje"
        >
          <p className="cu-kicker">VISTA PREVIA / NO ENVIADO</p>
          <h3>{preview.asunto}</h3>
          <p>
            {preview.nombre} · {preview.email}
          </p>
          <div>{preview.mensaje}</div>
          <button
            type="button"
            onClick={() => {
              setPreview(null);
              form.current?.querySelector<HTMLInputElement>("input")?.focus();
            }}
          >
            Volver a editar
          </button>
        </section>
      )}
    </div>
  );
}
