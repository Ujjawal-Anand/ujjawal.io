export interface ITheme {
    breakpoints: {
        sm: string,
        md: string,
        lg: string
    }
}

export interface IStyledProps {
    theme: ITheme;
    title?: boolean | undefined | null;
    active?: number | string;
    index?: number | string;
    final?: boolean;
    id?: string;
    onClick?: (e: React.MouseEvent, i: number) => void;
    ref?: React.RefObject<HTMLDivElement | HTMLUListElement | null>;
}

export interface DefaultTheme {
    fonts: {
        main: string;
        title: string;
    };
    colors: {
        background1: string;
        primary1: string;
    };
}