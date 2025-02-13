import React, { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { noop } from '@monorepo-template/constants';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

export type PaginationContextType = {
  itemsPerPage: number;
  totalItems: number;
  page: number;
  setPage: (page: number) => void;
  pageCount: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  goNext: () => void;
  goPrev: () => void;
  pageNumbers: { page: number; key: string }[];
};

const PaginationContext = createContext<PaginationContextType>({
  itemsPerPage: 10,
  totalItems: 0,
  page: 0,
  pageCount: 0,
  setPage: noop,
  goNext: noop,
  goPrev: noop,
  canGoNext: true,
  canGoPrev: true,
  pageNumbers: [],
});

export function usePagination() {
  const context = useContext(PaginationContext);
  if (context == null) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }
  return context;
}

export type PaginationProviderProps = {
  page?: number;
  onPageChange?: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  canGoNext?: boolean;
  onCanGoNextChange?: (canGoNext: boolean) => void;
  canGoPrev?: boolean;
  onCanGoPrevChange?: (canGoPrev: boolean) => void;
  /**
   * pageCount is already calculated based on totalItems and itemsPerPage
   * but if you neeed to override it, you can do so here
   */
  pageCount?: number;
  children: React.ReactNode;
};

export function PaginationProvider({
  children,
  totalItems = 0,
  itemsPerPage: itemsPerPageProp,
  onItemsPerPageChange: onItemsPerPageChangeProp,
  page: pageProp,
  onPageChange: onPageChangeProp,
  canGoNext: canGoNextProp,
  onCanGoNextChange: onCanGoNextChangeProp,
  canGoPrev: canGoPrevProp,
  onCanGoPrevChange: onCanGoPrevChangeProp,
  pageCount: pageCountProp,
}: PaginationProviderProps) {
  const [page = 0, setPage] = useControllableState({
    prop: pageProp,
    defaultProp: 0,
    onChange: onPageChangeProp,
  });
  const [itemsPerPage = 10, setItemsPerPage] = useControllableState({
    prop: itemsPerPageProp,
    defaultProp: 10,
    onChange: onItemsPerPageChangeProp,
  });
  const [canGoNext = true, setCanGoNext] = useControllableState({
    prop: canGoNextProp,
    defaultProp: true,
    onChange: onCanGoNextChangeProp,
  });
  const [canGoPrev = true, setCanGoPrev] = useControllableState({
    prop: canGoPrevProp,
    defaultProp: true,
    onChange: onCanGoPrevChangeProp,
  });
  const pageCount = pageCountProp ?? Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = useMemo(() => {
    return Array.from({ length: pageCount }, (_, i) => {
      return {
        page: i,
        key: `${i}/${pageCount - 1}`,
      };
    });
  }, [pageCount]);

  useEffect(() => {
    if (canGoNextProp == null) {
      setCanGoNext(page < pageCount - 1);
    }
    if (canGoPrevProp == null) {
      setCanGoPrev(page > 0);
    }
  }, [canGoNextProp, canGoPrevProp, page, pageCount, setCanGoNext, setCanGoPrev]);

  const goNext = useCallback(() => {
    if (canGoNext) {
      setPage(page + 1);
    }
  }, [canGoNext, page, setPage]);

  const goPrev = useCallback(() => {
    if (canGoPrev) {
      setPage(page - 1);
    }
  }, [canGoPrev, page, setPage]);

  const value = useMemo(
    () => ({
      itemsPerPage,
      setItemsPerPage,
      totalItems,
      page,
      setPage,
      canGoPrev,
      canGoNext,
      goNext,
      goPrev,
      pageCount,
      pageNumbers,
    }),
    [
      canGoNext,
      canGoPrev,
      goNext,
      goPrev,
      itemsPerPage,
      setItemsPerPage,
      page,
      pageCount,
      pageNumbers,
      setPage,
      totalItems,
    ]
  );

  return <PaginationContext.Provider value={value}>{children}</PaginationContext.Provider>;
}
