import { cn } from '@/shared/utils';

import {
  Tabs as TabsPrimitive,
  TabsList as TabsListPrimitive,
  TabsTrigger as TabsTriggerPrimitive,
  TabsContent as TabsContentPrimitive,
  TabsContents as TabsContentsPrimitive,
  TabsHighlight as TabsHighlightPrimitive,
  TabsHighlightItem as TabsHighlightItemPrimitive,
  type TabsProps as TabsPrimitiveProps,
  type TabsListProps as TabsListPrimitiveProps,
  type TabsTriggerProps as TabsTriggerPrimitiveProps,
  type TabsContentProps as TabsContentPrimitiveProps,
  type TabsContentsProps as TabsContentsPrimitiveProps,
} from './animate/Tabs';

type TabsProps = TabsPrimitiveProps;

function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

type TabsListProps = TabsListPrimitiveProps & { highlightClassName?: string };

function TabsList({ className, highlightClassName, ...props }: TabsListProps) {
  return (
    <TabsHighlightPrimitive
      className={cn(
        'absolute inset-0 z-0 rounded-lg border border-accent-dark bg-accent-dark/20 shadow',
        highlightClassName
      )}
    >
      <TabsListPrimitive
        // eslint-disable-next-line tailwindcss/no-arbitrary-value
        className={cn(
          'bg-muted inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground',
          className
        )}
        {...props}
      />
    </TabsHighlightPrimitive>
  );
}

type TabsTriggerProps = TabsTriggerPrimitiveProps;

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <TabsHighlightItemPrimitive value={props.value} className="grow">
      <TabsTriggerPrimitive
        // eslint-disable-next-line tailwindcss/no-arbitrary-value
        className={cn(
          'inline-flex w-full flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-2 py-1 duration-500 ease-in-out',
          'text-sm font-medium text-muted-foreground transition-colors',
          'disabled:pointer-events-none disabled:opacity-50',
          'focus-visible:border-ring focus-visible:outline-ring focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:ring',
          'h-[calc(100%-1px)] data-[state=active]:text-accent-light',
          "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        {...props}
      />
    </TabsHighlightItemPrimitive>
  );
}

type TabsContentsProps = TabsContentsPrimitiveProps;

function TabsContents(props: TabsContentsProps) {
  return <TabsContentsPrimitive {...props} />;
}

type TabsContentProps = TabsContentPrimitiveProps;

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsContentPrimitive
      className={cn('outline-none', className)}
      {...props}
    />
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentsProps,
  type TabsContentProps,
};
