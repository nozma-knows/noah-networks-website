import TopBar from "src/components/feature-navigation/ui/TopBar";

interface PageProps {
  children: JSX.Element;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="flex flex-col bg-main-dark text-main-dark w-screen h-screen">
      <div className="flex h-28">
        <TopBar />
      </div>
      <div className="flex w-full h-full overflow-auto">{children}</div>
    </div>
  );
}
