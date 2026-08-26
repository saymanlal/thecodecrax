import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  label,
  headline,
  subheadline,
  align = 'center',
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {label && (
        <div className={cn('inline-flex items-center gap-2 mb-3', align === 'center' ? 'justify-center' : '')}>
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-violet-500 font-semibold text-xs uppercase tracking-widest">
            {label}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-[1.15]',
          dark ? 'text-white' : 'text-gray-900'
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            'text-base md:text-lg max-w-2xl leading-relaxed',
            align === 'center' ? 'mx-auto' : '',
            dark ? 'text-gray-400' : 'text-gray-600'
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
