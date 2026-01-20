export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container text-center">
        <p className="mb-1 footer-title">TOPSIS</p>
        <p className="mb-1 footer-subtitle">
          Built by CHIRAG GUPTA – 102303483
        </p>
        <small className="footer-copy">
          © {new Date().getFullYear()} All rights reserved
        </small>
      </div>
    </footer>
  );
}