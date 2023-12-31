import styled from 'styled-components'
import { IStyledProps } from "../../interfaces/theme.interface"

export const ImageContainer = styled.div<IStyledProps>`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props: IStyledProps) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props: IStyledProps) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img<IStyledProps>`
  width: 100%;
`

export const List = styled.ul<IStyledProps>`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${(props: IStyledProps) => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${(props: IStyledProps) => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${(props: IStyledProps) => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;

  @media ${(props: IStyledProps) => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4<IStyledProps>`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${(props: IStyledProps) => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${(props: IStyledProps) => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p<IStyledProps>`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props: IStyledProps) => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props: IStyledProps) => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li<IStyledProps>`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${(props: IStyledProps) => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${(props: IStyledProps) => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img<IStyledProps>`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${(props: IStyledProps) => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props: IStyledProps) => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
