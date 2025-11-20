// Mock Notes Data for Planning Applications

export interface Note {
  id: string
  applicationId: string
  type: 'comment'
  author: {
    name: string
    initials: string
    imageUrl?: string
  }
  comment: string
  date: string
  dateTime: string
  isRead: boolean
}

// Mock notes for planning application 1 (PA/2024/001)
export const mockNotes: Note[] = [
  {
    id: '1',
    applicationId: '1',
    type: 'comment',
    author: {
      name: 'Sarah Mitchell',
      initials: 'SM',
      imageUrl: undefined,
    },
    comment: 'Initial review completed. The application appears to be in order, but we need to verify the heritage consultation requirements given the proximity to the listed building.',
    date: '2d ago',
    dateTime: '2024-11-13T14:32:00',
    isRead: false,
  },
  {
    id: '2',
    applicationId: '1',
    type: 'comment',
    author: {
      name: 'Emily Chen',
      initials: 'EC',
      imageUrl: undefined,
    },
    comment: 'Heritage officer has provided feedback. They have no objections to the proposal provided that the materials match the existing building and appropriate drainage is installed to protect the listed building foundation.',
    date: '4d ago',
    dateTime: '2024-11-11T11:45:00',
    isRead: true,
  },
  {
    id: '3',
    applicationId: '1',
    type: 'comment',
    author: {
      name: 'Sarah Mitchell',
      initials: 'SM',
      imageUrl: undefined,
    },
    comment: 'Application received and validated. All required documents are present. The site is located within a conservation area and adjacent to a Grade II listed building, so heritage consultation will be required.',
    date: '2w ago',
    dateTime: '2024-11-01T09:30:00',
    isRead: true,
  },
]

// Helper function to get notes for a specific application
export function getNotesByApplicationId(applicationId: string): Note[] {
  return mockNotes.filter(note => note.applicationId === applicationId)
}

// Helper function to count unread notes for a specific application
export function getUnreadNotesCount(applicationId: string): number {
  return mockNotes.filter(note => note.applicationId === applicationId && !note.isRead).length
}
