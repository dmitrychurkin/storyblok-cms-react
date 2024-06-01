import { StoryblokComponent, type SbBlokData } from "@storyblok/react";
import type { ReactNode } from "react";

export type StoryblokComponentProps = {
    readonly blok: SbBlokData;
    readonly [key: string]: unknown;
    readonly _uid?: string;
    readonly fallback?: ReactNode;
};

const Component = ({ fallback, ...props }: StoryblokComponentProps) => (
    <>
        {props.blok
            ? (
                <StoryblokComponent
                    {...props}
                />
            )
            : fallback}
    </>
);

export default Component;
