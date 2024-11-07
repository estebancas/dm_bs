import AppTabbar from "@/components/app-tabbar";

export default function AppPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-center w-full max-w-[480px] h-screen overflow-hidden relative">
      <div className="overflow-auto px-4 pt-20 pb-28 w-full">{children}</div>
      <AppTabbar />
    </main>
  );
}
