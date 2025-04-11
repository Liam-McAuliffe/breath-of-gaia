const Terms = () => {
  return (
    <div className="h-350 sm:w-[80%] w-full p-0 sm:p-10 sm:pt-0 mx-auto">
      <h1
        className="text-center text-5xl font-bold m-[0.5em] text-text-dark"
        id="terms"
      >
        Terms of Service
      </h1>
      <embed
        className="h-full w-full"
        src="../../../docs/terms-of-service.pdf"
        type="application/pdf"
        title="Terms of Service Document"
      />
    </div>
  );
};

export default Terms;
