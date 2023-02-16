import jwt_decode from "jwt-decode";

interface VerifyTokenProps {
  token: string | null;
}

interface TokenType {
  userId: string;
  expiry: Date;
}

export default function VerifyToken({ token }: VerifyTokenProps) {
  if (token) {
    const decoded: TokenType = jwt_decode(token);
    return decoded;
  }
  return null;
}
