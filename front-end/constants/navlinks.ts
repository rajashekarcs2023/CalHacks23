import {
  blood,
  chat1,
  dashboard,
  health,
  inhale,
  profile,
  upload,
} from '@/public'

export const navlinks = [
  { path: '/dashboard', title: 'Dashboard', logo: dashboard },
  { path: '/intakes', title: 'Intakes', logo: inhale },
  { path: '/chat', title: 'Chat', logo: chat1 },
  { path: '/file_upload', title: 'File Upload', logo: upload },
  { path: '/calories', title: 'Calories', logo: health },
  { path: '/cholestrol', title: 'Cholestrol', logo: blood },
  { path: '/user_profile', title: 'User Profile', logo: profile },
]
