function Tos() {
  return (
    <div className="pdf-container">
      <div className="pdf-document">
        <iframe
          src={'/docs/terms-of-service.pdf'}
          title="Terms of Service"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
        >
          This browser does not support PDFs. Please download the PDF to view
          it: <a href={'/docs/terms-of-service.pdf'}>Download PDF</a>.
        </iframe>
      </div>
    </div>
  );
}

export default Tos;
