"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Renders a DialogPrimitive.Root element with data-slot="dialog" and forwards all received props.
 *
 * @returns The dialog root element with forwarded props.
 */
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

/**
 * Renders a dialog trigger element and forwards all received props to it.
 *
 * @param props - Props to apply to the trigger element (spread onto the rendered element)
 * @returns The rendered dialog trigger element
 */
function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/**
 * Render a dialog portal element with a standardized `data-slot` attribute.
 *
 * @returns A React element representing a dialog portal with `data-slot="dialog-portal"` and the provided props applied
 */
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/**
 * Renders a dialog close trigger element with data-slot="dialog-close".
 *
 * Forwards all received props to the rendered close trigger.
 *
 * @returns The rendered dialog close trigger element that closes the dialog when activated.
 */
function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

/**
 * Renders the dialog backdrop (overlay) with default positioning, backdrop color, and open/close animation classes.
 *
 * @param className - Additional CSS class names to merge with the component's default classes
 * @returns The overlay element used as the dialog backdrop
 */
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders dialog content centered in a portal with backdrop, animations, and an optional close button.
 *
 * @param className - Additional CSS classes to apply to the content container.
 * @param showCloseButton - If `true`, renders a close button in the top-right corner; defaults to `true`.
 * @returns The dialog content node composed of Portal, Overlay, and Content, containing the provided children.
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

/**
 * Renders the dialog header container with default layout and a `data-slot` attribute for styling and testing.
 *
 * @param className - Additional CSS classes to extend or override the default header styles.
 * @returns The header element wrapping dialog header content.
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/**
 * Layout container for dialog footer actions.
 *
 * Renders a `div` with `data-slot="dialog-footer"` that applies a responsive layout: stacked and reversed on small screens and a horizontal row aligned to the end on larger screens. Additional class names are merged into the container and any other `div` props are forwarded.
 *
 * @param className - Additional CSS classes to append to the default footer layout
 * @returns A `div` element used as the dialog footer
 */
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a dialog title element with default typography and a `data-slot="dialog-title"` attribute.
 *
 * @param className - Additional CSS class names to merge with the default title styles
 * @param props - All other props are forwarded to the underlying `DialogPrimitive.Title`
 * @returns A `DialogPrimitive.Title` element with composed class names and the `data-slot="dialog-title"` attribute
 */
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders a dialog description element with a consistent data-slot and default typography.
 *
 * @returns A DialogPrimitive.Description element with `data-slot="dialog-description"`, default muted small-text classes, the provided `className` merged, and all other props forwarded.
 */
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}