import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterTitle = styled.h3`
  margin-bottom: 10px;
`;

const FilterItem = styled.label`
  margin-bottom: 5px;
`;

const FilterMenu = () => {
  return (
    <FilterContainer>
      <FilterGroup>
        <FilterTitle>Cuisine</FilterTitle>
        <FilterItem>Sri Lankan (50)</FilterItem>
        <FilterItem>Chinese (100)</FilterItem>
        <FilterItem>Indian (20)</FilterItem>
      </FilterGroup>
      <FilterGroup>
        <FilterTitle>Price (LKR)</FilterTitle>
        <FilterItem>350-1500</FilterItem>
        <FilterItem>1500-5000</FilterItem>
        <FilterItem>above 5000</FilterItem>
      </FilterGroup>
      <FilterGroup>
        <FilterTitle>Location</FilterTitle>
        <FilterItem>Colombo (300)</FilterItem>
        <FilterItem>Kalutara (200)</FilterItem>
        <FilterItem>Kelaniya (250)</FilterItem>
      </FilterGroup>
    </FilterContainer>
  );
};

export default FilterMenu;
