declare module '*.mdx' {
    import { ReactElement } from 'react';
    export const frontmatter: any;
    export default function MDXContent(props: any): ReactElement;
}
