export interface HttpMessage {
  success: boolean;
  message: string;
}

export interface TokenMessage extends HttpMessage {
  token: string;
}
