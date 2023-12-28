import { sign } from "jsonwebtoken";

export default function Encoder(payload, secretKey) {
  const encodedData = sign(payload, secretKey);
  return encodedData;
}
