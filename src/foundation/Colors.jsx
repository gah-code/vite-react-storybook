import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

/** Component for displaying theme colors */
export const Colors = ({ colors }) => {
  return (
    <ColorsWrapper>
      {Object.entries(colors).map(([name, value]) => (
        <ColorCircle key={name} style={{ backgroundColor: value }}>
          <ColorName>{name}</ColorName>
          <ColorValue>{value}</ColorValue>
        </ColorCircle>
      ))}
    </ColorsWrapper>
  );
};

const ColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 20px;
`;

const ColorCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  position: relative;
`;

const ColorName = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  position: absolute;
  bottom: 20px;
  font-size: 0.8rem;
`;

const ColorValue = styled.div`
  font-size: 0.7rem;
  position: absolute;
  bottom: 5px;
`;

Colors.propTypes = {
  /** Theme colors to display */
  colors: PropTypes.object.isRequired,
};
