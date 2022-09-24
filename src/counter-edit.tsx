/// <reference types="./types.d.ts" />

const useBlockProps = wp.blockEditor.useBlockProps;

wp.blocks.registerBlockType("mytheme/counter", {
    apiVersion: 2,
    title: "Example: Counter",
    icon: "universal-access-alt",
    category: "widgets",
    attributes: {
        count: {
            type: "number",
            default: 0,
        } as BlockAttribute<number>,
    },
    edit({ attributes, setAttributes }) {
        const blockProps = useBlockProps();
        return (
            <div {...blockProps}>
                <button
                    onClick={() =>
                        setAttributes({
                            count: attributes.count + 1,
                        })
                    }
                >
                    Add one
                </button>
                {attributes.count}
            </div>
        );
    },
});
