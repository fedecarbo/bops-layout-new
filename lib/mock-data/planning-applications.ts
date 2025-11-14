import { PlanningApplication } from './schemas';

export const mockPlanningApplications: PlanningApplication[] = [
  {
    id: '1',
    reference: 'PA/2024/001',
    applicantName: 'John Doe',
    address: '123 High Street, London, SW1A 1AA',
    description: 'Single storey rear extension',
    status: 'pending',
    submittedDate: '2024-01-15',
    assignedTo: 'Alice Johnson',
  },
  {
    id: '2',
    reference: 'PA/2024/002',
    applicantName: 'Jane Smith',
    address: '45 Park Lane, Manchester, M1 2AB',
    description: 'Loft conversion with dormer windows',
    status: 'in-review',
    submittedDate: '2024-01-20',
    assignedTo: 'Bob Smith',
  },
  {
    id: '3',
    reference: 'PA/2024/003',
    applicantName: 'Robert Brown',
    address: '78 Queen Street, Birmingham, B2 5QT',
    description: 'Change of use from retail to residential',
    status: 'approved',
    submittedDate: '2024-01-10',
    assignedTo: 'Carol White',
  },
];
