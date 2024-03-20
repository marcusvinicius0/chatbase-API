import { createGetChatbotsService } from "../../../utils/services.js";

class GetChatbotsController {
  async index(req, res, next) {
    try {
      const slug = req.params.id;

      createGetChatbotsService;
      const service = await createGetChatbotsService.execute({ slug });
  
      return res.status(200).json(service);
    } catch (error) {
      next(error);
    }
  }
}

export { GetChatbotsController };
