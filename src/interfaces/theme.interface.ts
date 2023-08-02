export interface ITheme {
    breakpoints: {
        sm: string,
        md: string,
        lg: string
    }
}

export interface IStyledProps {
    theme: ITheme;
    title?: any;
    active?: number | string;
    index?: number | string;
    final?: boolean;
    id?: string;
    onClick?: (e: React.MouseEvent, i: number) => void;
    ref?: any;
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