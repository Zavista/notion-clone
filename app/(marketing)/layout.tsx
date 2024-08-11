import Navbar from "./_components/Navbar";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="h-full  dark:bg-[#1F1F1F]">
      <Navbar></Navbar>
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
