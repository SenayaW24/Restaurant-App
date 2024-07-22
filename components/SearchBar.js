import styled from '@emotion/styled';

const SearchBarContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Search by name, location" />
      <Button>Search</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
