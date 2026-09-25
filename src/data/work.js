// The case studies and earlier roles behind the Work page. They live here
// rather than in the page so the homepage can show a few previews without
// keeping a second copy that drifts out of date.

// `status` picks the badge color (see .status-* in global.css); `label` is the
// text shown in it. `stack` may be empty, in which case no stack line renders.
// `image` is optional too; supply it and the card renders a figure between the
// head and the body. Sources live in public/images/.
// `featured` lifts a study out of the grid into the full-width block above
// it, where the image sits beside the text instead of inside a narrow
// column. Featured studies render in array order.
export const caseStudies = [
  {
    title: 'Cellular Tower ML Model',
    // Shown under the homepage preview, shorter than `stack`.
    previewTags: ['Python', 'Scikit-Learn', 'Fairness in AI'],
    featured: true,
    status: 'production',
    label: 'Fairness in AI Award',
    description:
      'Built a Python-based ML model to identify defective cellular towers across the U.S., translating business requirements into feature engineering specifications. Earned the Fairness in AI award by identifying systemic data bias and integrating underrepresented Puerto Rico data to improve both accuracy and equity of predictions.',
    image: {
      src: '/images/hurricane-probability-map.png',
      alt: 'Probability heat map of hurricane risk to United States cellular towers. Tower locations are plotted on a blue-to-red scale from zero to one, with the interior of the country in dark blue at near-zero probability and the Gulf coast, the Atlantic seaboard, Florida and Puerto Rico in yellow through red at the highest probabilities.',
      width: 1209,
      height: 450,
    },
    stack: ['Python', 'Pandas', 'Scikit-Learn'],
  },
  {
    title: 'Collections Process Automation',
    // Shown under the homepage preview, shorter than `stack`.
    previewTags: ['Python', 'Node', 'Supabase'],
    featured: true,
    status: 'production',
    label: 'Production',
    description:
      "Built an end-to-end AR automation pipeline pulling from the firm's data warehouse, plus a dashboard and automated reminder flows. Along the way, identified and resolved a significant invoice tracking gap caused by a silent data sync failure. It reconciles to the source system to the cent, runs 44 automated tests, and refuses to publish if the totals disagree.",
    image: {
      src: '/images/ar_hub_01_overview.png',
      alt: 'Overview of the AR Hub dashboard, showing aged receivables broken out by department and work type. Summary tiles across the top carry total open AR, past due and not yet due balances, with an aging mix donut and ranked bar charts by department, work type and leadership position below.',
      width: 2800,
      height: 2100,
    },
    stack: ['Python', 'Node', 'Power Automate', 'Supabase'],
  },
  {
    title: 'Client Wiki',
    // Shown under the homepage preview, shorter than `stack`.
    previewTags: ['Supabase', 'Dashboard Design'],
    status: 'progress',
    label: 'In Progress · Piloting',
    description:
      "Designed a centralized client-data dashboard to support the firm's advisory work, currently piloting with top-tier clients ahead of a year-end rollout.",
    stack: ['Supabase'],
  },
  {
    title: 'Firm-Wide Intake & Ops Rollout',
    status: 'progress',
    label: 'In Progress',
    description:
      'Replaced a multi-handoff intake process with a form that writes directly into Karbon via API, creating a single automated path with a full audit trail. Currently extending the integration to write to the CRM simultaneously.',
    stack: ['Karbon API', 'Dynamics 365', 'Power Automate'],
  },
  {
    title: 'Automation & Reporting Flows',
    status: 'production',
    label: 'Production',
    description:
      'Built and maintain a set of recurring Power Automate flows spanning CRM reporting and the intake/API pipeline.',
    stack: ['Power Automate', 'Dynamics 365', 'Karbon'],
  },
  {
    title: 'Balanced Scorecard / KPI Program',
    status: 'production',
    label: 'Production · Ongoing',
    description:
      'Own monthly KPI and scorecard reporting across two departments; led a 12-month historical rollforward and built the reporting infrastructure from scratch.',
    stack: [],
  },
  {
    title: 'Accenture Innovation Challenge',
    status: 'production',
    label: 'Finalist · Top 0.05%',
    description:
      "Advanced to the final round of Accenture's Innovation Challenge, developing a data-backed business strategy for the National Park Foundation. Defined KPIs and measurement frameworks through cost-benefit analysis and Gen Z user segmentation, producing impact projections that shaped the final recommendation presented to senior Accenture stakeholders.",
    stack: ['Business Strategy', 'Cost-Benefit Analysis', 'Presentation Skills'],
  },
];

// Supporting history, rendered below the cards in a lighter treatment so the
// case studies above stay the focus.

// Supporting history, rendered below the cards in a lighter treatment so the
// case studies above stay the focus.
const featured = caseStudies.filter((s) => s.featured);
const gridStudies = caseStudies.filter((s) => !s.featured);

export const earlierExperience = [
  {
    role: 'Healthcare Administration Intern',
    kind: 'Internship',
    org: 'Kaiser Permanente',
    period: 'May–Aug 2025',
    description:
      'Surfaced inefficiencies in member data workflows using Excel and SQL, and coordinated cross-functional project milestones.',
  },
  {
    role: 'ML/AI Fellow',
    kind: 'Fellowship',
    org: 'Break Through Tech (UCLA/Cornell)',
    period: 'May 2023–Apr 2024',
    description:
      'Applied machine learning with Pandas, Scikit-Learn and NumPy, translating model output into stakeholder-facing reports.',
  },
  {
    role: 'Student Research Assistant',
    kind: 'Research',
    org: 'Chapman Fowler School of Engineering',
    period: 'Jun–Dec 2023',
    description:
      'Modeled California water budget scenarios from 1998-2019 and visualized future supply and demand in Tableau.',
  },
];

