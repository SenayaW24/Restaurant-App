import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/images/vector.png') no-repeat center center;
  background-size: cover;
`;

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const GoogleSignIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }

  & div {
    margin-right: 0.5rem;
  }
`;

export default function Register() {
  return (
    <Container>
      <FormWrapper>
        <Title>FiveStarEat.com</Title>
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Create Account</Button>
          <GoogleSignIn>
            <div>
              <Image src="/images/download.png" alt="Google icon" width={20} height={20} />
            </div>
            Sign up with Google
          </GoogleSignIn>
        </form>
      </FormWrapper>
    </Container>
  );
}
