export interface BreadcrumbItem {
  label: string
  href: string
}

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ]
  let currentPath = ''
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`
    const segment = segments[i]
    const label = formatSegmentLabel(segment);

    breadcrumbs.push({
      label,
      href: currentPath
    })
  }
  
  return breadcrumbs;
}

function formatSegmentLabel(segment: string): string {
  const staticRouteLabels: Record<string, string> = {
    'products': 'Products',
    'blog': 'Blog',
    'electronics': 'Electronics',
    'clothing': 'Clothing',
    'books': 'Books'
  }
  if (staticRouteLabels[segment]) {
    return staticRouteLabels[segment]
  }

  // Default: capitalize and replace dashes with spaces
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}