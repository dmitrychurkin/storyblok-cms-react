import type { SbBlokKeyDataTypes } from "@storyblok/react";
import Component from "./Component";

type Props = {
    readonly data: SbBlokKeyDataTypes;
};

const Collection = ({ data }: Props) => (
    <>
        {Array.of(data)
            .flat()
            .filter(Boolean)
            .map(blok => {
                if ((typeof blok === 'object') && ('_uid' in blok)) {
                    const { _uid, ...componentProps } = blok;
                    const uid = String(_uid);

                    return (
                        <Component
                            key={uid}
                            _uid={uid}
                            blok={componentProps}
                        />
                    );
                }
            })}
    </>
);

export default Collection;
