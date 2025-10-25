export const metadata = {
  title: "Brivia — Travel tech for authentic connections",
  description: "AI-powered infrastructure connecting people and places.",
  openGraph: {
    title: "Brivia",
    description: "Travel tech for authentic connections",
    images: ["/og-image.jpg"],
  },
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
