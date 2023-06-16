const mapping: Record<string, string> = {
  companies: 'company',
  inquiries: 'inquiry',
  invitations: 'invitation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
