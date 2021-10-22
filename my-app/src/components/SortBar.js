import styled from "styled-components";

export default function SortBar({ filterBy, setFilterBy }) {
  function handleFilter(e) {
    setFilterBy(4);
    // console.log(setFilterBy(4));
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
            <select onChange={handleFilter}>
              {/* <option value="any">Any</option> */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value={filterBy}>4</option>
            </select>
          </p>
        </div>
        <div>
          <p>
            Bathrooms:
            <select>
              <option value="Bathrooms">1</option>
              <option value="Bathrooms">2</option>
              <option value="Bathrooms">3</option>
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
