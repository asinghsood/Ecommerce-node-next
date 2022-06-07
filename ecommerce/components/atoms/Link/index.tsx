import { DetailedHTMLProps, AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

export type AnchorProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
    const { children, href = '/' } = props;
    console.log("🚀 ~ file: index.tsx ~ line 12 ~ children", children)
    return (
        <Link href={href} ref={ref}>
            <a>{children}</a>
        </Link>
    )
});

export default Anchor;