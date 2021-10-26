import styled from "styled-components";

export default function SortBar({ filterBy, setFilterBy, filterBath, setFilterBath }) {
  function handleFilter(e) {
    setFilterBy(e.target.value);
  }

  function handleBathFilter(e) {
    setFilterBath(e.target.value);
  }

  return (
    <MainDiv>
      <Div>
        <h3>
          <strong>Filter by:</strong>
        </h3>
        <div>
          <p>
            Bedrooms:
            <select onChange={handleFilter} value={filterBy}>
              {/* <option value="any">Any</option> */}
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
        </div>
        <div>
          <p>
            Bathrooms:
            <select onChange={handleBathFilter} value={filterBath}>
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
        </div>
      </Div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  text-align: left;
  font-family: "Andada Pro", serif;
`;

const Div = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
