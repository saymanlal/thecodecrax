import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'purple' | 'violet';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-violet-100 text-violet-800 border border-violet-200',
    outline: 'border border-violet-300 text-violet-700 bg-white/50',
    purple: 'bg-purple-950 text-purple-200 border border-purple-800',
    violet: 'bg-violet-600 text-white font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
