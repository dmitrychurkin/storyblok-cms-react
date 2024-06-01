import { storyblokEditable } from "@storyblok/react";
import { Collection, type StoryblokComponentProps } from "infrastructure/storyblok";

const Grid = ({ blok }: StoryblokComponentProps) => (
    <div
        style={{
            display: "flex",
            justifyContent: "space-around"
        }}
        {...storyblokEditable(blok)}
        className="grid"
    >
        <Collection
            data={blok.columns}
        />
    </div>
);

export default Grid;
