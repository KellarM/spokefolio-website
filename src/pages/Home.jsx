import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mic, Database, FileText, Target, MapPin, ClipboardCheck, Sparkles,
  ArrowRight, Check, RefreshCcw, LayoutTemplate, CreditCard, ShieldCheck,
  MessageSquare, Mail, Download, Menu, X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';

// The live Spokefolio app. Every sign-up, sign-in, and "open the app" link on
// this site goes here, not to any page inside this website app.
const APP_URL = 'https://xfhgamestudioltd.icu';

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Nav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Features', id: 'features' },
    { label: 'How it works', id: 'how' },
    { label: 'Interview', id: 'interview' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">S</span>
          <span className="text-lg font-semibold tracking-tight">Spokefolio</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={scrollTo(l.id)} className="hover:text-foreground">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`${APP_URL}/login`} className="hidden sm:block">
            <Button variant="ghost">Sign in</Button>
          </a>
          <a href={`${APP_URL}/register`}>
            <Button>Get started</Button>
          </a>
          <button
            type="button"
            aria-label="Menu"
            className="ml-1 rounded-md p-1.5 text-muted-foreground hover:text-foreground md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => { setOpen(false); scrollTo(l.id)(e); }}
                className="hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href={`${APP_URL}/login`} className="hover:text-foreground">Sign in</a>
          </div>
        </nav>
      )}
    </header>
  );
};

const HeroMock = () => (
  <div className="relative mx-auto mt-12 max-w-4xl">
    <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" aria-hidden="true" />
    <div className="relative grid gap-4 rounded-2xl border bg-card p-4 shadow-xl md:grid-cols-5">
      <div className="space-y-3 md:col-span-2">
        <div className="flex items-start gap-2 rounded-xl border bg-muted/50 p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10"><Mic className="h-4 w-4 text-primary" /></span>
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-muted-foreground">Voice intake</p>
            <p className="text-xs">"Operations supervisor, 12 years, cut dock turnaround by 30%..."</p>
          </div>
        </div>
        <div className="flex items-start gap-2 rounded-xl border bg-muted/50 p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10"><MessageSquare className="h-4 w-4 text-primary" /></span>
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-muted-foreground">Interview drill</p>
            <p className="text-xs italic">"Walk me through that turnaround. What changed, by how much?"</p>
          </div>
        </div>
        <div className="rounded-xl border bg-muted/50 p-3">
          <p className="text-[11px] font-medium text-muted-foreground">Roles for this job</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Recommended</Badge>
            <Badge variant="secondary">Optional</Badge>
            <Badge variant="outline">Low relevance</Badge>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">Page estimate: 1 of 2</p>
        </div>
      </div>
      <div className="rounded-xl border bg-background p-4 md:col-span-3">
        <div className="h-2.5 w-1/3 rounded bg-foreground/80" />
        <div className="mt-1.5 h-2 w-1/4 rounded bg-muted-foreground/50" />
        <div className="mt-4 space-y-1.5">
          <div className="h-2 w-full rounded bg-muted" />
          <div className="h-2 w-5/6 rounded bg-muted" />
          <div className="h-2 w-2/3 rounded bg-muted" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2 w-24 rounded bg-primary/70" />
          <div className="h-2 w-full rounded bg-muted" />
          <div className="h-2 w-4/5 rounded bg-muted" />
          <div className="h-2 w-3/5 rounded bg-primary/40" />
        </div>
        <div className="mt-4 flex gap-2">
          <div className="flex h-7 items-center rounded-md bg-primary px-3 text-[11px] font-medium text-primary-foreground">Download PDF</div>
          <div className="flex h-7 items-center rounded-md border px-3 text-[11px] font-medium">Download Word</div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
    <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 text-center md:pt-28">
      <div className="relative mx-auto mb-6 w-fit">
        <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md" aria-hidden="true" />
        <div className="relative inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-2.5 text-primary-foreground shadow-lg">
          <Sparkles className="h-4 w-4 shrink-0" />
          <span className="text-sm font-bold uppercase tracking-wider">Free for the rest of 2026</span>
          <span className="hidden text-xs font-medium opacity-80 sm:inline">No card required</span>
        </div>
      </div>
      <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
        Your career, told once.
        <br />
        <span className="text-primary">Tailored everywhere.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Talk your way through your work history once. Spokefolio turns it into a
        structured knowledge base, then tailors a clean two-page resume to every
        job you want — and drills you for the interview. <strong>Everything is
        free for the rest of 2026.</strong> Starting 2027, one flat $15 a year.
        No subscription, nothing to cancel.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={`${APP_URL}/register`}>
          <Button size="lg" className="h-12 px-8 text-base">Try it free, starting now <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </a>
        <a href="#how" onClick={scrollTo('how')}>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base">See how it works</Button>
        </a>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Every feature, unlimited, through December 31, 2026. No card required. Free PDF and Word export, always.
      </p>
      <HeroMock />
    </div>
  </section>
);

const problems = [
  {
    icon: RefreshCcw,
    title: 'You start over, every time',
    body: 'Every resume tool is a form to fill. New job, new forms, same career, retyped from scratch.',
  },
  {
    icon: LayoutTemplate,
    title: 'Templates fight the robots',
    body: 'Two-column designs and graphics look great and fail the applicant tracking systems that read you first.',
  },
  {
    icon: CreditCard,
    title: 'Subscriptions you forget',
    body: 'A cheap trial that quietly becomes a monthly charge. The download button is the hostage.',
  },
];

const Problems = () => (
  <section className="border-b border-border">
    <div className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
        Resume tools make you start over. We think that is the bug.
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {problems.map(({ icon: Icon, title, body }) => (
          <Card key={title} className="border-border">
            <CardContent className="p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  {
    icon: Mic,
    step: '01',
    title: 'Tell your story, out loud',
    body: 'Spokefolio interviews you about your career like a good recruiter would. No forms. You talk, it listens, and the transcript becomes structured records.',
  },
  {
    icon: Database,
    step: '02',
    title: 'Your knowledge base, built',
    body: 'Every role, accomplishment, metric, and skill becomes a structured entry. Old resumes, transcripts, and certificates feed the same archive. You never rebuild it.',
  },
  {
    icon: Target,
    step: '03',
    title: 'Tailored for every job',
    body: 'Paste a job posting. Spokefolio ranks your roles, leads with the matching experience, keeps it to two pages, tells you honestly where the gaps are — then drills you for the interview.',
  },
];

const HowItWorks = () => (
  <section id="how" className="border-b border-border">
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">From one conversation to every application</h2>
        <p className="mt-4 text-muted-foreground">The knowledge base is the product. The resume is the output.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map(({ icon: Icon, step, title, body }) => (
          <Card key={step} className="relative overflow-hidden">
            <CardContent className="p-6">
              <span className="absolute right-4 top-4 text-5xl font-bold text-muted-foreground/15">{step}</span>
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const DrillMock = () => (
  <div className="rounded-2xl border bg-card p-5 shadow-lg">
    <div className="flex items-center gap-2 border-b border-border pb-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10"><MessageSquare className="h-4 w-4 text-primary" /></span>
      <div>
        <p className="text-sm font-semibold">HR — Production Supervisor role</p>
        <p className="text-[11px] text-muted-foreground">Mock interview, grounded in the posting</p>
      </div>
    </div>
    <div className="mt-4 space-y-3.5 text-[13px]">
      <div className="rounded-xl border bg-muted/40 px-3.5 py-2.5">
        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Interviewer</p>
        The posting calls it a fast-paced environment. Give me one concrete example of your team absorbing a surge without quality slipping.
      </div>
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-xl bg-primary px-3.5 py-2.5 text-primary-foreground">
          We took on a 40% order spike last spring. I resequenced two lines, ran a daily 15-minute huddle, and we held defect rates flat while overtime actually dropped.
        </div>
      </div>
      <div className="rounded-xl border px-3.5 py-2.5">
        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">How that landed</p>
        Strong: real numbers, clear ownership of the fix.
        <p className="mt-1 text-muted-foreground">To improve: say what the huddle changed — name one problem it caught.</p>
      </div>
    </div>
    <div className="mt-4 rounded-xl bg-muted/50 px-3.5 py-2.5 text-[12px] text-muted-foreground">
      At the end: a readiness report — your strengths, what to rehearse, and the proof points to say out loud.
    </div>
  </div>
);

const InterviewDrill = () => (
  <section id="interview" className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-2">
      <div>
        <Badge variant="secondary" className="mb-4">New</Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Walk in ready, not rehearsed-sounding</h2>
        <p className="mt-4 text-muted-foreground">
          Every application comes with a mock interview. Spokefolio plays that
          company's HR interviewer — questions grounded in the exact posting and
          your resume, answers spoken out loud, and honest feedback after every
          answer. No flattery: if you dodged the question, it says so.
        </p>
        <ul className="mt-6 space-y-3 text-sm">
          {[
          'Questions drawn from the posting and your tailored resume',
          'Answer by voice, the way you will in the real room',
          'Honest grading: what landed, what was weak or evasive',
          'A readiness report: strengths, what to rehearse, proof points to say out loud',
        ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
        <a href={`${APP_URL}/register`} className="mt-8 inline-block">
          <Button size="lg" className="h-12 px-8 text-base">Practice your next interview <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </a>
      </div>
      <DrillMock />
    </div>
  </section>
);

const features = [
  {
    icon: Mic,
    title: 'Voice-first intake',
    body: 'A recorded conversation instead of a blank page. Most people can say their history 10x faster than they can type it.',
  },
  {
    icon: Database,
    title: 'Structured career archive',
    body: 'Roles, accomplishments, metrics, and skills stored as reusable entries, not frozen paragraphs in an old document.',
  },
  {
    icon: FileText,
    title: 'Bring your evidence',
    body: 'Old resumes, transcripts, certificates, and reviews all feed the same knowledge base.',
  },
  {
    icon: ClipboardCheck,
    title: 'Per-job tailoring',
    body: 'Resumes and cover letters shaped to the posting, with matching experience leading each role and a two-page limit enforced.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest gap analysis',
    body: 'Spokefolio tells you what you do not meet before you spend your evening applying. No keyword score theater.',
  },
  {
    icon: MessageSquare,
    title: 'HR interview drill',
    body: 'A mock interview for every application: posting-grounded questions, voice answers, honest feedback, and a readiness report.',
  },
  {
    icon: Mail,
    title: 'The package in your inbox',
    body: 'Your tailored resume and cover letter arrive as clean PDFs, with interview prep alongside. Ready to forward to the employer.',
  },
  {
    icon: Download,
    title: 'ATS-safe exports',
    body: 'Single column, standard fonts, standard section names. Free PDF and Word downloads, always — even after a pass expires.',
  },
  {
    icon: MapPin,
    title: 'Know before you go',
    body: 'Company research and real drive time to the workplace, built into every application you capture.',
  },
];

const Features = () => (
  <section id="features" className="border-b border-border">
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything your career already knows, finally organized</h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <Card key={title} className="border-border">
            <CardContent className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const nowIncludes = [
  'Unlimited tailored resumes and cover letters',
  'Full voice intake and the complete knowledge base',
  'Mock interview drills with readiness reports',
  'Honest gap analysis, commute times, company research',
  'Free PDF and Word export, always',
];

const yearIncludes = [
  'Everything above, for a full year',
  'No monthly charges — $15 CAD, once a year',
  'Never auto-renews. Nothing to cancel.',
  'Your knowledge base and downloads stay yours, always',
];

const PricingCard = ({ title, price, note, includes, cta, primary }) => (
  <Card className={primary ? 'border-primary/40 shadow-lg' : 'border-border'}>
    <CardContent className="p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {primary
          ? <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Nothing to cancel</Badge>
          : <Badge variant="secondary">No card required</Badge>}
      </div>
      <div className="mt-4 flex items-end gap-2">
        <span className="text-5xl font-bold">{price}</span>
        <span className="pb-1.5 text-muted-foreground">{note}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
      <a href={`${APP_URL}/register`} className="mt-8 block">
        <Button size="lg" variant={primary ? 'default' : 'outline'} className="w-full">{cta}</Button>
      </a>
    </CardContent>
  </Card>
);

const Pricing = () => (
  <section id="pricing" className="border-b border-border">
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Free for the rest of 2026. Then $15 a year. That is it.</h2>
        <p className="mt-4 text-muted-foreground">
          Through December 31, 2026, every feature is free and unlimited.
          Starting January 2027, one flat fee of $15 CAD covers a full year.
          No subscription, no monthly charges, nothing to cancel.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        <PricingCard
          title="Rest of 2026"
          price="$0"
          note="everything, unlimited"
          includes={nowIncludes}
          cta="Start free now"
          primary
        />
        <PricingCard
          title="Starting 2027"
          price="$15"
          note="CAD, per year"
          includes={yearIncludes}
          cta="Get a head start"
          primary={false}
        />
      </div>
      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 px-6 py-5 text-center">
        <p className="text-sm font-semibold">The math is not close.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Typical resume builders charge $10 to $30 every month for a template.
          Spokefolio does far more — voice intake, a living knowledge base,
          per-job tailoring, honest gap analysis, and interview drills — for
          $15 <em>a year</em>. The most interactive career app available, and the
          cheapest. On purpose.
        </p>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Your knowledge base and everything you create stay yours. Downloads
        stay free, forever.
      </p>
    </div>
  </section>
);

const faqs = [
  {
    q: 'Is it really free for the rest of 2026?',
    a: 'Yes. Through December 31, 2026, every feature is free and unlimited — tailored resumes, cover letters, interview drills, exports, all of it. No card required. Starting January 2027, access is one flat fee of $15 CAD per year.',
  },
  {
    q: 'Is Spokefolio a resume builder?',
    a: 'No. A resume builder makes a document and stops. Spokefolio builds a structured knowledge base of your career first, and the resume is one of the outputs. That difference is the product: you tell your career once, and every future application draws from the same archive.',
  },
  {
    q: 'What is the interview drill?',
    a: 'Every application includes a mock interview with an AI interviewer that plays the hiring company\'s HR, grounded in the exact posting and your tailored resume. You answer out loud or by typing, it grades each answer honestly — what landed and what was weak — and at the end you get a readiness report: your strengths, what to rehearse, and the proof points worth saying out loud.',
  },
  {
    q: 'Will my resume get through applicant tracking systems?',
    a: 'Every export is built to ATS readability standards: single column, standard fonts, standard section names, no text hidden in graphics or tables. No tool can guarantee how a specific employer system behaves, so we keep the layout clean and honest instead of promising magic.',
  },
  {
    q: 'Why is it so cheap compared to other career apps?',
    a: 'Because the pricing is the point. Most resume tools rent you a template for $10 to $30 a month. Spokefolio gives you more — voice intake, a structured knowledge base, per-job tailoring, honest gap analysis, and interview drills — for $15 a year. We would rather be the career app everyone can afford than the subscription everyone forgets to cancel.',
  },
  {
    q: 'Is there a subscription to cancel?',
    a: 'No. There is no subscription, no monthly charge, and no free trial that quietly converts. Starting 2027 you pay $15 CAD once for a year of access, and it never auto-renews or auto-charges. Downloading what you have already created stays free, forever.',
  },
  {
    q: 'What happens to my voice recordings?',
    a: 'Audio is used to create your transcript and is then deleted. The structured text stays in your account, which is yours to edit or erase at any time.',
  },
  {
    q: 'Is the AI-generated content trustworthy?',
    a: 'It is a strong first draft, not a final one. Spokefolio drafts summaries and tailored content from your own recorded history, and you review everything before it goes to an employer. Your voice stays yours.',
  },
];

const FAQ = () => (
  <section id="faq" className="border-b border-border">
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">Questions, answered honestly</h2>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">S</span>
            <span className="text-lg font-semibold">Spokefolio</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Your career, told once. Tailored everywhere.
          </p>
          <a href={APP_URL} className="mt-4 inline-block">
            <Button variant="outline" className="rounded-full">Open the app <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold">Product</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><a href="#features" onClick={scrollTo('features')} className="hover:text-foreground">Features</a></li>
              <li><a href="#pricing" onClick={scrollTo('pricing')} className="hover:text-foreground">Pricing</a></li>
              <li><a href="#faq" onClick={scrollTo('faq')} className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><a href="mailto:KellarM@xfhgamestudioltd.com" className="hover:text-foreground">KellarM@xfhgamestudioltd.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>© 2026 Spokefolio by XFH Game Studio Ltd. All rights reserved.</p>
        <p>Made in Edmonton, Alberta.</p>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <main>
      <Hero />
      <Problems />
      <HowItWorks />
      <InterviewDrill />
      <Features />
      <Pricing />
      <FAQ />
    </main>
    <Footer />
  </div>
);

export default Home;
