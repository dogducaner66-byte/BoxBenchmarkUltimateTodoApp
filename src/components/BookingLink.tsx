import type { AnchorHTMLAttributes } from 'react';
import { bookingTarget } from '../content/cafeContent';

type BookingLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel' | 'title'> & {
  label: string;
};

export function BookingLink({ className, label, ...rest }: BookingLinkProps) {
  return (
    <a
      {...rest}
      className={className}
      href={bookingTarget.href}
      rel="noreferrer"
      target="_blank"
      title={bookingTarget.title}
    >
      {label}
      <span className="visually-hidden"> Harbor and Hearth rezervasyon akisini yeni sekmede acar.</span>
    </a>
  );
}
