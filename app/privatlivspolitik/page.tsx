import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privatlivspolitik | Christina Borreby',
  description: 'Læs om hvordan vi behandler dine personoplysninger og bruger cookies på christinaborreby.dk',
}

export default function PrivatlivspolitikPage() {
  return (
    <>
      <Navigation />

      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="privacy-hero-content">
            <p className="section-label">Juridisk</p>
            <h1>Privatlivspolitik</h1>
            <p className="privacy-intro">
              Hos Christina Borreby værner vi om dit privatliv. Her kan du læse om,
              hvordan vi behandler dine personoplysninger.
            </p>
          </div>
        </section>

        <section className="privacy-content">
          <div className="privacy-container">

            <article className="privacy-section">
              <h2>1. Dataansvarlig</h2>
              <p>
                Christina Borreby er dataansvarlig for behandlingen af de personoplysninger,
                som vi modtager om dig. Du kan kontakte os på:
              </p>
              <ul>
                <li><strong>Email:</strong> info@christinaborreby.dk</li>
                <li><strong>Adresse:</strong> Hørsholm, Nordsjælland</li>
              </ul>
            </article>

            <article className="privacy-section">
              <h2>2. Hvilke oplysninger indsamler vi?</h2>
              <p>Vi indsamler og behandler følgende typer af personoplysninger:</p>
              <h3>Kontaktformular</h3>
              <p>
                Når du udfylder vores kontaktformular, indsamler vi: navn, email,
                telefonnummer (valgfrit), virksomhed (valgfrit) og din besked.
              </p>
              <h3>Cookies og analyse</h3>
              <p>
                Vi bruger cookies til at analysere trafikken på vores website.
                Se vores cookie-politik nedenfor for detaljer.
              </p>
            </article>

            <article className="privacy-section">
              <h2>3. Formål med behandlingen</h2>
              <p>Vi behandler dine oplysninger til følgende formål:</p>
              <ul>
                <li>At besvare din henvendelse via kontaktformularen</li>
                <li>At forbedre vores website baseret på brugeradfærd (anonymiseret)</li>
                <li>At levere og forbedre vores services</li>
              </ul>
            </article>

            <article className="privacy-section">
              <h2>4. Retsgrundlag</h2>
              <p>Vi behandler dine personoplysninger på følgende retsgrundlag:</p>
              <ul>
                <li><strong>Samtykke:</strong> Når du accepterer cookies til analyse</li>
                <li><strong>Legitim interesse:</strong> For at besvare dine henvendelser</li>
                <li><strong>Kontrakt:</strong> Når du booker et forløb hos os</li>
              </ul>
            </article>

            <article className="privacy-section">
              <h2>5. Cookie-politik</h2>
              <p>
                Vores website bruger cookies. Cookies er små tekstfiler, der gemmes på din
                enhed for at hjælpe websitet med at fungere og forbedre din oplevelse.
              </p>

              <h3>Nødvendige cookies</h3>
              <p>
                Disse cookies er essentielle for at websitet kan fungere korrekt.
                De kan ikke deaktiveres og gemmer ingen personlige oplysninger.
              </p>

              <h3>Analyse cookies</h3>
              <p>
                Hvis du accepterer, bruger vi følgende analyse-tjenester:
              </p>
              <ul>
                <li>
                  <strong>Google Analytics:</strong> Hjælper os med at forstå, hvordan
                  besøgende bruger vores website. IP-adresser anonymiseres.
                </li>
                <li>
                  <strong>Vercel Analytics:</strong> Privacy-venlig analyse uden cookies,
                  der giver os indsigt i websitets ydeevne.
                </li>
              </ul>

              <h3>Administrer dine præferencer</h3>
              <p>
                Du kan til enhver tid ændre dine cookie-præferencer ved at slette
                dine browser-cookies og genindlæse siden.
              </p>
            </article>

            <article className="privacy-section">
              <h2>6. Opbevaring af data</h2>
              <p>
                Vi opbevarer dine personoplysninger så længe, det er nødvendigt for de
                formål, de blev indsamlet til:
              </p>
              <ul>
                <li>Kontaktformular-henvendelser: Op til 2 år</li>
                <li>Cookie-præferencer: 1 år</li>
                <li>Analyse-data: Op til 26 måneder (Google Analytics)</li>
              </ul>
            </article>

            <article className="privacy-section">
              <h2>7. Dine rettigheder</h2>
              <p>Du har følgende rettigheder i henhold til GDPR:</p>
              <ul>
                <li><strong>Indsigt:</strong> Du kan få indsigt i de oplysninger, vi har om dig</li>
                <li><strong>Berigtigelse:</strong> Du kan få rettet urigtige oplysninger</li>
                <li><strong>Sletning:</strong> Du kan anmode om sletning af dine oplysninger</li>
                <li><strong>Begrænsning:</strong> Du kan anmode om begrænsning af behandlingen</li>
                <li><strong>Dataportabilitet:</strong> Du kan få udleveret dine data i et maskinlæsbart format</li>
                <li><strong>Indsigelse:</strong> Du kan gøre indsigelse mod behandlingen</li>
              </ul>
              <p>
                For at udøve dine rettigheder, kontakt os på info@christinaborreby.dk
              </p>
            </article>

            <article className="privacy-section">
              <h2>8. Klage</h2>
              <p>
                Du har ret til at indgive en klage til Datatilsynet, hvis du mener,
                at vi behandler dine personoplysninger i strid med reglerne:
              </p>
              <p>
                <strong>Datatilsynet</strong><br />
                Carl Jacobsens Vej 35<br />
                2500 Valby<br />
                dt@datatilsynet.dk
              </p>
            </article>

            <article className="privacy-section">
              <h2>9. Ændringer</h2>
              <p>
                Vi forbeholder os retten til at opdatere denne privatlivspolitik.
                Ved væsentlige ændringer vil vi informere dig via websitet.
              </p>
              <p className="privacy-updated">
                Senest opdateret: Januar 2026
              </p>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
