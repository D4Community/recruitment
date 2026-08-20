import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "D4 Community - Team Recruitment 2026–27",
  description:
    "D4 is a non-profit developer community run by students. Apply to join the 2026–27 team.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col font-body" suppressHydrationWarning>
        <ThemeProviderWrapper>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
