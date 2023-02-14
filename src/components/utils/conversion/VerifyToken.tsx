import jwt_decode from "jwt-decode";

interface VerifyTokenProps {
  token: string;
}

export default function VerifyToken({ token }: VerifyTokenProps) {
  console.log("VerifyToken - token: ", token);
  const decoded = jwt_decode(token);
  console.log("VerifyToken - decoded: ", decoded);
}
