import "./globals.css";

export const metadata = {
  title: "Ingegneria della Narrativa",
  description: "Da Esecutore a Creatore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
