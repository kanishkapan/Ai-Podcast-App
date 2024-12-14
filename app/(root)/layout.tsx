import LeftSidebar from "@/components/ui/ui/LeftSidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <LeftSidebar />
        <p className="text-white-1">LEFT SIDEBAR </p>
        {children}
        <p className="text-white-1">RIGHT SIDEBAR </p>
      </main>
    </div>
  );
}
