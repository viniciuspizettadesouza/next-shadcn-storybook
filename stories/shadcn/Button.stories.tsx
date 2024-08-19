import { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Mail, Loader2} from "lucide-react";
import Link from "next/link";

// Meta defines the metadata for the storybook
const meta: Meta<typeof Button> = {
    title: "Shadcn/Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: {
            control: { type: "select" },
            options: ["default", "sm", "lg", "icon"],
        },
        asChild: {
            control: "boolean",
        },
    },
}

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: "Default Button",
        variant: "default",
        size: "default",
    },
};

export const Destructive: Story = {
    args: {
        children: "Destructive Button",
        variant: "destructive",
        size: "default",
    }
}

export const Outline: Story = {
    args: {
        children: "Outline Button",
        variant: "outline",
        size: "default",
    }
}

export const Secondary: Story = {
    args: {
        children: "Secondary Button",
        variant: "secondary",
        size: "default",
    }
}

export const Ghost: Story = {
    args: {
        children: "Ghost Button",
        variant: "ghost",
        size: "default",
    }
}

export const LinkButton: Story = {
    args: {
        children: "Link Button",
        variant: "link",
        size: "default",
    }
}

export const Small: Story = {
    args: {
        children: "Small Button",
        size: "sm",
        variant: "default",
    }
}

export const Large: Story = {
    args: {
        children: "Large Button",
        size: "lg",
        variant: "default",
    }
}

export const Icon: Story = {
    args: {
        children: <ChevronRight className="h-4 w-4"/>,
        size: "icon",
        variant: "outline",
    }
}

export const WithIcon: Story = {
    args: {
      children: (
        <>
          <Mail className="mr-2 h-4 w-4 pr-20" /> Login with Email
        </>
      ),
      variant: "default",
      size: "default",
    },
  };

export const Loading: Story = {
    args: {
        children: (
            <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </>
        ),
        variant: "default",
        size: "default",
        disabled: true,
    },
};

export const AsChild: Story = {
    args: {
        asChild: true,
        children: (
            <Link href="/login">
                Login
            </Link>
        ),
        variant: "default",
        size: "default",
    },
};
