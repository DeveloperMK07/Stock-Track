"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

/**
 * Renders a Popover root element with a `data-slot="popover"` attribute and forwards all props.
 *
 * @returns A Popover root element configured with the provided props and `data-slot="popover"`.
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

/**
 * Renders a popover trigger element using Radix's Trigger primitive.
 *
 * @returns The rendered trigger element with `data-slot="popover-trigger"` and any forwarded props.
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

/**
 * Renders positioned popover content inside a portal with themed styling and entrance/exit animations.
 *
 * @param className - Optional additional CSS classes to merge with the component's default styling.
 * @param align - Alignment of the content relative to the trigger (e.g., `"start"`, `"center"`, `"end"`). Defaults to `"center"`.
 * @param sideOffset - Distance in pixels between the trigger and the popover content. Defaults to `4`.
 * @returns A JSX element containing the popover content rendered inside a Radix Portal.
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

/**
 * Wraps Radix UI's Popover Anchor and forwards all props while adding a data-slot attribute.
 *
 * @param props - Props forwarded to `PopoverPrimitive.Anchor`
 * @returns The rendered Popover Anchor element
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }