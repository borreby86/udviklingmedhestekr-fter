'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { trackEvent } from '@/lib/analytics'

type FormMode = 'contact' | 'call'

const EMAIL = 'info@christinaborreby.dk'

export function FloatingContact() {
  const pathname = usePathname()
  const [panelOpen, setPanelOpen] = useState(false)
  const [formMode, setFormMode] = useState<FormMode>('contact')
  const [visible, setVisible] = useState(true)
  const [dismissed, setDismissed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitFailed, setSubmitFailed] = useState(false)
  const [openedAt, setOpenedAt] = useState(0)

  useEffect(() => {
    setDismissed(false)
    setVisible(true)
  }, [pathname])

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (y > lastY + 4) setVisible(false)
      else if (y < lastY - 4) setVisible(true)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!panelOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPanelOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [panelOpen])

  useEffect(() => {
    const onOpen = (e: Event) => {
      const mode = (e as CustomEvent<{ mode?: FormMode }>).detail?.mode ?? 'contact'
      setFormMode(mode)
      setPanelOpen(true)
      setDismissed(false)
      setSubmitFailed(false)
      setOpenedAt(Date.now())
    }
    window.addEventListener('open-floating-contact', onOpen)
    return () => window.removeEventListener('open-floating-contact', onOpen)
  }, [])

  // Kontaktsiden har sin egen formular
  if (pathname?.startsWith('/kontakt')) return null

  const open = (mode: FormMode) => {
    setFormMode(mode)
    setPanelOpen(true)
    setSubmitFailed(false)
    setOpenedAt(Date.now())
    trackEvent?.('floating_contact_open', { mode })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setSubmitting(true)
    setSubmitFailed(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          company: fd.get('company'),
          topic: fd.get('topic'),
          callTime: fd.get('callTime'),
          message: fd.get('message'),
          formType: formMode === 'call' ? 'floating-opkald' : 'floating-kontakt',
          _honeypot: fd.get('website'),
          _loadTime: openedAt,
        }),
      })
      if (!res.ok) throw new Error('submit_failed')
      setSubmitted(true)
      trackEvent?.('floating_contact_submit', { mode: formMode })
      setTimeout(() => {
        setPanelOpen(false)
        setTimeout(() => setSubmitted(false), 400)
      }, 3600)
    } catch {
      setSubmitFailed(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Flydende runde knapper */}
      <AnimatePresence>
        {visible && !panelOpen && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fc-cluster"
          >
            <button onClick={() => setDismissed(true)} aria-label="Luk menu" className="fc-dismiss">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => open('call')}
              aria-label="Book et uforpligtende opkald"
              title="Book et uforpligtende opkald"
              className="fc-fab fc-fab-dark"
            >
              <svg className="fc-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => open('contact')}
              aria-label="Kontakt"
              title="Skriv til mig"
              className="fc-fab fc-fab-copper"
            >
              <svg className="fc-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.6-.8L3 21l1.9-5.1A8.4 8.4 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel fra højre */}
      <AnimatePresence>
        {panelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fc-overlay"
              onClick={() => setPanelOpen(false)}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="fc-panel"
              role="dialog"
              aria-modal="true"
              aria-label={formMode === 'call' ? 'Book et uforpligtende opkald' : 'Kontaktformular'}
            >
              <div className="fc-scroll" data-lenis-prevent>
                <button onClick={() => setPanelOpen(false)} className="fc-close" aria-label="Luk kontakt">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="fc-success">
                    <div className="fc-success-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="fc-rule fc-rule-center" />
                    <span className="fc-eyebrow">Tak for din henvendelse</span>
                    <h3 className="fc-title">Besked modtaget</h3>
                    <p className="fc-lead">
                      {formMode === 'call'
                        ? 'Jeg ringer til dig inden for 24 timer.'
                        : 'Jeg vender tilbage inden for 24 timer.'}
                    </p>
                  </motion.div>
                ) : (
                  <div>
                    {formMode === 'call' ? (
                      <>
                        <span className="fc-eyebrow">Uforpligtende opkald</span>
                        <h2 className="fc-title">
                          Book et opkald
                          <br />
                          <span>så vi kan tale om, hvad der giver mening</span>
                        </h2>
                        <p className="fc-lead">Fortæl, hvornår det passer dig, så ringer jeg.</p>
                      </>
                    ) : (
                      <>
                        <span className="fc-eyebrow">Lad os tale sammen</span>
                        <h2 className="fc-title">
                          Skriv til Christina
                          <br />
                          <span>om leder- og teamudvikling med heste</span>
                        </h2>
                        <p className="fc-lead">Spørgsmål eller sparring? Fortæl, hvad der ligger dig på sinde.</p>
                      </>
                    )}

                    <form id="floating-contact-form" onSubmit={handleSubmit} className="fc-form">
                      <div className="fc-honeypot" aria-hidden="true">
                        <label htmlFor="fc-website">Website</label>
                        <input type="text" id="fc-website" name="website" tabIndex={-1} autoComplete="off" />
                      </div>

                      <Field name="name" type="text" required label="Navn" placeholder="Dit fulde navn" />
                      <Field name="email" type="email" required label="Email" placeholder="Din email-adresse" />
                      <Field
                        name="phone"
                        type="tel"
                        required={formMode === 'call'}
                        label="Telefon"
                        placeholder={formMode === 'call' ? 'Dit telefonnummer' : 'Dit telefonnummer (valgfrit)'}
                      />

                      {formMode === 'call' ? (
                        <>
                          <Field name="company" type="text" label="Virksomhed" placeholder="Hvor kommer du fra? (valgfrit)" />
                          <div className="fc-field">
                            <label htmlFor="fc-calltime">Passende tidspunkt</label>
                            <select id="fc-calltime" name="callTime" defaultValue="">
                              <option value="" disabled>Vælg</option>
                              <option value="Formiddag">Formiddag</option>
                              <option value="Eftermiddag">Eftermiddag</option>
                              <option value="Sen eftermiddag / aften">Sen eftermiddag / aften</option>
                              <option value="Fleksibel">Fleksibel</option>
                            </select>
                          </div>
                          <div className="fc-field">
                            <label htmlFor="fc-message">
                              Hvad vil du gerne tale om? <em>(valgfrit)</em>
                            </label>
                            <textarea id="fc-message" name="message" rows={3} placeholder="Kort om din situation eller dit ønske..." />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="fc-field">
                            <label htmlFor="fc-topic">Emne</label>
                            <select id="fc-topic" name="topic" required defaultValue="">
                              <option value="" disabled>Vælg emne</option>
                              <option value="Lederudvikling">Lederudvikling</option>
                              <option value="Teamudvikling">Teamudvikling</option>
                              <option value="Samtaler & coaching">Samtaler &amp; coaching</option>
                              <option value="Unge / En dag med heste">Unge / En dag med heste</option>
                              <option value="Andet">Andet</option>
                            </select>
                          </div>
                          <div className="fc-field">
                            <label htmlFor="fc-message">Din besked</label>
                            <textarea id="fc-message" name="message" required rows={6} placeholder="Skriv din besked her..." />
                          </div>
                        </>
                      )}

                      {submitFailed && (
                        <p className="fc-error" role="alert">
                          Noget gik galt. Prøv igen, eller skriv direkte til{' '}
                          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                        </p>
                      )}
                    </form>
                  </div>
                )}

                <div className="fc-meta">
                  <div className="fc-rule" />
                  <div className="fc-meta-row">
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    <span>Hørsholm</span>
                  </div>
                </div>
              </div>

              {!submitted && (
                <div className="fc-footer">
                  <div className="fc-footer-fade" />
                  <button type="submit" form="floating-contact-form" disabled={submitting} className="fc-submit">
                    {submitting ? 'Sender...' : formMode === 'call' ? 'Book opkald' : 'Send besked'}
                    {!submitting && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function Field({
  name,
  type,
  required,
  label,
  placeholder,
}: {
  name: string
  type: string
  required?: boolean
  label: string
  placeholder: string
}) {
  const id = `fc-${name}`
  return (
    <div className="fc-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} required={required} placeholder={placeholder} />
    </div>
  )
}
