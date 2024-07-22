import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search by location" />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
