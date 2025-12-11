'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { label: 'Home',href: '/' },
    { label: 'Companions',href: '/companions' },
    { label: 'My Journey',href: '/my-journey' },    
]

const NavItems = () => {
    const pathname = usePathname()
    const normalizedPath = pathname !== '/' && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname

    return (
      <nav className='flex items-center gap-4 text-sm text-foreground/70'>
        {navItems.map(({ label, href }) => {
          const normalizedHref = href !== '/' && href.endsWith('/') ? href.slice(0, -1) : href
          const isExactMatch = normalizedPath === normalizedHref
          const isNestedMatch = normalizedHref !== '/' && normalizedPath.startsWith(`${normalizedHref}/`)
          const isActive = isExactMatch || isNestedMatch

          return (
            <Link
              href={href}
              key={label}
              className={cn(
                'transition-colors hover:text-primary',
                isActive && 'text-primary font-semibold'
              )}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    )
}

export default NavItems