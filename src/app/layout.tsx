import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),

  title: "gaurav jangir",
  authors: {
    name: "gaurav jangir",
  },

  description:
    "Based in India, I'm a Frontend Developer passionate about building a modern web application that users love.",
  openGraph: {
    title: "Gaurav Jangir",
    description:
      "Based in India, I'm a Frontend Developer passionate about building a modern web application that users love.",
    url: "https://localhost:3000",
    siteName: "gaurav jangir",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "gaurav jangir",
    "gaurav",
    "jangir",
    "gauravjangir",
    "GauravJangir",
    "Gaurav Jangir",
    "Gaurav",
    "Jangir",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
