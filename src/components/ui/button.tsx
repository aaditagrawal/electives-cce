import * as stylex from "@stylexjs/stylex";
import { styles } from "@/styles/site.stylex";
import { type StyledProps, type XStyle } from "@/styles/classes";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

const variantStyles = {
  default: styles.buttonvariantdefault,
  destructive: styles.buttonvariantdestructive,
  outline: styles.buttonvariantoutline,
  secondary: styles.buttonvariantsecondary,
  ghost: styles.buttonvariantghost,
  link: styles.buttonvariantlink,
};
const variantMarkers = {
  default: "sx-buttonvariantdefault",
  destructive: "sx-buttonvariantdestructive",
  outline: "sx-buttonvariantoutline",
  secondary: "sx-buttonvariantsecondary",
  ghost: "sx-buttonvariantghost",
  link: "sx-buttonvariantlink",
};
const sizeStyles = {
  default: styles.buttonsizedefault,
  sm: styles.buttonsizesm,
  lg: styles.buttonsizelg,
  icon: styles.buttonsizeicon,
  "icon-sm": styles.buttonsizeicon_sm,
  "icon-lg": styles.buttonsizeicon_lg,
};
const sizeMarkers = {
  default: "sx-buttonsizedefault",
  sm: "sx-buttonsizesm",
  lg: "sx-buttonsizelg",
  icon: "sx-buttonsizeicon",
  "icon-sm": "sx-buttonsizeicon_sm",
  "icon-lg": "sx-buttonsizeicon_lg",
};
type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;
type VariantOptions = { variant?: Variant | null; size?: Size | null };
/** Preserve the public class builder while compiling its atomic styles. */
function buttonVariants({
  variant = "default",
  size = "default",
  className,
  class: extraClass,
  xstyle,
}: VariantOptions & {
  className?: ClassValue;
  class?: ClassValue;
  xstyle?: XStyle;
} = {}) {
  return cn(
    stylex.props(
      variant ? variantStyles[variant] : styles.buttonBase,
      size && sizeStyles[size],
      xstyle,
    ).className,
    variant ? variantMarkers[variant] : "sx-buttonBase",
    size && sizeMarkers[size],
    className,
    extraClass,
  );
}

function Button({
  className,
  xstyle,
  variant,
  size,
  asChild = false,
  ...props
}: StyledProps<React.ComponentProps<"button">> &
  VariantOptions & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className, xstyle }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
