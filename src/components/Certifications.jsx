import { Award, ExternalLink } from "lucide-react";
import certifications from "../data/certifications.js";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">
            Certifications <span className="accent">&amp; Learning</span>
          </h2>
          <p className="section-sub">
            Credentials I&rsquo;m working toward and earning alongside coursework. Dates and
            credential IDs are added as they&rsquo;re actually issued — nothing here is
            invented.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="card cert-card reveal" key={cert.id}>
              <div className="cert-card-icon">
                <Award size={20} />
              </div>
              <h3 className="cert-card-title">{cert.title}</h3>
              <p className="cert-card-issuer">{cert.issuer}</p>

              <dl className="cert-card-meta">
                <div>
                  <dt>Date</dt>
                  <dd>{cert.date || "In progress"}</dd>
                </div>
                <div>
                  <dt>Credential ID</dt>
                  <dd>{cert.credentialId || "Not yet available"}</dd>
                </div>
              </dl>

              {cert.credentialUrl ? (
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm btn-block">
                  <ExternalLink size={14} /> View Certificate
                </a>
              ) : (
                <span className="cert-card-pending mono">Certificate link pending</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
