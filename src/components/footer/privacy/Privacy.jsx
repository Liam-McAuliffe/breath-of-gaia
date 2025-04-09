// src/components/privacy/Privacy.jsx
import './privacy.css';

function Privacy() {
  return (
    <div className="pdf-container">
      <div className="pdf-document">
        <iframe
          src={'/docs/privacy-policy.pdf'}
          title="Privacy Policy"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
        >
          This browser does not support PDFs. Please download the PDF to view
          it: <a href={'/docs/privacy-policy.pdf'}>Download PDF</a>.
        </iframe>
      </div>
    </div>
  );
}

export default Privacy;
