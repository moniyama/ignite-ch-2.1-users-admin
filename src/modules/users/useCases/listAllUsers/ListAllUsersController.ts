import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    user_id = Array.isArray(user_id) ? user_id[0] : user_id;
    try {
      const listUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).send(listUsers);
    } catch (error) {
      let code: number;
      if (error.message === "Usuário sem permissão") {
        code = 401;
      }
      code = 400;
      return response.status(code).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
