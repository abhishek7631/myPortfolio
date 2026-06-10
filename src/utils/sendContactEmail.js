import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const MY_EMAIL =
  import.meta.env.VITE_MY_EMAIL || "abhishek.choudhary7631@gmail.com";

function isEmailJsConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendContactEmail({ name, email, subject, message }) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "Email is not configured. Add EmailJS keys to your .env file.",
    );
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      subject,
      message,
      to_email: MY_EMAIL,
    },
    { publicKey: PUBLIC_KEY },
  );
}
