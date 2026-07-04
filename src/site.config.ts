// ---------------------------------------------------------------------------
// Single source of truth for site-wide content.
// Edit this file to rebrand the whole site — name, nav, contact details,
// and the list of practice areas all flow from here.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Mohit Chauhan',
  title: 'Mohit Chauhan — Advocate & Legal Consultant',
  role: 'Advocate & Legal Consultant',
  tagline:
    'Clear explanations of the law, and practical help when you need it.',
  description:
    'A knowledge-first legal practice. Read plain-language explanations of common legal situations, and get in touch when you need personal advice.',
  email: 'mohitchauhan0982150@gmail.com',
  phone: '+91 98215 06108',
  whatsapp: '+91 98215 06108',
  address: 'Chamber No. 14, District Court Complex, New Delhi, India',
  locale: 'en-IN',
  twitterHandle: '@mohitchauhan_law',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Practice Areas', href: '/practice-areas/' },
  { label: 'Legal Insights', href: '/legal-insights/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export type PracticeAreaKey =
  | 'property-law'
  | 'family-law'
  | 'consumer-law'
  | 'contract-law'
  | 'criminal-law'
  | 'employment-law'
  | 'civil-law';

export interface PracticeArea {
  key: PracticeAreaKey;
  title: string;
  shortDescription: string;
  overview: string;
  commonSituations: string[];
  howICanHelp: string[];
  faqs: { question: string; answer: string }[];
}

// Practice area content lives here as structured data rather than markdown,
// since each page follows an identical, predictable shape (Overview /
// Situations / How I help / FAQ). New areas can be added by appending an
// object — no new templates required.
export const PRACTICE_AREAS: PracticeArea[] = [
  {
    key: 'property-law',
    title: 'Property Law',
    shortDescription:
      'Buying, selling, inheriting, or disputing land and buildings.',
    overview:
      'Property matters in India are governed by a mix of central statutes, state-specific rules, and local municipal regulations. Most disputes come from unclear titles, undocumented family arrangements, or agreements signed without the right checks. Understanding your position early can prevent years of litigation.',
    commonSituations: [
      'Verifying title before buying a plot, flat, or agricultural land',
      'Disputes between family members over inherited property',
      'Delayed or disputed possession from a builder or developer',
      'Illegal occupation or encroachment on your land',
      'Drafting or reviewing a sale deed, gift deed, or lease agreement',
      'Mutation and registration issues at the sub-registrar\u2019s office',
    ],
    howICanHelp: [
      'Reviewing title documents and flagging risks before you sign anything',
      'Drafting agreements that protect your interests in plain, enforceable language',
      'Representing you in partition suits or possession disputes',
      'Advising on the right forum: civil court, consumer forum, or RERA',
    ],
    faqs: [
      {
        question: 'How do I check if a property\u2019s title is clear?',
        answer:
          'A clear title means the seller has full legal ownership and the right to transfer it, with no pending disputes, loans, or claims. This is usually confirmed by tracing ownership through the last 30 years of records, checking the encumbrance certificate, and confirming there are no ongoing court cases. It is worth having this reviewed before any payment is made.',
      },
      {
        question: 'What can I do if a builder delays possession?',
        answer:
          'If a builder misses the possession date promised in your agreement, you may be entitled to compensation or a refund with interest, depending on your state\u2019s RERA rules and the terms of your agreement. The right first step is usually a written notice, followed by a complaint to the state RERA authority if that does not resolve things.',
      },
      {
        question: 'Can a family member sell inherited property without my consent?',
        answer:
          'Not usually, if you also have a legal share in the property. Jointly inherited property generally cannot be sold in full by one heir without the consent of the others, though the specific rules depend on the applicable succession law and whether the property has been formally partitioned.',
      },
    ],
  },
  {
    key: 'family-law',
    title: 'Family Law',
    shortDescription:
      'Marriage, divorce, custody, maintenance, and succession matters.',
    overview:
      'Family law touches some of the most personal decisions a person will make. The right approach depends heavily on the personal law that applies to your marriage or family, and on whether the matter can be resolved by agreement or needs to go before a court.',
    commonSituations: [
      'Considering divorce, judicial separation, or annulment',
      'Negotiating child custody, visitation, or guardianship',
      'Claiming or contesting maintenance and alimony',
      'Domestic violence protection and residence orders',
      'Succession and inheritance disputes within a family',
      'Drafting a settlement agreement for mutual consent divorce',
    ],
    howICanHelp: [
      'Explaining which personal law applies to your situation and what it means practically',
      'Negotiating settlements that avoid prolonged, adversarial litigation where possible',
      'Representing you in family court proceedings',
      'Helping you understand realistic timelines and likely outcomes before you commit to a path',
    ],
    faqs: [
      {
        question: 'How long does a mutual consent divorce take?',
        answer:
          'A mutual consent divorce typically involves a mandatory cooling-off period before the second motion, though courts can waive this in some circumstances. In practice, most straightforward mutual consent matters conclude within six to eighteen months, depending on the court\u2019s schedule.',
      },
      {
        question: 'Who decides child custody in a divorce?',
        answer:
          'Custody is decided based on the best interests of the child, considering factors like the child\u2019s age, each parent\u2019s circumstances, and, where the child is old enough, their own preference. Courts increasingly favour arrangements that preserve the child\u2019s relationship with both parents where safe to do so.',
      },
    ],
  },
  {
    key: 'consumer-law',
    title: 'Consumer Law',
    shortDescription: 'Defective products, deficient services, and unfair trade practices.',
    overview:
      'Consumer protection law gives you a faster, less formal route than a civil suit when a business has sold you a defective product, provided a deficient service, or engaged in an unfair or misleading practice.',
    commonSituations: [
      'A product that was defective, damaged, or not as described',
      'A service provider who failed to deliver what was promised',
      'Unfair contract terms buried in fine print',
      'E-commerce disputes involving refunds, returns, or delivery failures',
      'Insurance claims wrongfully denied or delayed',
    ],
    howICanHelp: [
      'Assessing whether your complaint qualifies for the consumer forum or a different venue',
      'Drafting and filing a consumer complaint on your behalf',
      'Calculating the compensation you can reasonably claim',
      'Representing you before the District, State, or National Consumer Commission',
    ],
    faqs: [
      {
        question: 'Do I need a lawyer to file a consumer complaint?',
        answer:
          'No, the consumer forum process is designed to be accessible without a lawyer. That said, legal help is often useful for larger claims, complex facts, or when the opposing party is a large company with its own legal team.',
      },
      {
        question: 'What is the time limit for filing a consumer complaint?',
        answer:
          'Generally, a complaint must be filed within two years of the cause of action arising, though the forum can condone a delay for a sufficient reason. It is best not to wait, since evidence and records become harder to gather over time.',
      },
    ],
  },
  {
    key: 'contract-law',
    title: 'Contracts',
    shortDescription: 'Drafting, reviewing, and enforcing agreements.',
    overview:
      'Most disputes between individuals or small businesses trace back to a contract that was unclear, one-sided, or never put in writing at all. A well-drafted agreement is cheaper than the dispute it prevents.',
    commonSituations: [
      'Drafting a freelance, employment, or service agreement',
      'Reviewing a contract before you sign it',
      'A counterparty who has breached or is threatening to breach an agreement',
      'Non-disclosure and non-compete clauses',
      'Partnership and shareholder agreements for a new business',
    ],
    howICanHelp: [
      'Drafting agreements in plain language that still hold up legally',
      'Reviewing contracts you have been asked to sign and flagging one-sided terms',
      'Sending legal notices and negotiating on your behalf when a contract is breached',
      'Advising on remedies available to you: damages, specific performance, or termination',
    ],
    faqs: [
      {
        question: 'Is a verbal agreement legally enforceable?',
        answer:
          'In many cases, yes — a contract does not always need to be in writing to be valid, provided the essential elements of a contract are present. The practical difficulty is proving the terms were agreed, which is exactly why a written agreement is strongly advisable.',
      },
      {
        question: 'What should I do if the other party breaches the contract?',
        answer:
          'The usual first step is a formal legal notice setting out the breach and what you expect to happen next. This often resolves matters without litigation, but if it does not, it also creates a clear record for any later court or arbitration proceeding.',
      },
    ],
  },
  {
    key: 'criminal-law',
    title: 'Criminal Law',
    shortDescription: 'Complaints, FIRs, bail, and defence representation.',
    overview:
      'Being named in a criminal complaint, or needing to file one, can be disorienting. Understanding the process — from FIR to investigation to trial — makes it much easier to make good decisions at each stage.',
    commonSituations: [
      'Filing or responding to a First Information Report (FIR)',
      'Applying for anticipatory or regular bail',
      'Facing charges related to cheque bounce or financial disputes',
      'Being called in as a witness in a criminal matter',
      'Understanding your rights during police questioning',
    ],
    howICanHelp: [
      'Advising you on your rights immediately after an FIR is filed or threatened',
      'Preparing and arguing bail applications',
      'Representing you at trial or coordinating with trial counsel',
      'Explaining, in plain terms, what to expect at each stage of a criminal proceeding',
    ],
    faqs: [
      {
        question: 'What should I do immediately after an FIR is filed against me?',
        answer:
          'Avoid making statements to the police without legal advice, and consult a lawyer as soon as possible to understand whether anticipatory bail is appropriate before any arrest is made. Acting early generally gives you more options.',
      },
      {
        question: 'Is a cheque bounce case a criminal offence?',
        answer:
          'Yes, dishonour of a cheque for insufficient funds can attract criminal liability under the Negotiable Instruments Act, in addition to any civil recovery route. There are strict timelines for sending a demand notice and filing a complaint, so prompt action matters.',
      },
    ],
  },
  {
    key: 'employment-law',
    title: 'Employment Law',
    shortDescription: 'Wrongful termination, harassment, and workplace disputes.',
    overview:
      'Employment disputes sit at the intersection of contract law, labour statutes, and company policy. Both employees and employers benefit from understanding their rights and obligations before a disagreement escalates.',
    commonSituations: [
      'Wrongful or unfair termination',
      'Non-payment of salary, bonus, or full and final settlement',
      'Workplace harassment complaints',
      'Disputes over notice periods and non-compete clauses',
      'Drafting employment contracts and HR policies for a small business',
    ],
    howICanHelp: [
      'Reviewing your termination or resignation for legal exposure',
      'Assisting with harassment complaints under applicable workplace policies',
      'Recovering unpaid wages or dues through the right forum',
      'Drafting compliant employment contracts for employers',
    ],
    faqs: [
      {
        question: 'Can my employer terminate me without notice?',
        answer:
          'This depends on your contract and applicable labour law — most employment agreements require a notice period or pay in lieu, except in cases of proven misconduct. Reviewing your specific contract terms is the right starting point.',
      },
      {
        question: 'What can I do if my full and final settlement is delayed?',
        answer:
          'A written reminder to HR is usually the first step, followed by a formal legal notice if the delay continues. Persistent non-payment can also be pursued through the labour commissioner or, in some cases, civil court.',
      },
    ],
  },
  {
    key: 'civil-law',
    title: 'Civil Law',
    shortDescription: 'General civil disputes, recovery of money, and injunctions.',
    overview:
      'Civil law covers a broad range of disputes between individuals or organisations that do not fall neatly into a specialised category — from recovering money owed to you, to stopping someone from taking an action that harms your interests.',
    commonSituations: [
      'Recovery of money owed under a loan or informal arrangement',
      'Seeking an injunction to stop a harmful or unlawful action',
      'Disputes with neighbours over shared boundaries or access',
      'Defamation and reputational harm',
      'General civil suits that do not fit a specialised practice area',
    ],
    howICanHelp: [
      'Assessing the strength of your claim and the right forum to pursue it',
      'Drafting and filing civil suits, applications, and injunctions',
      'Negotiating settlements before matters reach trial',
      'Representing you through the civil court process',
    ],
    faqs: [
      {
        question: 'How do I recover money someone owes me without a written agreement?',
        answer:
          'You can still file a civil recovery suit, but you will need other evidence of the debt — messages, bank transfers, or witness testimony. A written demand notice is a useful first step and often resolves the matter without a court filing.',
      },
      {
        question: 'What is an injunction and when can I ask for one?',
        answer:
          'An injunction is a court order requiring someone to do, or stop doing, a specific act. Courts typically grant one where there is a clear legal right at stake, urgent harm, and no adequate remedy available after the fact.',
      },
    ],
  },
];

export function getPracticeArea(key: string): PracticeArea | undefined {
  return PRACTICE_AREAS.find((p) => p.key === key);
}
