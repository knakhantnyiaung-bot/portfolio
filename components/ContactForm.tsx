"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setValues(initialValues);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thanks for reaching out. I&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border bg-surface p-7 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: "var(--gradient-brand)" }}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
