const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyryght">© {currentYear} Mesto Russia</p>
    </footer>
  );
}
