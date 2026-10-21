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

export default function Privacy() {
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
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: October 16, 2026 (draft v0.1)</p>
        <p className="mt-6 text-sm leading-relaxed text-foreground/90">
          Spokefolio is a career knowledge base and resume tailoring service operated by
          XFH Game Studio ("we", "us", "our"), Edmonton, Alberta, Canada. This policy explains
          what personal information we collect, how we use it, and the choices you have.
        </p>

        <Section heading="1. What we collect">
          <P><strong>Account information.</strong> Your name, email address, and password when you create an account. Passwords are stored only as secure hashes.</P>
          <P><strong>Career information you provide.</strong> Depending on how you use the service, this may include:</P>
          <ul className="space-y-1">
            <Li>Profile details: name, phone, location, LinkedIn or website links, and a headline you write</Li>
            <Li>Employment history: job titles, employers, dates, locations, accomplishments, skills, metrics, and summaries</Li>
            <Li>Education history</Li>
            <Li>Documents you upload (for example, an old resume, transcript, certificate, or performance review)</Li>
            <Li>Job postings you save or paste, including employer names and descriptions</Li>
            <Li>Workplace addresses you enter so we can estimate your commute</Li>
          </ul>
          <P><strong>Voice recordings.</strong> If you use voice intake, we receive an audio recording of what you say. The recording is used to produce a written transcript. The audio itself is deleted once transcription is complete; the transcript is kept as part of your career entries.</P>
          <P><strong>Application content.</strong> Resumes, cover letters, match summaries, and notes generated or saved within the service.</P>
          <P><strong>Usage information.</strong> Basic technical logs (device type, browser, pages used) needed to run and secure the service, plus simple product analytics: counts of events such as opening the app, creating a resume, or tailoring one to a posting. Analytics events record only the type of action and a timestamp, never the content of your resume or job postings.</P>
          <P><strong>Payment information.</strong> We do not collect or store your credit card number. Payments are processed by third-party payment processors; we receive only confirmation of the transaction and, where needed, the amount paid.</P>
        </Section>

        <Section heading="2. How we use your information">
          <P>We use your personal information to:</P>
          <ol className="ml-5 list-decimal space-y-1">
            <li>Provide the service: building your career knowledge base, generating resumes and cover letters, and tailoring content to job postings</li>
            <li>Calculate commute estimates when you provide a workplace address</li>
            <li>Communicate with you about your account</li>
            <li>Maintain, secure, and improve the service</li>
            <li>Meet legal obligations</li>
          </ol>
          <P>We do not sell your personal information. We do not share it with third parties for their own marketing.</P>
        </Section>

        <Section heading="3. Artificial intelligence and third-party processing">
          <P>Spokefolio uses artificial intelligence services operated by third-party providers to transcribe voice input, extract information from your documents, and generate summaries, match analyses, and resume content. These providers process your career information on our instructions, solely to deliver the service to you. AI-generated content is a starting point; you should review it for accuracy before relying on it.</P>
          <P>Commute estimates use third-party mapping services, which receive the addresses needed to calculate the route.</P>
        </Section>

        <Section heading="4. Who can see your information">
          <P>Your career information belongs to your account. The service enforces per-user data isolation: other users cannot see your profile, entries, documents, or applications. We access your information only as needed to operate, support, and secure the service.</P>
        </Section>

        <Section heading="5. Cookies and local storage">
          <P>We use essential local storage and cookies to keep you signed in and remember your preferences, and basic analytics to understand how the service is used. You can clear local storage through your browser at any time; some features require sign-in to work.</P>
        </Section>

        <Section heading="6. How long we keep your information">
          <P>We keep your career information for as long as your account is active, which is the point of the service. If you delete your account, we delete your profile, career entries, uploaded documents, and application data within 30 days, except where retention is required by law. If you delete an individual entry or application, it is removed from the service.</P>
        </Section>

        <Section heading="7. Your privacy rights">
          <P>You may <strong>access</strong> the personal information in your account, <strong>correct or update</strong> it at any time, <strong>export</strong> your data, <strong>delete</strong> individual entries or your entire account, and <strong>withdraw consent</strong> for voice processing by discontinuing voice intake.</P>
          <P>To exercise any of these, use the in-app controls or contact us at KellarM@xfhgamestudioltd.com. If you are not satisfied with our response, you may complain to the Office of the Privacy Commissioner of Canada (www.priv.gc.ca) or the Information and Privacy Commissioner of Alberta (www.oipc.ab.ca).</P>
        </Section>

        <Section heading="8. Security">
          <P>The service runs over encrypted connections (HTTPS), uses per-user data isolation, and stores passwords as secure hashes. No system is perfectly secure; we take reasonable measures appropriate to the sensitivity of career information and will notify affected users if a breach ever requires it.</P>
        </Section>

        <Section heading="9. Children">
          <P>Spokefolio is intended for adults making career decisions. The service is not directed to individuals under 18, and we do not knowingly collect their personal information.</P>
        </Section>

        <Section heading="10. Changes to this policy">
          <P>We may update this policy as the service evolves. Material changes will be announced in the application, and the effective date above will be revised. Continued use after a change means you accept the updated policy.</P>
        </Section>

        <p className="mt-10 text-xs text-muted-foreground">
          Questions or requests: KellarM@xfhgamestudioltd.com or 780-504-4899.
          This document is a draft prepared for review with qualified Canadian counsel before publication.
        </p>
      </main>
    </div>
  );
}
