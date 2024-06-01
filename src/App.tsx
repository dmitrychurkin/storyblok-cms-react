import { WebRoute } from "config/routing";
import { sbStoriesParams } from "config/app";
import { Component, useStoryblok } from "infrastructure/storyblok";

const App = () => {
    const story = useStoryblok(WebRoute.Home, sbStoriesParams);

    return (
        <Component
            blok={story?.content}
            fallback={(
                <div>
                    Loading...
                </div>
            )}
        />
    );
};

export default App;
