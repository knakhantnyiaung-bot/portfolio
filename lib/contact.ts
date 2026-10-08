export type ContactValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length > 100) {
    errors.name = "Name must be 100 characters or fewer.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (
    values.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  } else if (values.message.trim().length > 5000) {
    errors.message = "Message must be 5,000 characters or fewer.";
  }

  return errors;
}
