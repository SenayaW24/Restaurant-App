import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
`;

const CardSubtitle = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  color: #666;
`;

const CardButton = styled.button`
  padding: 10px 20px;
  background-color: #6a1b9a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4a148c;
  }
`;

const RestaurantCard = ({ image, name, cuisine }) => {
  return (
    <Card>
      <CardImage src={image} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{cuisine}</CardSubtitle>
        <CardButton>More Details</CardButton>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
