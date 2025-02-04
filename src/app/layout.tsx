import "@/app/ui/globals.css";
import IWoodnoteHeader from "@/app/ui/iwood-note-header";
import { geistMono, geistSans } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        <main className="flex flex-col p-5 min-h-screen">
          <div className="flex h-32 shrink-0 items-center rounded-t-lg bg-teal-700 p-4">
            <IWoodnoteHeader />
          </div>
          <div className="flex grow flex-col gap-4">
            <div className="flex flex-row justify-center gap-5 rounded-b-lg bg-teal-700 p-5">
              Section 1 TBA
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
