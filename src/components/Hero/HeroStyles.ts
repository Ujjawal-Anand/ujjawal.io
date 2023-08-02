import styled from 'styled-components';
import { IStyledProps } from "../../interfaces/theme.interface"


export const LeftSection = styled.div <IStyledProps>`
  width: 100%;
  @media ${(props: IStyledProps) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props: IStyledProps) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
