import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  // Create a state to track the open/closed state of the accordion trigger
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  
  // Combine the ref from forwardRef with our own ref
  const combinedRef = (node: HTMLButtonElement) => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    }
    triggerRef.current = node;
  };
  
  // Use effect to watch for data-state changes to update our state
  React.useEffect(() => {
    const handleStateChange = () => {
      if (triggerRef.current) {
        setIsOpen(triggerRef.current.getAttribute('data-state') === 'open');
      }
    };
    
    // Add a mutation observer to watch for attribute changes
    if (triggerRef.current) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'data-state'
          ) {
            handleStateChange();
          }
        });
      });
      
      observer.observe(triggerRef.current, { attributes: true });
      
      // Initial state check
      handleStateChange();
      
      return () => observer.disconnect();
    }
  }, []);
  
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={combinedRef}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left",
          className,
        )}
        onClick={() => {
          // This will be updated by the mutation observer after the state actually changes
        }}
        {...props}
      >
        {children}
        <div className="flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
          {isOpen ? (
            <img
              src="/faq-icons-1.svg"
              alt="Collapse"
              width={24}
              height={24}
              className="transition-opacity duration-200"
            />
          ) : (
            <img
              src="/faq-icons.svg"
              alt="Expand"
              width={24}
              height={24}
              className="transition-opacity duration-200"
            />
          )}
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };