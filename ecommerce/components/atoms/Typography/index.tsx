import { Text } from './Typography.style';

type TypographyProps = {
    children?: React.ReactNode;
    htmlTag?: React.ElementType;
    cssStyle?: string;
    margin?: string;
}

const Typography = (props: TypographyProps) => {
    const { children, htmlTag, cssStyle, margin } = props;

    return (
        <Text as={htmlTag} styleType={cssStyle} margin={margin}>
            {children}
        </Text>
    )
}

export default Typography;