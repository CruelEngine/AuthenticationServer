import { TokenMessage } from "./../interfaces/http-message";
import { HttpMessage } from "../interfaces/http-message";
export class HttpResponseMessage {
  constructor() {}

  public defaultMessage(success: boolean, message: string) {
    let httpResponse: HttpMessage = { success: success, message: message };
    return httpResponse;
  }
  public tokenMessage(success: boolean, message: string, token: string) {
    let httpResponse: TokenMessage = {
      success: success,
      message: message,
      token: token
    };
    return httpResponse;
  }
}
