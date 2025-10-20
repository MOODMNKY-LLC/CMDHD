import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>,
) {
  return <AccordionPrimitive.Root {...props} />;
}

export function AccordionItem(
  props: React.ComponentProps<typeof AccordionPrimitive.Item>,
) {
  return <AccordionPrimitive.Item {...props} />;
}

export function AccordionTrigger(
  props: React.ComponentProps<typeof AccordionPrimitive.Trigger>,
) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
        {...props}
      />
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent(
  props: React.ComponentProps<typeof AccordionPrimitive.Content>,
) {
  return (
    <AccordionPrimitive.Content
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    />
  );
}
