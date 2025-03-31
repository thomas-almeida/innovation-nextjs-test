import "./globals.css";

export const metadata = {
  title: "Login - Innovation Brindes",
  description: "Innovation Brindes, faça login para se conectar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
