const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 to-gray-200">
      {children}
    </div>
  );
};

export default AuthLayout;
