function WrapperCenterFlex({ children }) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      {children}
    </div>
  );
}

export default WrapperCenterFlex;
