import {
    useStoryblok as useStoryblokHook,
    type StoryblokBridgeConfigV2,
    type ISbStoriesParams
} from "@storyblok/react";

export function useStoryblok(
    slug: string,
    apiOptions?: ISbStoriesParams,
    bridgeOptions?: StoryblokBridgeConfigV2
) {
    return useStoryblokHook((
        window.location.pathname === '/'
            ? slug
            : window.location.pathname.replace('/', '')
    ), apiOptions, bridgeOptions);
};

export default useStoryblok;
