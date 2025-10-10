"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/**
 * Styled wrapper around CmdK's CommandPrimitive that applies default layout and appearance while forwarding props.
 *
 * Renders a CommandPrimitive with a predefined base className and `data-slot="command"`, merging any provided
 * `className` and spreading remaining props onto the primitive.
 *
 * @returns The rendered CommandPrimitive element with merged `className` and forwarded props.
 */
function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a Dialog-backed command palette that wraps the Command component with accessible title and description slots.
 *
 * Renders a Dialog containing a visually hidden header (DialogTitle and DialogDescription) and DialogContent that hosts the Command palette. The DialogContent forwards showCloseButton and accepts additional Dialog props.
 *
 * @param title - Visible label for the command palette used in the hidden header
 * @param description - Descriptive text for the command palette used in the hidden header
 * @param className - Additional class names to apply to the DialogContent container
 * @param showCloseButton - Whether the DialogContent should render a close button; defaults to `true`
 * @returns The Dialog element containing the composed Command palette UI
 */
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

/**
 * Renders the command palette's search input with a leading search icon.
 *
 * Forwards all received props to the underlying CmdK `CommandPrimitive.Input` and composes
 * the provided `className` with the component's base input styles.
 *
 * @param className - Additional CSS classes appended to the input element's base classes
 * @param props - Props forwarded to the underlying `CommandPrimitive.Input`
 * @returns The rendered input wrapper element containing the search icon and the CmdK input
 */
function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

/**
 * Renders the list portion of the command palette.
 *
 * The element has a max height and vertical scrolling enabled, applies any
 * provided `className`, and receives `data-slot="command-list"`.
 *
 * @returns The React element for the command list with max height, vertical scrolling, and a composed `className`; remaining props are forwarded.
 */
function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the empty-state view shown when the command list has no results.
 *
 * @returns A `CommandPrimitive.Empty` element with default vertical padding and centered small text.
 */
function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

/**
 * Renders a styled command group section used to group related command items.
 *
 * @returns A React element representing the command group with `data-slot="command-group"` and composed styling.
 */
function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a styled separator used between command groups or items in the command palette.
 *
 * @param className - Additional CSS class names appended to the component's base styles
 * @returns The separator element for the command palette
 */
function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled command palette item for use inside the Command list.
 *
 * The component outputs a CommandPrimitive.Item element with a `data-slot="command-item"` attribute and a composed className for selected, disabled, and icon styling. Additional props are forwarded to the underlying primitive.
 *
 * @param className - Optional additional CSS classes to merge with the component's base styles.
 * @returns A React element representing a single command palette item.
 */
function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a shortcut badge aligned to the end of a command item.
 *
 * @returns The span element containing shortcut text, styled and aligned to the end of the command item.
 */
function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}