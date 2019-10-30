import React from 'react';

import styled from 'styled-components';

const LogoContainer = styled.div`
    font-size: 4rem;
`

const Logo = () => <LogoContainer><span role="img" aria-label="globe">&#127759;</span></LogoContainer>

export default Logo;