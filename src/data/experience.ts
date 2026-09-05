import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'pulo-gebang',
    role: 'Project Manager',
    organization: 'Kelurahan Pulo Gebang',
    location: 'Jakarta, Indonesia (Hybrid)',
    period: 'October 2025 – March 2026',
    type: 'Apprenticeship',
    summary: 'Orchestrated the end-to-end delivery of a government web-based internship application management system, serving as the sole technical bridge between municipal stakeholders and a 3-person engineering team.',
    responsibilities: [
      'Led and coordinated a 3-person cross-functional project team spanning UX design, full-stack development, and quality assurance.',
      'Served as the primary liaison between kelurahan government stakeholders and the engineering squad, translating civic policy and administrative workflows into actionable sprint tasks.',
      'Structured project roadmaps, managed sprint milestones, and maintained rigorous alignment with government compliance requirements.',
      'Authored and presented technical project proposals, data flow specifications, and executive demos to department leadership.',
      'Managed rapid scope adjustments and regulatory revisions without compromising deployment deadlines or software integrity.'
    ],
    impactKeywords: ['Cross-Functional Leadership', 'Government Stakeholder Management', 'System Delivery', 'Agile Planning', 'Requirements Engineering']
  },
  {
    id: 'gunadarma-lab',
    role: 'Information Systems Laboratory Assistant',
    organization: 'Universitas Gunadarma',
    location: 'Bekasi, West Java, Indonesia',
    period: 'October 2023 – March 2024',
    type: 'Academic Appointment',
    summary: 'Instructed undergraduate computer science students in modern web programming paradigms and database concepts while managing academic evaluation pipelines.',
    responsibilities: [
      'Delivered hands-on laboratory lectures on PHP programming, relational data modeling, and web application architecture to university students.',
      'Engineered instructional syllabus materials, laboratory practical guides, coding quizzes, and midterm examinations.',
      'Conducted code audits and evaluated student coursework, offering direct feedback on algorithmic efficiency, syntax rigor, and structure.',
      'Monitored laboratory infrastructure, managed student attendance rosters, and supported academic department administrative operations.'
    ],
    impactKeywords: ['Technical Instruction', 'PHP & Web Architecture', 'Code Review', 'Curriculum Design', 'Academic Administration']
  }
];

export const educationData = {
  degree: 'Bachelor of Computer Science',
  major: 'Informatics (Computer Science)',
  institution: 'Universitas Gunadarma',
  graduationDate: 'August 2026',
  gpa: '3.79 / 4.00',
  location: 'Indonesia',
  languages: [
    { language: 'Indonesian', proficiency: 'Native Speaker' },
    { language: 'English', proficiency: 'Professional Working / Fluent' }
  ]
};
