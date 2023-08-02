import React, { FC, MouseEvent } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

interface HeroProps {
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Hero: FC<HeroProps> = (props: HeroProps) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there 👋 <br />
          I am Ujjawal
        </SectionTitle>
        <SectionText>
          A fullstack developer with experience in building web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.
        </SectionText>
        <Button onClick={props.handleClick}>Hire Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
