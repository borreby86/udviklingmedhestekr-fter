export default function Navigation() {
  return (
    <nav id="navbar">
      <ul className="nav-links">
        <li><a href="/#indsigter">Indsigter</a></li>
        <li><a href="/lederworkshop">Lederworkshop</a></li>
        <li><a href="/referencer">Referencer</a></li>
        <li><a href="/#om">Om mig</a></li>
        <li><a href="/#kontakt" className="nav-cta">Kontakt</a></li>
      </ul>
      <button className="mobile-menu-btn" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
