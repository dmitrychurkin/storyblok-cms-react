import { storyblokEditable } from "@storyblok/react";
import type { StoryblokComponentProps } from "infrastructure/storyblok";

const Teaser = ({ blok }: StoryblokComponentProps) => (
    <h2
        style={{
            textAlign: "center"
        }}
        {...storyblokEditable(blok)}
    >
        <>
            {blok.headline}
        </>
    </h2>
);

export default Teaser;
