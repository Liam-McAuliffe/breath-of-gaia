const Privacy = () => {
  return (
    <div className="h-350 sm:w-[80%] w-full p-0 sm:p-10 sm:pt-0 mx-auto">
      <h1
        className="text-center text-5xl font-bold m-[0.5em] text-text-dark"
        id="privacy"
      >
        Privacy Policy
      </h1>
      <embed
        className="h-full w-full"
        src="../../../docs/privacy-policy.pdf"
        type="application/pdf"
        title="Privacy Policy Document"
      />
    </div>
  );
};

export default Privacy;
