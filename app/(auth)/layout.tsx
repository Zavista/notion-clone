type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <div>Layout!</div>
      {children}
    </div>
  );
};

export default RootLayout;
