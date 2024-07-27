import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';


function slugify(str: string) {
    return str
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/&/g, "-and-") // Replace & with and
        .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}


function createHeading(level: number) {
    const Heading = ({ children }: any) => {
        let slug = slugify(children);

        return React.createElement(
            `h${level}`,
            { id: slug },
            [ // an array 
                React.createElement("a", {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: "anchor",
                }),
            ],
            children
        );
    };
    Heading.displayName = `Heading${level}`;
    return Heading;

}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),

};


export function CustomMDX(props: any){
    return (
        <div>
            <MDXRemote {...props} components={{...components, (props.components || {})  }}/>
        </div>
    )
}




