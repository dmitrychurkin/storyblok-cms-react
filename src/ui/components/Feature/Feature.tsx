import { storyblokEditable } from "@storyblok/react";
import type { StoryblokComponentProps } from "infrastructure/storyblok";

const Feature = ({ blok }: StoryblokComponentProps) => (
    <div
        {...storyblokEditable(blok)}
        className="column feature"
    >
        <>
            {blok.name}
        </>
    </div>
);

export default Feature;
