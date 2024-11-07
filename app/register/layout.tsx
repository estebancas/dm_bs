export default function RegisterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col w-full max-w-[480px] py-20 px-6 h-full min-h-screen">
      {children}
    </main>
  );
}
