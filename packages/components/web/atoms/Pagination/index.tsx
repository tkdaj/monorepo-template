import { forwardRef } from 'react';
import { PaginationProvider, usePagination } from '@monorepo-template/shared/PaginationContext';
import { Button } from '@monorepo-template/atoms/Button';
import { composeEventHandlers } from '@radix-ui/primitive';

const NextButton = forwardRef<
  React.ComponentRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ children = 'Next', disabled, onClick, ...props }, ref) => {
  const { canGoNext, goNext } = usePagination();
  return (
    <Button
      ref={ref}
      onClick={composeEventHandlers(onClick, goNext)}
      disabled={!canGoNext || disabled}
      {...props}
    >
      {children}
    </Button>
  );
});

const PreviousButton = forwardRef<
  React.ComponentRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ children = 'Prev', disabled, onClick, ...props }, ref) => {
  const { canGoPrev, goPrev } = usePagination();
  return (
    <Button
      ref={ref}
      onClick={composeEventHandlers(onClick, goPrev)}
      disabled={!canGoPrev || disabled}
      {...props}
    >
      {children}
    </Button>
  );
});

export const Pagination = Object.assign(PaginationProvider, { PreviousButton, NextButton });
