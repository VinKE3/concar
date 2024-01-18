import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "harquin09@gmail.com",
    subject: "2FA Code",
    reply_to: email,
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
  name: string
) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "harquin09@gmail.com",
    subject: "Reset your password",
    reply_to: email,
    html: `<p>Hola ${name}, Click <a href="${resetLink}">AQUI</a> para reiniciar tu contraseña.</p>`,
  });
};

export const sendVerificationEmail = async (
  email: string,
  token: string,
  name: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "harquin09@gmail.com",
    subject: "Confirm your email",
    reply_to: email,
    html: `<p>Hola ${name}, Click <a href="${confirmLink}">AQUI</a> para confirmar mail.</p>`,
  });
};
