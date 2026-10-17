import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Section = ({ heading, children }) => (
  <section className="border-b border-border py-10">
    <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
    <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

const P = ({ children }) => <p className="text-foreground/90">{children}</p>;
const Li = ({ children }) => <li className="ml-5 list-disc">{children}</li>;

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">S</span>
            <span className="text-lg font-semibold">Spokefolio</span>
          </Link>
          <Link to="/"><Button variant="outline">Back to home</Button></Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: October 16, 2026 (draft v0.1)</p>
        <p className="mt-6 text-sm leading-relaxed text-foreground/90">
          These Terms of Service ("Terms") govern your use of Spokefolio, a career knowledge
          base and resume tailoring service operated by XFH Game Studio ("we", "us", "our"),
          Edmonton, Alberta, Canada. By creating an account or using the service, you agree to
          these Terms.
        </p>

        <Section heading="1. What the service does">
          <P>Spokefolio records your professional history through voice, documents, and text, stores it as a structured knowledge base, and generates resumes and cover letters tailored to job postings you provide. Output is provided in downloadable formats.</P>
        </Section>

        <Section heading="2. Eligibility and your account">
          <P>You must be at least 18 years old and provide accurate information. You are responsible for keeping your password confidential and for activity under your account. One person or organization per account; do not share credentials.</P>
        </Section>

        <Section heading="3. Your content">
          <P><strong>You own your content.</strong> "Content" means everything you provide or generate in the service: your profile, career history, documents, job postings, notes, resumes, and cover letters. We claim no ownership of it.</P>
          <P>You grant us a limited license to store, process, and (where you direct) generate text from your content solely to operate the service. When you delete content or your account, that license ends, subject to standard backups that age out.</P>
          <P>You confirm you have the right to upload any documents you provide and that they do not contain another person's personal information without their consent.</P>
        </Section>

        <Section heading="4. Acceptable use">
          <P>Do not:</P>
          <ul className="space-y-1">
            <Li>Use the service for any unlawful purpose or to misrepresent your qualifications to employers</Li>
            <Li>Upload malicious code or attempt to gain unauthorized access to the service, other accounts, or our systems</Li>
            <Li>Scrape, reverse engineer, resell, or create a derivative service from the Spokefolio application</Li>
            <Li>Interfere with the service's operation or other users</Li>
          </ul>
          <P>We may suspend accounts that threaten the service or other users.</P>
        </Section>

        <Section heading="5. Payment terms">
          <P><strong>Free trial.</strong> New accounts can generate up to 10 tailored resumes free of charge. When your trial is used, your knowledge base and every resume you already created remain in your account and can be exported at no cost; only generating new tailored content is paused until you purchase a pass.</P>
          <P>Access beyond the trial is offered as a <strong>30-day pass</strong>: a one-time, non-renewing purchase. We do not store your card details, and your pass never auto-renews or auto-charges. When it expires, your data remains in your account; only generation and export features are gated.</P>
          <P>Refunds: because passes are one-time and non-renewing, we will consider refund requests made within 7 days of purchase where the service was substantially unavailable or did not perform as described. This does not limit any stronger rights you have under consumer protection law.</P>
        </Section>

        <Section heading="6. AI-generated content and honest expectations">
          <P>Summaries, match analyses, and resume content are generated with artificial intelligence and may contain errors. <strong>You are responsible for reviewing all generated content before sending it to any employer.</strong></P>
          <P>Resumes are built to ATS readability standards (single column, standard fonts, standard section names, no embedded text in graphics). We cannot guarantee how any specific employer system parses any document, and we make no promise of interviews, job offers, or employment outcomes.</P>
        </Section>

        <Section heading="7. Availability and changes">
          <P>We aim for reliable availability but do not promise uninterrupted service. We may add, change, or remove features. If we make a material reduction to what an active pass covers, we will remedy it fairly, for example by extending the pass.</P>
        </Section>

        <Section heading="8. Limitation of liability">
          <P>To the maximum extent permitted by law, our total liability arising from your use of the service is limited to the amount you paid us in the 12 months before the claim (or $25 CAD if you have not paid). We are not liable for indirect or consequential damages, including lost opportunities, wages, or employment. Nothing in these Terms excludes liability we cannot exclude by law.</P>
        </Section>

        <Section heading="9. Termination">
          <P>You may stop using the service and delete your account at any time. We may suspend or terminate accounts that breach these Terms, with notice where practical. On termination, sections 3, 5, 8, 10, and 11 survive.</P>
        </Section>

        <Section heading="10. Intellectual property">
          <P>The Spokefolio application, its design, and its underlying software are owned by XFH Game Studio and protected by intellectual property laws. "Spokefolio" and associated marks belong to us. These Terms grant you no rights in the service itself beyond using it as intended.</P>
        </Section>

        <Section heading="11. Governing law and disputes">
          <P>These Terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable in Alberta. The parties will first attempt in good faith to resolve disputes directly; where that fails, the courts of Alberta have exclusive jurisdiction.</P>
        </Section>

        <Section heading="12. Changes to these Terms">
          <P>We may update these Terms as the service evolves. Material changes will be announced in the application with the revised effective date. If you keep using the service after the notice period, you accept the updated Terms.</P>
        </Section>

        <p className="mt-10 text-xs text-muted-foreground">
          Contact: KellarM@xfhgamestudioltd.com or 780-504-4899.
          This document is a draft prepared for review with qualified Canadian counsel before publication.
        </p>
      </main>
    </div>
  );
}
