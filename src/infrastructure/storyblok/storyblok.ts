import {
    storyblokInit,
    apiPlugin,
    type SbReactSDKOptions
} from "@storyblok/react";

export const init = (pluginOptions: SbReactSDKOptions = {}) =>
    storyblokInit({
        ...pluginOptions,
        accessToken: import.meta.env.VITE_STORY_BLOCK_PREVIEW_TOKEN,
        use: [apiPlugin]
    });
