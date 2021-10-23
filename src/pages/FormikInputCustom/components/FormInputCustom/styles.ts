import styled from 'styled-components';
import ButtonStyles from '@material-ui/core/Button';

export const Container = styled.div`
  width: 400px;
  background-color: var(--color-white);
  border-radius: 6px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const DivButton = styled.div`
  margin-top: 10px;
`;

export const Button = styled(ButtonStyles)`
  width: 100%;
`;
