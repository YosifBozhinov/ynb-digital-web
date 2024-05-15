import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative", {
  variants: {
    variant: {
      default: "",
      "flex-y": "flex flex-col",
      centered: "grid place-items-center",
    },
    size: {
      default: "px-5 md:px-10 py-20 md:py-40",
      "clean-py": "px-5 md:px-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <section
        className={cn(sectionVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

const sectionContainerVariants = cva(
  "relative z-10 gap-5 w-full max-w-7xl mx-auto",
  {
    variants: {
      variant: {
        default: "",
        "flex-x": "",
        "flex-y": "flex flex-col",
        centered: "grid place-items-center",
        "2-cols": "grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5 items-start",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionContainerVariants> {}

const SectionContainer = React.forwardRef<
  HTMLDivElement,
  SectionContainerProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <div
      className={cn(sectionContainerVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
SectionContainer.displayName = "SectionContainer";

const sectionTitleBlockVariants = cva(
  "grid place-items-start gap-5 max-w-4xl ",
  {
    variants: {
      variant: {
        default: "",
        centered: "xs:place-items-center xs:text-center",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface SectionTitleBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionTitleBlockVariants> {}

const SectionTitleBlock = React.forwardRef<
  HTMLDivElement,
  SectionTitleBlockProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <div
      className={cn(sectionTitleBlockVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
SectionTitleBlock.displayName = "SectionTitleBlock";

const sectionTitleVariants = cva("text-6xl font-semibold", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof sectionTitleVariants> {}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <h2
        className={cn(sectionTitleVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
SectionTitle.displayName = "SectionTitle";

const sectionParagraphVariants = cva("max-w-md text-base text-muted-foreground", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SectionParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof sectionParagraphVariants> {}

const SectionParagraph = React.forwardRef<
  HTMLParagraphElement,
  SectionParagraphProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <p
      className={cn(sectionParagraphVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
SectionParagraph.displayName = "SectionParagraph";

const sectionGridVariants = cva(
    "w-full grid grid-cols-12 gap-5",
    {
      variants: {
        variant: {
          default: "",
        },
        size: {
          default: "",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );
  
  export interface SectionGridProps
    extends React.HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof sectionGridVariants> {}
  
  const SectionGrid = React.forwardRef<
    HTMLDivElement,
    SectionGridProps
  >(({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(sectionGridVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  });
  SectionGrid.displayName = "SectionGrid";

export {
  Section,
  sectionVariants,
  SectionContainer,
  sectionContainerVariants,
  SectionTitleBlock,
  sectionTitleBlockVariants,
  SectionTitle,
  sectionTitleVariants,
  SectionParagraph,
  sectionParagraphVariants,
  SectionGrid,
  sectionGridVariants,
};