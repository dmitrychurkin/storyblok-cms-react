import { storyblokEditable } from "@storyblok/react";
import { Collection, type StoryblokComponentProps } from "infrastructure/storyblok";

const Page = ({ blok }: StoryblokComponentProps) => (
    <main
        {...storyblokEditable(blok)}
    >
        <Collection
            data={blok.body}
        />
    </main>
);

export default Page;
