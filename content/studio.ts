import { projects } from './projects';

export interface StudioProject {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image?: string;
  url: string;
  archived?: boolean;
  focus: string[];
  experience: { title: string; copy: string }[];
}

// Public presentations checked on 2026-09-12. URLs come from the project records.
export const studioProjects: StudioProject[] = [
  { slug: 'bewingo-india', name: 'BeWingo India', category: 'Brand website / Export', summary: 'A distinct digital home for Kerala spices and global trade.', image: '/assets/work/bewingo-india.webp', url: projects[0]!.url, focus: ['Product discovery', 'Brand presentation', 'Business enquiries'], experience: [{ title: 'Origin takes the lead.', copy: 'The public site introduces Kerala spices through product photography, sourcing context, and a focused export catalogue.' }, { title: 'A clear next conversation.', copy: 'Enquiry links connect product interest with the next step for a prospective trade partner.' }] },
  { slug: 'muzari', name: 'Muzari Exports', category: 'Business website / Agriculture', summary: 'Connecting Indian produce with international buyers.', image: '/assets/work/muzari.webp', url: projects[1]!.url, focus: ['Product catalogue', 'Sourcing story', 'Export enquiries'], experience: [{ title: 'A useful first introduction.', copy: 'Muzari presents its produce, sourcing approach, and export business in one coherent public website.' }, { title: 'From interest to enquiry.', copy: 'Visitors can explore the product range and request a quote without having to piece together the offer.' }] },
  { slug: 'wafy-sports', name: 'WAFY Sports', category: 'Web application / Sport', summary: 'A shared place to follow competition and live results.', image: '/assets/work/wafy-sports.webp', url: projects[3]!.url, focus: ['Competition information', 'Results discovery', 'Mobile experience'], experience: [{ title: 'Follow the competition.', copy: 'The Sportify experience brings sports event information and results into a dedicated web application.' }, { title: 'Information within reach.', copy: 'A focused public interface gives the sports community a place to keep up with the event.' }] },
  { slug: 'pg-campus', name: 'PG Campus Kalikav', category: 'Web application / Campus', summary: 'A dedicated system for accommodation and resident coordination.', url: projects[2]!.url, archived: true, focus: ['Accommodation listings', 'Room bookings', 'Resident coordination'], experience: [{ title: 'Built around campus life.', copy: projects[2]!.description }, { title: 'An archived project.', copy: 'The public demo is currently unavailable. Contact us if you would like to discuss a similar system.' }] },
];

export const engagements = [
  { title: 'Find your first release.', situation: 'You have an idea. The next step is unclear.', copy: 'Turn an opportunity into a focused product, a useful first journey, and a practical plan to build it.', outputs: ['Product direction', 'Experience prototype', 'Release scope'], project: 'bewingo-india' },
  { title: 'Make the product work better.', situation: 'Your software is getting in the way.', copy: 'Find the friction in your existing experience and improve the workflows that matter most to the people using it.', outputs: ['Experience review', 'Interaction design', 'Product improvements'], project: 'wafy-sports' },
  { title: 'Build with a clear direction.', situation: 'You need design and engineering to stay connected.', copy: 'Bring the product into production with a team that can connect the decisions, the details, and the delivery.', outputs: ['Web and mobile development', 'Technical foundations', 'Release support'], project: 'muzari' },
];

export const workingSteps = [
  { title: 'Define', copy: 'Understand the people, the problem, and what a useful first result looks like.', output: 'A shared direction' },
  { title: 'Design', copy: 'Make the experience tangible. Test the important decisions before building around them.', output: 'A working prototype' },
  { title: 'Build', copy: 'Bring design and engineering together in focused, reviewable releases.', output: 'Software you can use' },
  { title: 'Improve', copy: 'Learn from real use and decide what deserves attention next.', output: 'A considered next step' },
];
